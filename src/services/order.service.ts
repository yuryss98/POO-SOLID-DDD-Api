import connection from '../models/connection';
import OrderModel from '../models/order.model';
import 'express-async-errors';
import { ResponseForClient } from '../interfaces/response.interface';
import { validatesAnOrderRecord } from './validations/validateInputValues';
import { Order } from '../interfaces/order.interface';

export default class OrderService {
  private model;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public getAll = async (): Promise<ResponseForClient> => {
    const orders = await this.model.getAll();

    return { type: 'OK', message: orders };
  };

  public create = async ({ user, productsIds }: Order): Promise<ResponseForClient> => {
    const { data: { userId } } = user;
    const { type, message } = validatesAnOrderRecord(productsIds);
    if (type.length) return { type, message };

    await this.model.create(userId, productsIds);

    return { type: 'CREATED', message: { userId, productsIds } };
  };
}
