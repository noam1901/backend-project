import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orders } from './orders.entity';
import { CartModule } from '../cart/cart.module';
import { CartdetailsModule } from '../cartdetails/cartdetails.module';
import { OrdersdetailsModule } from '../ordersdetails/ordersdetails.module';
import { ProductsModule } from '../products/products.module';
@Module({
  imports: [TypeOrmModule.forFeature([Orders]),CartModule,CartdetailsModule, OrdersdetailsModule, ProductsModule],
  controllers: [OrdersController],
  providers: [OrdersService]
})
export class OrdersModule {}
