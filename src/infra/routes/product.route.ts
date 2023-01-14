import { Router } from 'express';
import ProductRepository from '../../domain/repository/ProductRepository';
import ProductUseCase from '../../domain/use-cases/product.usecase';
import ProductController from '../controllers/product.controller';
import { validatesTheCreationOfAProduct } from '../middleware/validations/validateInputValues';
import connection from '../models/connection';
import ProductModel from '../models/product.model';

const router = Router();

const productModel = new ProductModel(connection);
const productRepository = new ProductRepository(productModel);
const productUseCase = new ProductUseCase(productRepository);
const productController = new ProductController(productUseCase);

router.get('/', productController.getAll);
router.post('/', validatesTheCreationOfAProduct, productController.create);

export default router;