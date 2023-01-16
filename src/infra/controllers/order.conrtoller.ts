import { Request, Response } from 'express';
import OrderUseCase from '../../domain/use-cases/order.usecase';

export default class OrderController {
  constructor(private orderUseCase: OrderUseCase) { }

  getAll = async (_req: Request, res: Response) => {
    const orders = await this.orderUseCase.getAll();

    return res.status(200).json(orders);
  };

  create = async (req: Request, res: Response) => {
    await this.orderUseCase.create(req.body);

    return res.status(201).end();
  };
}