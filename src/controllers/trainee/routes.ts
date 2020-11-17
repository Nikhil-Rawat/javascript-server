import { Router } from 'express';
import TraineeController from './Controller';
import config from './validation';
import validationHandler from '../../libs/validationHandler';
import { authMiddleWare } from '../../libs/routes';

const traineeRouter = Router();


traineeRouter.route('/create')
    .post(validationHandler(config.create), authMiddleWare('getUsers', 'write'), TraineeController.createUser);

traineeRouter.route('/delete')
    .get(validationHandler(config.traineedelete), authMiddleWare('getUsers', 'deleTe'), TraineeController.deleteAt);

traineeRouter.route('/update')
    .post(validationHandler(config.update), authMiddleWare('getUsers', 'deleTe'), TraineeController.update);

traineeRouter.route('/getall')
    .get(validationHandler(config.get), authMiddleWare('getUsers', 'read'), TraineeController.getAll);

traineeRouter.route('/searchOne')
    .post(validationHandler(config.searchOne), authMiddleWare('getUsers', 'read'), TraineeController.searchOne);

traineeRouter.route('/search')
    .post(validationHandler(config.search), authMiddleWare('getUsers', 'read'), TraineeController.search);

export default traineeRouter;
