import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsService } from '../products/products.service';
import { Repository } from 'typeorm';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { Wishlist } from './entities/wishlist.entity';

@Injectable()
export class WishlistService {
  constructor(@InjectRepository(Wishlist) private wishlistRepo:Repository<Wishlist>,
  private productsService:ProductsService ){}
  async create(body) {
    const addToList =  await this.wishlistRepo.create({productid:body.productid, userid: body.userid});
    return await this.wishlistRepo.save(addToList)
  }

  async getWishlist(id){
    const wishlist = await this.wishlistRepo.find({
      select:['productid'],
      where: [{'userid': id}]
    })
    const items = []
    for(let item of wishlist){
      const newItem = await this.productsService.getProductOnePhoto(item.productid)
      items.push(newItem[0])
    }
    
    return items
  }

  async removeItem(body){
    return await this.wishlistRepo.delete({'userid':body.userid,"productid":body.productid})
  }
  async clearWishlist(body){
    return await this.wishlistRepo.delete({'userid':body.userid})
  }
}
