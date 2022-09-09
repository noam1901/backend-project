import { Body, Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private service: ProductsService){}
    @Get()
   get(){
        return this.service.getProductsOnePhoto()
    }
    
    @Get('/top')
    getTop(){
        return this.service.getTopProducts()
    }
    @Get(':id')
    getById(@Param('id') id){
        return this.service.getProductById(id)
    }
}
