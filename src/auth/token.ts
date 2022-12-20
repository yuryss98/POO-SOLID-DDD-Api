import { sign, verify } from 'jsonwebtoken';
import { User } from '../interfaces/user.interface';

export default class AuthService {
  private user: User;

  private SECRET_KEY = process.env.JWT_SECRET as string ;

  constructor(user: User) {
    this.user = user;
  }

  createToken = (): string => sign({ data: this.user }, this.SECRET_KEY, {
    expiresIn: '5h',
    algorithm: 'HS256',
  });

  verifyToken = (token: string) => {
    try {
      return verify(token, this.SECRET_KEY);
    } catch (error) {
      return error;
    }
  };
}