import jwt from 'jsonwebtoken';
import { Users } from '../types/index';

const secret = process.env.JWT_SECRET || 'segredim';

const createToken = (userWithoutPassword: Users) => {
  const token = jwt.sign(
    { data: userWithoutPassword },
    secret,
    { algorithm: 'HS256', expiresIn: '7d' },
  );
  return token;
};

const verifyToken = (token: string) => {
  try {
    const payload = jwt.verify(token, secret);
    return payload;
  } catch (error) {
    return { isError: true, error };
  }
};

export default { createToken, verifyToken };