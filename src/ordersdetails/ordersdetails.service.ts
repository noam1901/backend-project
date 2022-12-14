import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsService } from '../products/products.service';
import { Repository } from 'typeorm';
import { CreateOrdersdetailDto } from './dto/create-ordersdetail.dto';
import { UpdateOrdersdetailDto } from './dto/update-ordersdetail.dto';
import { Ordersdetails } from './entities/ordersdetail.entity';

@Injectable()
export class OrdersdetailsService {
  constructor(@InjectRepository(Ordersdetails) private ordersdetailsRepo: Repository<Ordersdetails>,
  private productsService:ProductsService){}
  async create(body) {
    const newDetail = await this.ordersdetailsRepo.create({
      orderId: body.orderid, 
      productId: body.productid,
      unitPrice: body.unitprice,
      amount: body.amount,
      discount: 0
    })
    return await this.ordersdetailsRepo.save(newDetail)
  }
  async getDetailsByOrderId(id){
    const items = await this.ordersdetailsRepo.find({
      where: [{'orderId': id}]
    })
    const itemsWithName = []
    for(let item of items){
      const itemName = await this.productsService.getProductName(item.productId)
      itemsWithName.push({...item,productName: itemName[0].productName})
    }
    return itemsWithName
    
  }
}
