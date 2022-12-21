import { Response } from '../../interfaces/response.interface';
import { loginSchema, productSchema } from './schemas';

export const validateLogin = (username: string, password: string): Response => {
  const { error } = loginSchema.validate({ username, password });
  
  if (error) return { type: 'BAD_REQUEST', message: error.message };

  return { type: null, message: '' };
};

export const validatesTheCreationOfAProduct = (name: string, amount: string) => {
  const { error } = productSchema.validate({ name, amount });
  
  if (error) {
    if (error.message.includes('is required')) {
      return { type: 'BAD_REQUEST', message: error.message };
    }

    return { type: 'UNPROCESSABLE_ENTITY', message: error.message };
  }

  return { type: null, message: '' };
};