import express from 'express';
import userController from '../controllers/user.controller';
import validateLogin from '../validations/login.validation';

const router = express.Router();

router.post('/', validateLogin, userController.getUserByName);

export default router;