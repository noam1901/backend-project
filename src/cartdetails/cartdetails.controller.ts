import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CartdetailsService } from './cartdetails.service';
import { CreateCartdetailDto } from './dto/create-cartdetail.dto';
import { UpdateCartdetailDto } from './dto/update-cartdetail.dto';

@Controller('cartdetails')
export class CartdetailsController {
  constructor(private readonly cartdetailsService: CartdetailsService) {}

}
  
