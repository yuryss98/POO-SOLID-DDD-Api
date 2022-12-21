import Joi from 'joi';

const username = Joi.string().required();
const password = Joi.string().required();
const name = Joi.string().min(3).required();
const amount = Joi.string().min(3).required();

export const loginSchema = Joi.object({
  username,
  password,
});

export const productSchema = Joi.object({
  name,
  amount,
});