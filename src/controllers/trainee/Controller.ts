import { Response, Request, NextFunction } from 'express';
import { ResponseMessage, InsideMessage } from '../../libs/constant';

class TraineeController {
    static instance: TraineeController;

    static getInstance() {
        if (TraineeController.instance) {
            return TraineeController.instance;
        }
        TraineeController.instance = new TraineeController();
            return TraineeController.instance;
    }
    get(req: Request, res: Response, next: NextFunction) {
        try {
            console.log(InsideMessage.get);

            res.status(200).send({
                message: ResponseMessage.fetched,
                data: [
                    {
                        name: 'Nikhil Rawat',
                        address: 'Rudrapryag'
                    }
                ],
                status: ResponseMessage.successStatus
            });
        }
        catch (err) {
            return next({
                error: ResponseMessage.badRequest,
                message: err,
                status: 400
            });
        }
    }

    post(req: Request, res: Response, next: NextFunction) {
        try {
            console.log(InsideMessage.post);

            res.status(200).send({
                message: ResponseMessage.created,
                data: {
                        name: 'Rahul Bisht',
                        address: 'Delhi'
                    },
                status: ResponseMessage.successStatus
            });
        }
        catch (err) {
            return next({
                error: ResponseMessage.badRequest,
                message: err,
                status: 400
            });
        }
    }

    put(req: Request, res: Response, next: NextFunction) {
        try {
            console.log(InsideMessage.put);

            res.status(200).send({
                message: ResponseMessage.updated,
                data: {
                        name: 'Rahul Bisht',
                        address: 'Kamoun'
                    },
                status: ResponseMessage.successStatus
            });
        }
        catch (err) {
            return next({
                error: ResponseMessage.badRequest,
                message: err,
                status: 400
            });
        }
    }

    delete(req: Request, res: Response, next: NextFunction) {
        try {
            console.log(InsideMessage.delete);

            res.status(200).send({
                message: ResponseMessage.deleted,
                data: {},
                status: ResponseMessage.successStatus
            });
        }
        catch (err) {
            return next({
                error: ResponseMessage.badRequest,
                message: err,
                status: 400
            });
        }
    }
}

export default TraineeController.getInstance();
