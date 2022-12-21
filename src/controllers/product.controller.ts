import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductService from '../services/product.service';

export default class ProductController {
  private service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  public create = async (req: Request, res: Response): Promise<Response> => {
    const { type, message } = await this.service.create(req.body);

    if (type) {
      if (type === 'BAD_REQUEST') {
        return res.status(StatusCodes.BAD_REQUEST).json({ message });
      }

      return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ message });
    }

    return res.status(StatusCodes.CREATED).json(message);
  };

  public getAll = async (_req: Request, res: Response): Promise<Response> => {
    const products = await this.service.getAll();

    return res.status(StatusCodes.OK).json(products);
  };
}