import { Router } from 'express';
import TraineeController from './Controller';
import config from './validation';
import validationHandler from '../../libs/validationHandler';
import { authMiddleWare } from '../../libs/routes';

const traineeRouter = Router();


traineeRouter.route('/create')
    .post(validationHandler(config.create), authMiddleWare('getUsers', 'write'), TraineeController.createUser);

traineeRouter.route('/delete')
    .get(validationHandler(config.traineedelete), authMiddleWare('getUsers', 'read'), TraineeController.deleteAt);

traineeRouter.route('/update')
    .post(validationHandler(config.update), authMiddleWare('getUsers', 'read'), TraineeController.update);

traineeRouter.route('/getall')
    .get( validationHandler(config.get), authMiddleWare('getUsers', 'read'), TraineeController.getAll);

// traineeRouter.route('/findOne')
//     .post(validationHandler(config.findOne), authMiddleWare('getUsers', 'read'), TraineeController.findOne);

// traineeRouter.route('/find')
//     .post(validationHandler(config.find), authMiddleWare('getUsers', 'read'), TraineeController.find);

export default traineeRouter;
