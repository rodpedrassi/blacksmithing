import { Router } from 'express';
import productController from '../controllers/product.controller';

const productRoute = Router();

productRoute.post('/', productController.createProduct);
productRoute.get('/', productController.findAllProducts);

export default productRoute;