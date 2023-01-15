import { Request, Response } from 'express';
import orderService from '../services/order.service';

async function findAllOrders(_req: Request, res: Response) {
  const allOrders = await orderService.findAllOrders();
  res.status(200).json(allOrders);
}

export default {
  findAllOrders,
};