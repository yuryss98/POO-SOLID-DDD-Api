import connection from '../models/connection';
import OrderModel from '../models/order.model';
import 'express-async-errors';
import { Order } from '../interfaces/order.interface';

export default class OrderService {
  private model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public getAll = async (): Promise<Order[]> => this.model.getAll();
}
