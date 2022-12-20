import { Response } from '../../interfaces/response.interface';
import loginSchema from './schemas';

const login = (username: string, password: string): Response => {
  const { error } = loginSchema.validate({ username, password });
  
  if (error) return { type: 'BAD_REQUEST', message: error.message };

  return { type: null, message: '' };
};

export default login;