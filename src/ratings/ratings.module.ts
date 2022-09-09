import { Module } from '@nestjs/common';
import { RatingsService } from './ratings.service';
import { RatingsController } from './ratings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ratings } from './entities/rating.entity';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Ratings]),UsersModule],
  controllers: [RatingsController],
  providers: [RatingsService]
})
export class RatingsModule {}
