import { Order, OrderResponse } from './order.interface';
import { Product } from './product.interface';

export interface ResponseForClient {
  type: string;
  message:
  string
  | Product
  | Product[]
  | Order[]
  | Order
  | OrderResponse
  | { message: string }
  | { token: string };
}