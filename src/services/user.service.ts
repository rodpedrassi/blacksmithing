import userModel from '../models/user.model';
import { Users } from '../types/index';
import jwt from '../auth/jwtFunctions';

const createUser = async (user: Users): Promise<string> => {
  await userModel.createUser(user);
  const token = jwt.createToken(user);
  return token;
};

const findUserByUsername = async (user: Users) => {
  const result = await userModel.findUserByUsername(user);

  if (!result || user.password !== result.password) {
    return { type: 401, message: 'Username or password invalid' };
  }
  const userWithoutPass = {
    id: result.id,
    username: result.username,
    vocation: result.vocation,
    level: result.level,
  };

  return { type: null, message: jwt.createToken(userWithoutPass) };
};

export default { createUser, findUserByUsername };