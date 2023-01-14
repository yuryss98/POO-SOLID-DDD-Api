import OrderRepository from '../repository/OrderRepository';
import { IOrderCreate } from './IOrder';

export default class OrderUseCase {
  constructor(private orderRepository: OrderRepository) { }

  async getAll() {
    const orders = await this.orderRepository.findAll();

    return orders;
  }

  async create(order: IOrderCreate) {
    await this.orderRepository.insert(order);
  }
}
