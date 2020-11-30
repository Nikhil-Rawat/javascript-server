import { Router } from 'express';
import UserController from './Controller';
import config from './validation';
import validationHandler from '../../libs/validationHandler';
import { authMiddleWare } from '../../libs/routes';

const userRouter = Router();


userRouter.route('/login')
.post(validationHandler(config.login), UserController.login);

userRouter.route('/me')
.get(validationHandler(config.get), authMiddleWare('getUsers', 'read'), UserController.me);

export default userRouter;
