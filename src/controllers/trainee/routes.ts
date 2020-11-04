import { Router } from 'express';

import TraineeController from './Controller';
import config from './validation';
import validationHandler from '../../libs/validationHandler';
import { authMiddleWare } from '../../libs/routes';

const traineeRouter = Router();
traineeRouter.route('/')

.get(authMiddleWare('getUsers', 'read'), validationHandler(config.get), TraineeController.get)
.post(authMiddleWare('getUsers', 'all'), validationHandler(config.post), TraineeController.post)
.put(authMiddleWare('getUsers', 'write'), validationHandler(config.put), TraineeController.put)
.delete(authMiddleWare('getUsers', 'deleTe'), validationHandler(config.delete), TraineeController.delete);

traineeRouter.route('/:id')
    .delete(validationHandler(config.delete), TraineeController.delete);

export default traineeRouter;
