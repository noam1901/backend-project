import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CartdetailsService } from '../cartdetails/cartdetails.service';
import { Repository } from 'typeorm';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Cart } from './entities/cart.entity';
import { ProductsService } from '../products/products.service';

@Injectable()
export class CartService {
  constructor(@InjectRepository(Cart) private cartRipo:Repository<Cart>, 
 private readonly cartdetailsService:CartdetailsService,
 private productsService:ProductsService){}
  async addOrUpdate(body) {
    const cartExist = await this.cartRipo.find({
      where: [{'userid':body.userid}]
    })
    if(cartExist.length === 0){
      const makeCart = await this.cartRipo.create({"userid":body.userid})
      const newCart = await this.cartRipo.save(makeCart)    
      await this.cartRipo.query(`INSERT INTO cartdetails (cartid, productid,  amount, unitprice)
        VALUES (${newCart.cartid},${body.productid},${body.amount}, ${body.unitprice})`)
    }else {
      await this.cartRipo.query(`INSERT INTO cartdetails (cartid, productid, amount, unitprice) 
      VALUES(${cartExist[0].cartid}, ${body.productid}, ${body.amount}, ${body.unitprice}) 
      ON DUPLICATE KEY UPDATE amount = ${body.amount} ,unitprice = ${body.unitprice}`)
      
    }
    return true
  }

  async getCartById(userid) {
    const cart = await this.cartRipo.find({
      where:[{'userid':userid}]
    })
    let cartID
    if(cart.length === 0){
      const makeCart = await this.cartRipo.create({"userid":userid})
      const newCart = await this.cartRipo.save(makeCart) 
      cartID = newCart.cartid
    }else {
      cartID = cart[0].cartid
    }
    const items = await this.cartdetailsService.getCartByCartId(cartID)
    const fullItems = []
    for(let item of items){
      const newItem = await this.productsService.getProductOnePhoto(item.productid)
      newItem[0].amount = item.amount
      newItem[0].cartid = item.cartid
      fullItems.push(newItem[0])
    }
    return fullItems
  }

  async removeByCartId(cartid){
    return await this.cartRipo.delete({'cartid':cartid})
  }
  async getByCartId(cartid){
    return await this.cartRipo.find({where:[{'cartid':cartid}]})
  }

}
