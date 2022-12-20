import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductService from '../services/product.service';

export default class ProductController {
  private service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  public create = async (req: Request, res: Response): Promise<Response> => {
    const newProduct = await this.service.create(req.body);

    return res.status(StatusCodes.CREATED).json(newProduct);
  };

  public getAll = async (_req: Request, res: Response): Promise<Response> => {
    const products = await this.service.getAll();

    return res.status(StatusCodes.OK).json(products);
  };
}