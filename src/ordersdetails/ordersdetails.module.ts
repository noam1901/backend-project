import { Module } from '@nestjs/common';
import { OrdersdetailsService } from './ordersdetails.service';
import { OrdersdetailsController } from './ordersdetails.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ordersdetails } from './entities/ordersdetail.entity';
import { ProductsModule } from '../products/products.module';

@Module({
  imports: [TypeOrmModule.forFeature([Ordersdetails]),ProductsModule],
  controllers: [OrdersdetailsController],
  providers: [OrdersdetailsService],
  exports: [OrdersdetailsService]
})
export class OrdersdetailsModule {}
