import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrdersdetailsService } from './ordersdetails.service';
import { CreateOrdersdetailDto } from './dto/create-ordersdetail.dto';
import { UpdateOrdersdetailDto } from './dto/update-ordersdetail.dto';

@Controller('ordersdetails')
export class OrdersdetailsController {
  constructor(private readonly ordersdetailsService: OrdersdetailsService) {}

 

}
