import { traineeRouter } from './controllers';
import { Router } from 'express';

const mainRouter = Router();

mainRouter.use('/trainee', traineeRouter);

export default mainRouter;
