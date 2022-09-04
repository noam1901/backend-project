import { Controller, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
    constructor(private service:OrdersService){}

    @Get()
    get(){
        return this.service.getOrders()
    }
}
