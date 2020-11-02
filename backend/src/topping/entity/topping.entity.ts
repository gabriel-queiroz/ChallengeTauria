import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ToppingEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  description: string;
}
