import { Router } from 'express';
import UserRepository from '../../domain/repository/UserRepository';
import UserUseCase from '../../domain/use-cases/user.usecase';
import AuthService from '../auth/token';
import UserController from '../controllers/user.controller';
import connection from '../models/connection';
import UserModel from '../models/user.model';

const router = Router();

const userModel = new UserModel(connection);
const userRepository = new UserRepository(userModel);
const authService = new AuthService();
const userUseCase = new UserUseCase(userRepository, authService);
const userController = new UserController(userUseCase);

router.post('/', userController.login);

export default router;