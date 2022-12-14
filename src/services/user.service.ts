import userModel from '../models/user.model';
import { Users } from '../types/index';
import jwt from '../auth/jwtFunctions';

const createUser = async (user: Users): Promise<string> => {
  await userModel.createUser(user);
  const token = jwt.createToken(user);
  return token;
};

export default { createUser };