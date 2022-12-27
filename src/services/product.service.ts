import connection from '../models/connection';
import ProductModel from '../models/product.model';
import { Product } from '../interfaces/product.interface';
import { validatesTheCreationOfAProduct } from './validations/validateInputValues';
import 'express-async-errors';
import { ResponseForClient } from '../interfaces/response.interface';

export default class ProductService {
  private model;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public create = async ({ name, amount }: Product): Promise<ResponseForClient> => {
    const { type, message } = validatesTheCreationOfAProduct(name, amount);
    if (type) return { type, message };

    const newProduct = await this.model.create(name, amount);

    return { type: 'CREATED', message: newProduct };
  };

  public getAll = async (): Promise<ResponseForClient> => {
    const products = await this.model.getAll();

    return { type: 'OK', message: products };
  };
}
