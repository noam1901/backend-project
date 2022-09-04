import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Products } from './products.entity';

@Injectable()
export class ProductsService {
    constructor(@InjectRepository(Products) private productsRepository: Repository<Products>) {}

     async getProducts():Promise<Products[]> {
        return  await this.productsRepository.find()
    }

    async getProduct(_id: number):Promise<Products[]> {
        return await this.productsRepository.find({
            select: ['productid','productName'],
            where: [{'productid':_id}]
        })
    }
}
