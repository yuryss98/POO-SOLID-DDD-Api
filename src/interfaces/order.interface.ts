import { Jwt } from './jwt.interface';

export interface Order extends Jwt {
  productsIds: number[]
}