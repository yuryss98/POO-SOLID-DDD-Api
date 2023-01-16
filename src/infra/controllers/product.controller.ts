import { Request, Response } from 'express';
import ProductUseCase from '../../domain/use-cases/product.usecase';

export default class ProductController {
  constructor(private productUseCase: ProductUseCase) { }

  create = async (req: Request, res: Response) => {
    await this.productUseCase.create(req.body);

    return res.status(201).end();
  };

  getAll = async (_req: Request, res: Response) => {
    const products = await this.productUseCase.getAll();

    return res.status(200).json(products);
  };
}