import { ToppingDto } from './../dto/topping.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ToppingService } from '../service/topping/topping.service';

@Controller('toppings')
export class ControllerController {
  constructor(private toppingService: ToppingService) {}

  @Post()
  create(@Body() topping: ToppingDto): Promise<ToppingDto> {
    return this.toppingService.create(topping);
  }
  @Get()
  listAll(): Promise<ToppingDto[]> {
    return this.toppingService.listAll();
  }
  @Get('/:id')
  getById(@Param('id') id: number): Promise<ToppingDto> {
    return this.toppingService.findById(id);
  }

  @Delete('/:id')
  deleteById(@Param('id') id: number): Promise<ToppingDto> {
    return this.toppingService.delete(id);
  }
  @Put('/:id')
  update(
    @Param('id') id: number,
    @Body() topping: ToppingDto,
  ): Promise<ToppingDto> {
    return this.toppingService.update(id, topping);
  }
}
