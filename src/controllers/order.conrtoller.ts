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

  public create = async (req: Request, res: Response): Promise<Response> => {
    const { user, productsIds } = req.body;
    const { type, message } = await this.service.create(user, productsIds);

    if (type === 'BAD_REQUEST') return res.status(StatusCodes.BAD_REQUEST).json({ message });

    if (type === 'UNPROCESSABLE_ENTITY') { 
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ message }); 
    }

    return res.status(StatusCodes.CREATED).json({
      userId: user.id,
      productsIds,
    });
  };
}