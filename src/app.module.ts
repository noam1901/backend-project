import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './products/products.entity';
import { UsersModule } from './users/users.module';
import { Users } from './users/users.entity';
import { OrdersModule } from './orders/orders.module';
import { Orders } from './orders/orders.entity';
import { ImgsModule } from './imgs/imgs.module';
import { Imgs } from './imgs/imgs.entity';


@Module({
  imports: [ProductsModule,TypeOrmModule.forRoot({"type": "mysql",
  "host": "localhost",
  "port": 3306,
  "username": "root",
  "password": "erez1234",
  "database": "project",
  "entities": [Products,Users,Orders,Imgs],
  "synchronize": true
}), UsersModule, OrdersModule, ImgsModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
