import { Product } from '../types';
import productModel from '../models/product.model';

const createProduct = async (name: string, amount: string): Promise<Product> => {
  const newProduct = await productModel.createProduct(name, amount);
  return newProduct;
};

export default { createProduct };