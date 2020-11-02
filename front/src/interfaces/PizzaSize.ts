import { PizzaSizeEnum } from '../components';

export default interface PizzaSize {
  id: number;
  name: string;
  price: number;
  size: PizzaSizeEnum;
}
