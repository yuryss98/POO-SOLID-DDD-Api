import { Response, NextFunction, Request } from 'express';
import { verify } from 'jsonwebtoken';
import { StatusCode } from '../utils/statusCodeMapper';

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header('Authorization');

    if (!token) {
      return res.status(StatusCode.UNAUTHORIZED).json({ message: 'Token not found' });
    }
  
    const SECRET_KEY = process.env.JWT_SECRET as string;
  
    const decoded = verify(token, SECRET_KEY);

    req.body.user = decoded;
    return next();
  } catch (error) {
    return res.status(StatusCode.UNAUTHORIZED).json({ message: 'Invalid token' });
  }
};

export default validateToken;