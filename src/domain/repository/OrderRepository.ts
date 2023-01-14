import { IOrderCreate, IOrderDTO } from '../use-cases/IOrder';

export interface IOrderPersistence {
  insert(order: IOrderCreate): Promise<void>
  findAll(): Promise<IOrderDTO[]>
}

export default class OrderRepository {
  constructor(private persistence: IOrderPersistence) {}

  async insert(order: IOrderCreate) {
    await this.persistence.insert(order);
  }

  async findAll() {
    const orders = await this.persistence.findAll();
    return orders;
  }
}