import connection from '../models/connection';
import OrderModel from '../models/order.model';
import 'express-async-errors';
import { Order } from '../interfaces/order.interface';
import { Response } from '../interfaces/response.interface';
import { validatesAnOrderRecord } from './validations/validateInputValues';
import { Jwt } from '../interfaces/jwt.interface';

export default class OrderService {
  private model;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public getAll = async (): Promise<Order[]> => this.model.getAll();

  public create = async (user: Jwt, productsIds: number[]): Promise<Response> => {
    const { type, message } = validatesAnOrderRecord(productsIds);
    if (type) return { type, message };

    await this.model.create(user.id, productsIds);

    return { type: null, message: '' };
  };
}
