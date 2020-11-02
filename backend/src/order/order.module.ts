import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToppingModule } from 'src/topping/topping.module';
import { ControllerController } from './controller/controller.controller';
import { OrderEntity } from './entity/order.entity';
import { OrderService } from './service/order/order.service';

@Module({
  imports: [
    forwardRef(() => ToppingModule),
    TypeOrmModule.forFeature([OrderEntity]),
  ],
  controllers: [ControllerController],
  providers: [OrderService],
})
export class OrderModule {}
