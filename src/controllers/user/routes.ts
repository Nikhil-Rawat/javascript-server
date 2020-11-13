import { Router } from 'express';
import UserController from './Controller';
import config from './validation';
import validationHandler from '../../libs/validationHandler';
import { authMiddleWare } from '../../libs/routes';
import { configuration } from '../../config';

const userRouter = Router();

userRouter.route('/login')
.post(validationHandler(config.login), UserController.login);

userRouter.route('/me')
.get(validationHandler(config.get), authMiddleWare('getUsers', 'read'), UserController.me);

// userRouter.route('/')
//     .get(authMiddleWare('getUsers', 'read'), validationHandler(config.get), UserController.get)
//     .post(authMiddleWare('getUsers', 'all'), validationHandler(config.create), UserController.post)
//     .put(authMiddleWare('getUsers', 'write'), validationHandler(config.put), UserController.put)
//     .delete(authMiddleWare('getUsers', 'deleTe'), validationHandler(config.delete), UserController.delete);

// userRouter.route('/:id')
//     .delete(validationHandler(config.delete), UserController.delete);


export default userRouter;
