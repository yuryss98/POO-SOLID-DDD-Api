import ProductRepository from '../repository/ProductRepository';
import { IProductCreate } from './IProduct';

export default class ProductUseCase {
  constructor(private productRepository: ProductRepository) { }

  async getAll() {
    const products = await this.productRepository.findAll();

    return products;
  }

  async create(product: IProductCreate) {
    await this.productRepository.insert(product);
  }
}
