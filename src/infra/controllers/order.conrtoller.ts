import { Request, Response } from 'express';
import OrderRepository from '../../domain/repository/OrderRepository';
import OrderUseCase from '../../domain/use-cases/order.usecase';
import connection from '../models/connection';
import OrderModel from '../models/order.model';

export default class OrderController {
  public test = 'testando';

  constructor(private orderUseCase: OrderUseCase) { }

  async getAll(_req: Request, res: Response) {
    const test = new OrderUseCase(new OrderRepository(new OrderModel(connection)));
    const orders = await test.getAll();

    return res.status(200).json(orders);
  }

  async create(req: Request, res: Response) {
    const test = new OrderUseCase(new OrderRepository(new OrderModel(connection)));
    await test.create(req.body);

    return res.status(201).end();
  }
}