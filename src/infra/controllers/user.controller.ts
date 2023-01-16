import { Request, Response } from 'express';
import UserUseCase from '../../domain/use-cases/user.usecase';

export default class UserController {
  constructor(private userUseCase: UserUseCase) { }

  create = async (req: Request, res: Response) => {
    const token = await this.userUseCase.create(req.body);
    
    return res.status(201).json({ token });
  };

  login = async (req: Request, res: Response) => {
    const token = await this.userUseCase.login(req.body);

    return res.status(200).json({ token });
  };
}