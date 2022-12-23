import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../services/user.service';

export default class UserController {
  private service;

  constructor() {
    this.service = new UserService();
  }

  public create = async (req: Request, res: Response): Promise<Response> => {
    const { type, message } = await this.service.create(req.body);
    
    if (type === 'BAD_REQUEST') return res.status(StatusCodes.BAD_REQUEST).json({ message });

    if (type === 'UNPROCESSABLE_ENTITY') { 
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ message }); 
    }

    return res.status(StatusCodes.CREATED).json({ token: message });
  };

  public login = async (req: Request, res: Response): Promise<Response> => {
    const { username, password } = req.body;
    const { type, message } = await this.service.login(username, password);

    if (type === 'BAD_REQUEST') return res.status(StatusCodes.BAD_REQUEST).json({ message });

    if (type === 'UNAUTHORIZED') return res.status(StatusCodes.UNAUTHORIZED).json({ message });

    return res.status(StatusCodes.OK).json({ token: message });
  };
}