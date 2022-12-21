import { Router } from 'express';
import OrderController from '../controllers/order.conrtoller';
import validateToken from '../middleware/validateToken';

const router = Router();

const order = new OrderController();

router.get('/', order.getAll);
router.post('/', validateToken, order.create);

export default router;