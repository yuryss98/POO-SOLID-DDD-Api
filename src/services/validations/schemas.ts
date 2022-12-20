import Joi from 'joi';

const username = Joi.string().required();
const password = Joi.string().required();

const loginSchema = Joi.object({
  username,
  password,
});

export default loginSchema;