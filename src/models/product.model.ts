import { Pool, ResultSetHeader } from 'mysql2/promise';
import { Product } from '../interfaces/product.interface';

export default class ProductModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getAll = async (): Promise<Product[]> => {
    const [result] = await this.connection.execute(
      'SELECT * FROM Trybesmith.products',
    );

    return result as Product[];
  };

  public create = async (product: Product): Promise<Product> => {
    const { amount, name } = product;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...product };
  };
}