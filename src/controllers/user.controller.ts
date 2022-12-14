import { Request, Response } from 'express';
import userService from '../services/user.service';

const createUser = async (req: Request, res: Response) => {
  const token = await userService.createUser(req.body);
  res.status(201).json({ token });
};

export default { createUser };