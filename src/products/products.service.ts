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
    async getProductsOnePhoto(){
        return await this.productsRepository.query(`select products.productid, productname, unitprice, UnitInStock, Description, discount, avg(rating) as rating, imgurl
        from products join ratings 
        on products.productid = ratings.productid
        join imgs
        on imgs.productid = products.ProductID
        group by products.productid`)
    }
    async getProductOnePhoto(prodid){  
        return await this.productsRepository.query(`select products.productid, productname, unitprice, UnitInStock, Description, discount, avg(rating) as rating, imgurl
        from products join ratings 
        on products.productid = ratings.productid
        join imgs
        on imgs.productid = products.ProductID
        where products.productid = ${prodid}
        group by products.productid`)
    }
    async getProductById(prodid){  
        return await this.productsRepository.query(`select products.productid, productname, unitprice, UnitInStock, Description, discount, avg(rating) as rating
        from products join ratings 
        on products.productid = ratings.productid
        where products.productid = ${prodid}
        group by products.productid`)
    }
    async getTopProducts(){
        return await this.productsRepository.query(`select products.productid, productname, unitprice, UnitInStock, Description, discount, avg(rating) as rating, imgurl
        from products join ratings 
        on products.productid = ratings.productid
        join imgs
        on imgs.productid = products.ProductID
        group by products.productid
        order by avg(rating) DESC limit 6`)
    }
    async updateAmount(prodid, amount){
        const prodToUpdate = await this.productsRepository.find({
            where:[{'productid': prodid}]
        })
        prodToUpdate[0].unitInStock = prodToUpdate[0].unitInStock - amount
        return await this.productsRepository.save(prodToUpdate[0])
    }

    async getProductName(prodid){
        return await this.productsRepository.find({
            select: ['productName'],
            where: [{'productid':prodid}]
        })
    }
}
