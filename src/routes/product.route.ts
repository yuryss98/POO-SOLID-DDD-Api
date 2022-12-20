import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const router = Router();

const product = new ProductController();

router.post('/', product.create);

export default router;