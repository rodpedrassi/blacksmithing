import orderModel from '../models/order.model';

async function findAllOrders() {
  const result = await orderModel.findAllOrders();
  return result; 
}

export default {
  findAllOrders,
};