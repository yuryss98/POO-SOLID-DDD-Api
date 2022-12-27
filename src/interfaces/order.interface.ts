import { Jwt } from './jwt.interface';

export interface Order extends Jwt {
  userId: number
  productsIds: number[]
}