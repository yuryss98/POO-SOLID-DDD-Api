import connection from '../models/connection';
import UserModel from '../models/user.model';
import { User } from '../interfaces/user.interface';
import 'express-async-errors';
import AuthService from '../auth/token';
import { ResponseForClient } from '../interfaces/response.interface';
import { validateLogin, validatesTheCreationOfAUser } from './validations/validateInputValues';

export default class UserService {
  private model;

  constructor() {
    this.model = new UserModel(connection);
  }

  public create = async (user: User): Promise<ResponseForClient> => {
    const { level, username, vocation, password } = user;
    const { type, message } = validatesTheCreationOfAUser(username, vocation, level, password);
    if (type) return { type, message };

    const newUser = await this.model.create(user);
    const auth = new AuthService();
    const token = auth.createToken(newUser);

    return { type: 'CREATED', message: { token } };
  };

  public login = async ({ username, password }: User): Promise<ResponseForClient> => {
    const { type, message } = validateLogin({ username, password });
    if (type) return { type, message };

    const user = await this.model.login(username);
    
    if (!user || user.password !== password) {
      return { type: 'UNAUTHORIZED', message: { message: 'Username or password invalid' } };
    }

    const auth = new AuthService();
    const token = auth.createToken(user);

    return { type: 'OK', message: { token } };
  };
}
