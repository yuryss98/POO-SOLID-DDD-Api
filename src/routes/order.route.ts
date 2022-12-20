import { Router } from 'express';
import OrderController from '../controllers/order.conrtoller';

const router = Router();

const order = new OrderController();

router.get('/', order.getAll);

export default router;