import { Pool, ResultSetHeader } from 'mysql2/promise';
import { Order } from '../interfaces/order.interface';

export default class OrderModel {
  private connection;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getAll = async (): Promise<Order[]> => {
    const [result] = await this.connection.execute(
      `SELECT
        orders.id AS id, users.id AS userId, JSON_ARRAYAGG(products.id) AS productsIds
      FROM
        Trybesmith.orders AS orders
      INNER JOIN
        Trybesmith.products AS products
      ON
        orders.id = products.order_id
      INNER JOIN
        Trybesmith.users AS users
      ON
        orders.user_id = users.id
      GROUP BY
        products.order_id;`,
    );

    return result as Order[];
  };

  public create = async (userId: number, productsIds: number[]): Promise<void> => {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.orders (user_id) VALUES (?)',
      [userId],
    );

    const registeringOrders = productsIds.map((id) => this.connection.execute<ResultSetHeader>(
      'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?',
      [insertId, id],
    ));

    await Promise.all(registeringOrders);
  };
}