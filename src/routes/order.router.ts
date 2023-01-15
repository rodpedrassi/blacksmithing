import express from 'express';
import orderController from '../controllers/order.controller';

const router = express.Router();

router.get('/', orderController.findAllOrders);

export default router;