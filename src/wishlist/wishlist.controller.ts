import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';

@Controller('wishlist')
export class WishlistController {
  constructor(private readonly wishlistService: WishlistService) {}

  @Post()
  create(@Body() body) {
    return this.wishlistService.create(body);
  }

  @Get(':id')
  getWishlistById(@Param('id') id){
    return this.wishlistService.getWishlist(id)
  }

  @Delete('all')
  deteleAllWishlist(@Body() body){
    return this.wishlistService.clearWishlist(body)
  }

  @Delete()
  removeFromWishlist(@Body() body){
    return this.wishlistService.removeItem(body)
  }
}
