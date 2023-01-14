import { Pool, ResultSetHeader } from 'mysql2/promise';

import { IProductCreate, IProductDTO } from '../../domain/use-cases/IProduct';

export default class ProductModel {
  private connection;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async findAll() {
    const [result] = await this.connection.execute(
      'SELECT * FROM Trybesmith.products',
    );

    return result as IProductDTO[];
  }

  async insert(product: IProductCreate) {
    await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [product.name, product.amount],
    );
  }
}