import { ToppingDto } from 'src/topping/dto/topping.dto';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export enum PizzaSize {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
}

export enum CrustTpe {
  THIN = 'THIN',
  THICK = 'THICK',
}

@Entity()
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, type: 'enum', enum: PizzaSize })
  pizzaSize: string;

  @Column({ nullable: false, type: 'enum', enum: CrustTpe })
  crustType: string;

  @OneToMany(
    () => ToppingDto,
    topping => topping.id,
  )
  toppings: ToppingDto[];
}
