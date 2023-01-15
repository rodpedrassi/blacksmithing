import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

const loginValidation = Joi.object().keys({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const user = req.body;
  const { error } = loginValidation.validate(user);
  if (error) {
    return res.status(400)
      .json({ message: error.details[0].message });
  }
  return next();
};

export default validateLogin;