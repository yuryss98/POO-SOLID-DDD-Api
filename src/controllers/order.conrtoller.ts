import { Request, Response } from 'express';
import OrderService from '../services/order.service';
import { StatusCodeMapper } from '../utils/statusCodeMapper';

export default class OrderController {
  private service;

  constructor() {
    this.service = new OrderService();
  }

  public getAll = async (_req: Request, res: Response): Promise<Response> => {
    const { type, message } = await this.service.getAll();

    return res.status(StatusCodeMapper(type)).json(message);
  };

  public create = async (req: Request, res: Response): Promise<Response> => {
    const { type, message } = await this.service.create(req.body);

    return res.status(StatusCodeMapper(type)).json(message);
  };
}