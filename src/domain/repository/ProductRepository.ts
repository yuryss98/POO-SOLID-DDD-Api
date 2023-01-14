import { IProductCreate, IProductDTO } from '../use-cases/IProduct';

export interface IProductPersistence {
  insert(product: IProductCreate): Promise<void>
  findAll(): Promise<IProductDTO[]>
}

export default class ProductRepository {
  constructor(private persistence: IProductPersistence) {}

  async insert(product: IProductCreate) {
    await this.persistence.insert(product);
  }

  async findAll() {
    const products = await this.persistence.findAll();
    return products;
  }
}