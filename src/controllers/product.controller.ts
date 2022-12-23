import { Request, Response } from 'express';
import ProductService from '../services/product.service';
import { StatusCodeMapper } from '../utils/statusCodeMapper';

export default class ProductController {
  private service;

  constructor() {
    this.service = new ProductService();
  }

  public create = async (req: Request, res: Response): Promise<Response> => {
    const { type, message } = await this.service.create(req.body);

    return res.status(StatusCodeMapper(type)).json(message);
  };

  public getAll = async (_req: Request, res: Response): Promise<Response> => {
    const { type, message } = await this.service.getAll();

    return res.status(StatusCodeMapper(type)).json(message);
  };
}