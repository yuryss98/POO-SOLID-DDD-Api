import connection from '../models/connection';
import ProductModel from '../models/product.model';
import { Product } from '../interfaces/product.interface';
import { validatesTheCreationOfAProduct } from './validations/validateInputValues';
import 'express-async-errors';
import { Response } from '../interfaces/response.interface';

export default class ProductService {
  private model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public create = async (product: Product): Promise<Response> => {
    const { type, message } = validatesTheCreationOfAProduct(product.name, product.amount);
    if (type) return { type, message };

    const newProduct = await this.model.create(product);

    return { type: null, message: newProduct };
  };

  public getAll = async (): Promise<Product[]> => this.model.getAll();
}
