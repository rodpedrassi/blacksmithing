import { Product } from '../types';
import productModel from '../models/product.model';

const createProduct = async (name: string, amount: string): Promise<Product> => {
  const newProduct = await productModel.createProduct(name, amount);
  return newProduct;
};

const findAllProducts = async () => {
  const newProduct = await productModel.findAllProducts();
  return newProduct;
};

export default { createProduct, findAllProducts };