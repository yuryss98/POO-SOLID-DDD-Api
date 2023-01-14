import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { IUserCreate, IUserDTO } from '../../domain/use-cases/IUser';

export default class UserModel {
  private connection;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async insert(user: IUserCreate) {
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
      [user.username, user.vocation, user.level, user.password],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return insertId;
  }

  async findByName(username: string) {
    const [[result]] = await this.connection.execute<RowDataPacket[]>(
      'SELECT * FROM Trybesmith.users WHERE username=?',
      [username],
    );

    return result as IUserDTO;
  }
}