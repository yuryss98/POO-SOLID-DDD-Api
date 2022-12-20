import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../services/user.service';

export default class UserController {
  private service: UserService;

  constructor() {
    this.service = new UserService();
  }

  public create = async (req: Request, res: Response): Promise<Response> => {
    const token = await this.service.create(req.body);

    return res.status(StatusCodes.CREATED).json({ token });
  };
}