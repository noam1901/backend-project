import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
    constructor(private service:OrdersService){}
    @Get(':id')
    getOrdersByUserId(@Param('id') id){
        return this.service.getOrdersByUser(id)
    }

    @Get()
    get(){
        return this.service.getOrders()
    }
    @Post()
    newOrder(@Body() body){
        return this.service.createNewOrder(body)
    }
}
