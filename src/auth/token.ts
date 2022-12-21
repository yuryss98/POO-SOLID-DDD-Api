import { sign } from 'jsonwebtoken';
import { User } from '../interfaces/user.interface';

export default class AuthService {
  private SECRET_KEY = process.env.JWT_SECRET as string;

  createToken = (user: User): string => {
    const { username, id } = user;

    return sign({ data: username, id }, this.SECRET_KEY, {
      expiresIn: '5h',
      algorithm: 'HS256',
    });
  };
}