export interface IProductCreate {
  name: string;
  amount: string;
}

export interface IProductDTO extends IProductCreate {
  id: number;
  orderId: number
}