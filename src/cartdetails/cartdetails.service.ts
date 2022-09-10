import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cartdetails } from './entities/cartdetail.entity';

@Injectable()
export class CartdetailsService {
  constructor(@InjectRepository(Cartdetails) private cartDetailsRepo:Repository<Cartdetails>){}
  async getCartByCartId(cartId){
    const cart = await this.cartDetailsRepo.find({
      where: [{'cartid': cartId}]
    })
    return cart
  }
  async deleteCartByCartId(cartId){
    const cart = await this.cartDetailsRepo.delete({'cartid': cartId})
    return cart
  }
  async removeItemFromCart(body){
    return await this.cartDetailsRepo.createQueryBuilder().delete().from(Cartdetails).where(`cartid = :cartid and productid = :productid`,{cartid: body.cartid, productid: body.productid}).execute()
  }
  async clearCart(body){
    return await this.cartDetailsRepo.createQueryBuilder().delete().from(Cartdetails).where(`cartid = :cartid`,{cartid: body.cartid}).execute()
  }

 
}
