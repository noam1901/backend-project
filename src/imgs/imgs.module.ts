import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImgsController } from './imgs.controller';
import { Imgs } from './imgs.entity';
import { ImgsService } from './imgs.service';

@Module({
  imports: [TypeOrmModule.forFeature([Imgs])],
  controllers: [ImgsController],
  providers: [ImgsService]
})
export class ImgsModule {}
