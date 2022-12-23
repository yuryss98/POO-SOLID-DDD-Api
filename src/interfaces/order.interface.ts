import { Jwt } from './jwt.interface';

export interface Order extends Jwt {
  productsIds: number[]
}

export interface OrderResponse {
  userId: number,
  productsIds: number[]
}