import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Orders } from './orders.entity';
import { CartService } from '../cart/cart.service';
import { CartdetailsService } from '../cartdetails/cartdetails.service';
import { OrdersdetailsService } from '../ordersdetails/ordersdetails.service';
@Injectable()
export class OrdersService {
    constructor(@InjectRepository(Orders) private ordersRepository:Repository<Orders>, 
    private cartService: CartService,
    private cartDetailsService: CartdetailsService,
    private ordersDetailsService: OrdersdetailsService){}
    async getOrders(){
        return await this.ordersRepository.find()
    }
    async createNewOrder(body){
        const newOrder = await this.ordersRepository.create({userId: body.userid,
        orderDate: new Date(), ShipAddress: body.address, shipCountry: body.country,
        shipCity: body.city, shipPostalCode: body.postalCode })
        const addNewOrder = await this.ordersRepository.save(newOrder)
        const removeCart = await this.cartService.removeByCartId(body.cartid)
        const itemsFromCart = await this.cartDetailsService.getCartByCartId(body.cartid)
        for(let item of itemsFromCart){
            const itemToCreate = {orderid: addNewOrder.orderId,
            productid: item.productid,
            unitprice: item.unitprice,
            amount: item.amount}
            await this.ordersDetailsService.create(itemToCreate)
        }
        const removeItemsFromCart = await this.cartDetailsService.deleteCartByCartId(body.cartid)
        return true      
    }
}
