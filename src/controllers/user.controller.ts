import { Request, Response } from 'express';
import userService from '../services/user.service';

const createUser = async (req: Request, res: Response) => {
  const token = await userService.createUser(req.body);
  res.status(201).json({ token });
};

const getUserByName = async (req: Request, res: Response) => {
  const user = req.body;
  const { type, message } = await userService.findUserByUsername(user);
  if (type) return res.status(type).json({ message });

  res.status(200).json({ token: message });
};

export default { createUser, getUserByName };