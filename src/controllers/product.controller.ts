import { Request, Response } from 'express';
// import { Product } from '../types';
import productService from '../services/product.service';

const createProduct = async (req: Request, res: Response) => {
  const { name, amount } = req.body; 
  const newProduct = await productService.createProduct(name, amount);
  return res.status(201).json(newProduct);
};

const findAllProducts = async (_req: Request, res: Response) => {
  const allProducts = await productService.findAllProducts();
  return res.status(200).json(allProducts);
};

export default { createProduct, findAllProducts };