import { Router } from 'express';
import userController from '../controllers/user.controller';

const userRoute = Router();

userRoute.post('/', userController.createUser);

export default userRoute;