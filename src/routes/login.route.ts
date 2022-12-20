import { Router } from 'express';
import UserController from '../controllers/user.controller';

const router = Router();

const user = new UserController();

router.post('/', user.login);

export default router;