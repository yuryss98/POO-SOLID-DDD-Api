import { Request, Response } from 'express';
import ProductRepository from '../../domain/repository/ProductRepository';
import ProductUseCase from '../../domain/use-cases/product.usecase';
import connection from '../models/connection';
import ProductModel from '../models/product.model';

export default class ProductController {
  constructor(private productUseCase: ProductUseCase) { }

  async create(req: Request, res: Response) {
    const test = new ProductUseCase(new ProductRepository(new ProductModel(connection)));
    await test.create(req.body);

    return res.status(201).end();
  }

  async getAll(_req: Request, res: Response): Promise<Response> {
    const test = new ProductUseCase(new ProductRepository(new ProductModel(connection)));
    const products = await test.getAll();

    return res.status(200).json(products);
  }
}