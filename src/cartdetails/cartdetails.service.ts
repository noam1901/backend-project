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
  

 
}
