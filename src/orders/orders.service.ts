import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Orders } from './orders.entity';
@Injectable()
export class OrdersService {
    constructor(@InjectRepository(Orders) private ordersRepository:Repository<Orders>){}
    async getOrders(){
        return await this.ordersRepository.find()
    }
}
