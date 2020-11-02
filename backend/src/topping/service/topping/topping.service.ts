import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ToppingDto } from 'src/topping/dto/topping.dto';
import { ToppingEntity } from 'src/topping/entity/topping.entity';
import { In, Repository } from 'typeorm';

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

  findByIds(ids: number[]): Promise<ToppingDto[]> {
    return this.toppingRepository.find({ where: { id: In(ids) } });
  }

  async delete(toppingId: number): Promise<ToppingDto> {
    const topping = await this.toppingRepository.findOne(toppingId);
    return this.toppingRepository.remove(topping);
  }

  async update(toppingId: number, topping: ToppingDto): Promise<ToppingDto> {
    await this.toppingRepository.update(toppingId, topping);
    return this.toppingRepository.findOne(toppingId);
  }
}
