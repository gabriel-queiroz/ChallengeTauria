import { OrderDto } from './../../dto/order.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from 'src/order/entity/order.entity';
import { Repository } from 'typeorm';
import { ToppingService } from 'src/topping/service/topping/topping.service';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    private orderRepository: Repository<OrderEntity>,
    private toppingService: ToppingService,
  ) {}
  async create(order: OrderDto): Promise<OrderDto> {
    const toppings = await this.toppingService.findByIds(order.toppingsIds);
    order.toppings = toppings;
    return this.orderRepository.save(order);
  }

  listAll(): Promise<OrderDto[]> {
    return this.orderRepository.find();
  }

  findById(orderId: number): Promise<OrderDto> {
    return this.orderRepository.findOne(orderId);
  }

  async delete(toppingId: number): Promise<OrderDto> {
    const topping = await this.orderRepository.findOne(toppingId);
    return this.orderRepository.remove(topping);
  }

  async update(orderId: number, topping: OrderDto): Promise<OrderDto> {
    await this.orderRepository.update(orderId, topping);
    return this.orderRepository.findOne(orderId);
  }
}
