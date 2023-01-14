import { ITokenValidate } from '../../infra/middleware/validateToken';

export interface IOrderCreate extends ITokenValidate {
  productsIds: number[];
}

export interface IOrderDTO extends IOrderCreate {
  id: number;
}