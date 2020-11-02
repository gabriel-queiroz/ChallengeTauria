import {
  Controller,
  Post,
  Get,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { OrderDto } from '../dto/order.dto';
import { OrderService } from '../service/order/order.service';

@Controller('orders')
export class ControllerController {
  constructor(private orderService: OrderService) {}

  @Post()
  create(@Body() topping: OrderDto): Promise<OrderDto> {
    return this.orderService.create(topping);
  }
  @Get()
  listAll(): Promise<OrderDto[]> {
    return this.orderService.listAll();
  }
  @Get('/:id')
  getById(@Param('id') id: number): Promise<OrderDto> {
    return this.orderService.findById(id);
  }

  @Delete('/:id')
  deleteById(@Param('id') id: number): Promise<OrderDto> {
    return this.orderService.delete(id);
  }
  @Put('/:id')
  update(
    @Param('id') id: number,
    @Body() topping: OrderDto,
  ): Promise<OrderDto> {
    return this.orderService.update(id, topping);
  }
}
