import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ControllerController } from './controller/controller.controller';
import { ToppingEntity } from './entity/topping.entity';
import { ToppingService } from './service/topping/topping.service';

@Module({
  imports: [TypeOrmModule.forFeature([ToppingEntity])],
  controllers: [ControllerController],
  exports: [ToppingService],
  providers: [ToppingService],
})
export class ToppingModule {}
