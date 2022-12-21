import { Product } from './product.interface';

export interface Response {
  type: string | null;
  message: string | Product;
}