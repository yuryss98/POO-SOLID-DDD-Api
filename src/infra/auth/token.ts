import { sign } from 'jsonwebtoken';

export interface IAuthService {
  createToken(username: string, id: number): string
}

export default class AuthService implements IAuthService {
  private SECRET_KEY = process.env.JWT_SECRET as string;

  createToken(username: string, id: number) {
    return sign({ data: { username, userId: id } }, this.SECRET_KEY, {
      expiresIn: '5h',
      algorithm: 'HS256',
    });
  } 
}