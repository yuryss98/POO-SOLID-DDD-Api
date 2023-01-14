import { Request, Response } from 'express';
import UserRepository from '../../domain/repository/UserRepository';
import UserUseCase from '../../domain/use-cases/user.usecase';
import AuthService from '../auth/token';
import connection from '../models/connection';
import UserModel from '../models/user.model';

export default class UserController {
  constructor(private userUseCase: UserUseCase) { }

  async create(req: Request, res: Response) {
    const test = new UserUseCase(new UserRepository(new UserModel(connection)), new AuthService());
    const token = await test.create(req.body);
    
    return res.status(201).json({ token });
  }

  async login(req: Request, res: Response) {
    const test = new UserUseCase(new UserRepository(new UserModel(connection)), new AuthService());
    const token = await test.login(req.body);

    return res.status(200).json({ token });
  }
}