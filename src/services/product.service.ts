import connection from '../models/connection';
import ProductModel, { Product } from '../models/product.model';
import 'express-async-errors';

export default class ProductService {
  private model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public create = async (product: Product): Promise<Product> => this.model.create(product);
}
