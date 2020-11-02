import { IsString, Min, Max, IsNotEmpty } from 'class-validator';

export class ToppingDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}
