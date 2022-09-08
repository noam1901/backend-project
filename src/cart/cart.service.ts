import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Cart } from './entities/cart.entity';

@Injectable()
export class CartService {
  constructor(@InjectRepository(Cart) private cartRipo:Repository<Cart>){}
  async addOrUpdate(body) {
    console.log(body);
    
    const cartExist = await this.cartRipo.find({
      where: [{'userid':body.userid}]
    })
    console.log(cartExist);
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

  findAll() {
    return `This action returns all cart`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cart`;
  }

  update(id: number, updateCartDto: UpdateCartDto) {
    return `This action updates a #${id} cart`;
  }

  remove(id: number) {
    return `This action removes a #${id} cart`;
  }
}
