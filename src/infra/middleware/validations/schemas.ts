import Joi from 'joi';

const password = Joi.string().min(8).required();
const name = Joi.string().min(3).required();
const amount = Joi.string().min(3).required();
const username = Joi.string().min(3).required();
const vocation = Joi.string().min(3).required();
const level = Joi.number().min(1).required();
const productsIds = Joi.array().items(Joi.number()).min(1).required();

export const loginSchema = Joi.object({
  username,
  password,
});

export const productSchema = Joi.object({
  name,
  amount,
});

export const userSchema = Joi.object({
  username,
  vocation,
  level,
  password,
});

export const orderSchema = Joi.object({
  productsIds,
}).required().messages({
  'array.min': '{#label} must include only numbers',
});