import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
    constructor(private service:OrdersService){}

    @Get()
    get(){
        return this.service.getOrders()
    }
    @Post()
    newOrder(@Body() body){
        return this.service.createNewOrder(body)
    }
}
