import { Controller, Get, Post, Body, Patch, Param, Delete, Session } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  addOrUpdate(@Body() body) {
    
    return this.cartService.addOrUpdate(body);
  }

  @Get(':id')
  getCart(@Param('id') id){
    
    return this.cartService.getCartById(+id)
  }

}
