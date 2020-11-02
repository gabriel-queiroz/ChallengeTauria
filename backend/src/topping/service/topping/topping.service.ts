import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ToppingDto } from 'src/topping/dto/topping.dto';
import { ToppingEntity } from 'src/topping/entity/topping.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class ToppingService {
  constructor(
    @InjectRepository(ToppingEntity)
    private toppingRepository: Repository<ToppingEntity>,
  ) {}

  create(topping: ToppingDto): Promise<ToppingDto> {
    return this.toppingRepository.save(topping);
  }

  listAll(): Promise<ToppingDto[]> {
    return this.toppingRepository.find();
  }

  findById(topppingId: number): Promise<ToppingDto> {
    return this.toppingRepository.findOne(topppingId);
  }

  async delete(toppingId: number): Promise<ToppingDto> {
    const topping = await this.toppingRepository.findOne(toppingId);
    return this.toppingRepository.remove(topping);
  }

  update(toppingId: number, topping: ToppingDto): Promise<any> {
    return this.toppingRepository.update(toppingId, topping);
  }
}
