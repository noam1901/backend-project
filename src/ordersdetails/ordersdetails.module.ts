import { Module } from '@nestjs/common';
import { OrdersdetailsService } from './ordersdetails.service';
import { OrdersdetailsController } from './ordersdetails.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ordersdetails } from './entities/ordersdetail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ordersdetails])],
  controllers: [OrdersdetailsController],
  providers: [OrdersdetailsService],
  exports: [OrdersdetailsService]
})
export class OrdersdetailsModule {}
