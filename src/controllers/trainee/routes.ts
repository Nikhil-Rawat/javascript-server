import { Router } from 'express';

import TraineeController from './Controller';
import config from './validation';
import validationHandler from '../../libs/validationHandler';
import { authMiddleWare } from '../../libs/routes';

const traineeRouter = Router();
traineeRouter.route('/');

// .get(authMiddleWare('getUsers', 'read'), validationHandler(config.get), TraineeController.get)
// .post(authMiddleWare('getUsers', 'all'), validationHandler(config.post), TraineeController.post)
// .put(authMiddleWare('getUsers', 'write'), validationHandler(config.put), TraineeController.put)
// .delete(authMiddleWare('getUsers', 'deleTe'), validationHandler(config.delete), TraineeController.delete);

// traineeRouter.route('/:id')
//     .delete(validationHandler(config.delete), TraineeController.delete);

traineeRouter.route('/getall')
    .get(validationHandler(config.get), TraineeController.getAll);

traineeRouter.route('/findone')
    .get(validationHandler(config.get), TraineeController.findOne);

traineeRouter.route('/find')
    .post(validationHandler(config.find), TraineeController.find);

traineeRouter.route('/create')
    .post(validationHandler(config.create), TraineeController.createUser);

traineeRouter.route('/delete')
    .get(validationHandler(config.traineedelete), TraineeController.deleteAt);

traineeRouter.route('/update')
    .post(validationHandler(config.update), TraineeController.update);

export default traineeRouter;
