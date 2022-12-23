import { Request, Response } from 'express';
import UserService from '../services/user.service';
import { StatusCodeMapper } from '../utils/statusCodeMapper';

export default class UserController {
  private service;

  constructor() {
    this.service = new UserService();
  }

  public create = async (req: Request, res: Response): Promise<Response> => {
    const { type, message } = await this.service.create(req.body);
    
    return res.status(StatusCodeMapper(type)).json(message);
  };

  public login = async (req: Request, res: Response): Promise<Response> => {
    const { type, message } = await this.service.login(req.body);

    return res.status(StatusCodeMapper(type)).json(message);
  };
}