import { Controller, Get } from '@nestjs/common';
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
}
