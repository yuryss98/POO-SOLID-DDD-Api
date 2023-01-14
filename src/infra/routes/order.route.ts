import { Router } from 'express';
import OrderRepository from '../../domain/repository/OrderRepository';
import OrderUseCase from '../../domain/use-cases/order.usecase';
import OrderController from '../controllers/order.conrtoller';
import validateToken from '../middleware/validateToken';
import connection from '../models/connection';
import OrderModel from '../models/order.model';

const router = Router();

const orderModel = new OrderModel(connection);
const orderRepository = new OrderRepository(orderModel);
const orderUseCase = new OrderUseCase(orderRepository);
const orderController = new OrderController(orderUseCase);

router.get('/', orderController.getAll);
router.post('/', validateToken, orderController.create);

export default router;