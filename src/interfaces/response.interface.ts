import { Order } from './order.interface';
import { Product } from './product.interface';

export interface ResponseForClient {
  type: string;
  message:
  string
  | { userId: number }
  | Product
  | Product[]
  | Order
  | Order[]
  | { message: string }
  | { token: string };
}