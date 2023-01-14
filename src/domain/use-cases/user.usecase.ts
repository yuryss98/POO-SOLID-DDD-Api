import { IAuthService } from '../../infra/auth/token';
import HttpException from '../../infra/middleware/validations/HttpException';
import UserRepository from '../repository/UserRepository';
import { IUserCreate, IUserCredentials } from './IUser';

export default class UserUseCase {
  constructor(private userRepository: UserRepository, private authService: IAuthService) { }

  async create(user: IUserCreate) {
    const userId = await this.userRepository.insert(user);
    const token = this.authService.createToken(user.username, userId);

    return token;
  }

  async login(user: IUserCredentials) {
    const userFound = await this.userRepository.findByName(user.username);
    if (!userFound || userFound.password !== user.password) {
      throw new HttpException(401, 'Usuario ou senha invalidos');
    }

    const token = this.authService.createToken(userFound.username, userFound.id);

    return token;
  }
}
