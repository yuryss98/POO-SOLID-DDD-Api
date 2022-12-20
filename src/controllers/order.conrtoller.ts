import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import OrderService from '../services/order.service';

export default class OrderController {
  private service: OrderService;

  constructor() {
    this.service = new OrderService();
  }

  public getAll = async (_req: Request, res: Response): Promise<Response> => {
    const order = await this.service.getAll();

    return res.status(StatusCodes.OK).json(order);
  };
}