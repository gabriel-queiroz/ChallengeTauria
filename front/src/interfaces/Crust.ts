import { CrustTypeEnum } from '../components';

export default interface Crust {
  name: string;
  id: number;
  type: CrustTypeEnum;
  price: number;
}
