import { ValidationError } from 'joi';
import { Response } from '../../interfaces/response.interface';
import { loginSchema, orderSchema, productSchema, userSchema } from './schemas';
import { User } from '../../interfaces/user.interface';

export const validateLogin = ({ username, password }: Partial<User>): Response => {
  const { error } = loginSchema.validate({ username, password });
  
  if (error) return { type: 'BAD_REQUEST', message: error.message };

  return { type: null, message: '' };
};

const checkError = (error: ValidationError | undefined) => {
  if (error) {
    if (error.message.includes('is required')) {
      return { type: 'BAD_REQUEST', message: error.message };
    }

    return { type: 'UNPROCESSABLE_ENTITY', message: error.message };
  }

  return { type: null, message: '' };
};

export const validatesTheCreationOfAProduct = (name: string, amount: string) => {
  const { error } = productSchema.validate({ name, amount });
  
  return checkError(error);
};

export const validatesTheCreationOfAUser = (
  username: string,
  vocation: string,
  level: number,
  password: string,
) => {
  const { error } = userSchema.validate({ username, vocation, level, password });
  
  return checkError(error);
};

export const validatesAnOrderRecord = (productsIds: number[]) => {
  const { error } = orderSchema.validate({ productsIds });

  return checkError(error);
};