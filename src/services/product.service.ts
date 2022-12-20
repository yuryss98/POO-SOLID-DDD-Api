import connection from '../models/connection';
import ProductModel from '../models/product.model';
import { Product } from '../interfaces/product.interface';
import 'express-async-errors';

export default class ProductService {
  private model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public create = async (product: Product): Promise<Product> => this.model.create(product);

  public getAll = async (): Promise<Product[]> => this.model.getAll();
}
