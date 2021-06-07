import { Router } from 'express';
import TraineeController from './Controller';
import config from './validation';
import validationHandler from '../../libs/validationHandler';
import { authMiddleWare } from '../../libs/routes';

const traineeRouter = Router();


traineeRouter.route('/create')
    .post(validationHandler(config.post), authMiddleWare('getUsers', 'write'), TraineeController.create);

traineeRouter.route('/delete/:id')
    .delete(validationHandler(config.delete), authMiddleWare('getUsers', 'deleTe'), TraineeController.delete);

traineeRouter.route('/update')
    .put(validationHandler(config.put), authMiddleWare('getUsers', 'write'), TraineeController.update);

traineeRouter.route('/getall')
    .get( validationHandler(config.get), authMiddleWare('getUsers', 'read'), TraineeController.read);

export default traineeRouter;
