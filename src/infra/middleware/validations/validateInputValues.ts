import { ValidationError } from 'joi';
import { Response, NextFunction, Request } from 'express';
import HttpException from './HttpException';
import { loginSchema, orderSchema, productSchema, userSchema } from './schemas';

const checkError = (error: ValidationError | undefined, next: NextFunction) => {
  if (error) {
    if (error.message.includes('is required')) {
      throw new HttpException(400, error.message);
    }

    throw new HttpException(422, error.message);
  }

  next();
};

export const validateLogin = (req: Request, _res: Response, next: NextFunction) => {
  const { error } = loginSchema.validate(req.body);
  
  return checkError(error, next);
};

export const validatesTheCreationOfAProduct = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const { error } = productSchema.validate(req.body);
  
  return checkError(error, next);
};

export const validatesTheCreationOfAUser = (req: Request, _res: Response, next: NextFunction) => {
  const { error } = userSchema.validate(req.body);
  
  checkError(error, next);
};

export const validatesAnOrderRecord = (req: Request, _res: Response, next: NextFunction) => {
  const { error } = orderSchema.validate(req.body);

  return checkError(error, next);
};