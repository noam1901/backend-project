import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from './entities/cart.entity';
import { CartdetailsModule } from '../cartdetails/cartdetails.module';
import { ProductsModule } from '../products/products.module';

@Module({
  imports: [TypeOrmModule.forFeature([Cart]),CartdetailsModule,ProductsModule],
  controllers: [CartController],
  providers: [CartService]
})
export class CartModule {}
