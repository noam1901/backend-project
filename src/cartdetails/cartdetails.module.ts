import { Module } from '@nestjs/common';
import { CartdetailsService } from './cartdetails.service';
import { CartdetailsController } from './cartdetails.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cartdetails } from './entities/cartdetail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cartdetails])],
  controllers: [CartdetailsController],
  providers: [CartdetailsService],
  exports: [CartdetailsService]
})
export class CartdetailsModule {}
