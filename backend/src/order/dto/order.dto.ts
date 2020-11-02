import { IsIn, IsNotEmpty } from 'class-validator';
import { ToppingDto } from 'src/topping/dto/topping.dto';

export class OrderDto {
  @IsIn(['SMALL', 'MEDIUM', 'LAGER'])
  @IsNotEmpty()
  pizzaSize: string;

  @IsNotEmpty()
  @IsIn(['THIN', 'THICK'])
  crustType: string;

  toppings?: ToppingDto[];

  @IsNotEmpty()
  toppingsIds?: number[];
}
