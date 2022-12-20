import connection from '../models/connection';
import UserModel from '../models/user.model';
import { User } from '../interfaces/user.interface';
import 'express-async-errors';
import AuthService from '../auth/token';

export default class UserService {
  private model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public create = async (user: User): Promise<string> => {
    const newUser = await this.model.create(user);
    const auth = new AuthService(newUser);
    const token = auth.createToken();

    return token;
  };
}
