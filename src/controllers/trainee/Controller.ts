import { Response, Request, NextFunction } from 'express';
import { ControllerResponse } from '../../libs/constant';
import UserRepository from '../../repositories/user/UserRepository';
import * as bcrypt from 'bcrypt';

class TraineeController {
    static instance: TraineeController;

    static getInstance() {
        if (TraineeController.instance) {
            return TraineeController.instance;
        }
        TraineeController.instance = new TraineeController();
            return TraineeController.instance;
    }
    public async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const Skip = res.locals.skip;
            const Limit = res.locals.limit;
            const skip = parseInt(Skip.toString(), 10);
            const limit = parseInt(Limit.toString(), 10);
            const sortBy = req.query.sortBy || '';
            console.log(ControllerResponse.InsidegetAll);
            if (sortBy === '' || sortBy === 'name' || sortBy === 'email') {
                const Userepository: UserRepository = new UserRepository();
                const data = await Userepository.getAll({}, skip, limit, sortBy);
                    res.status(200).send({
                        message: ControllerResponse.fetched,
                        data: [
                            {
                                Total_Count: data.length,
                                database: data
                            }
                        ],
                        status: ControllerResponse.ResponseSuccess
                    });
            }
            else {
                console.log(ControllerResponse.InvalidSorting);
                res.send( {
                    message: ControllerResponse.SortingUnavailable
                });
            }
        }
        catch (err) {
            return next({
                error: ControllerResponse.ResponseBadRequest,
                message: err,
                status: 400
            });
        }
    }
    public async searchOne(req: Request, res: Response, next: NextFunction) {
        try {
            console.log(ControllerResponse.InsidefindOne);
            const Userepository: UserRepository = new UserRepository();
            await Userepository.findOne({email: req.body.email}, (err: Error, data: []) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.status(200).send({
                        message: ControllerResponse.fetched,
                        Data: [
                            {
                               email : data
                            }
                        ],
                        status: ControllerResponse.ResponseSuccess
                    });
                }
            });
        }
        catch (err) {
            return next({
                error: ControllerResponse.ResponseBadRequest,
                message: err,
                status: 400
            });
        }
    }
    public async search(req: Request, res: Response, next: NextFunction) {
        try {
            console.log(ControllerResponse.Insidefind);
            const Userepository: UserRepository = new UserRepository();
            await Userepository.find(req.body, (err: Error, data: []) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.status(200).send({
                        message: ControllerResponse.fetched,
                        Database: [
                            {
                               Data : data
                            }
                        ],
                        status: ControllerResponse.ResponseSuccess
                    });
                }
            });
        }
        catch (err) {
            return next({
                error: ControllerResponse.ResponseBadRequest,
                message: err,
                status: 400
            });
        }
    }
    public async createUser(req: Request, res: Response, next: NextFunction) {
        try {
            console.log(ControllerResponse.insideCreateUser);
            await bcrypt.hash(req.body.password, 10, (err: Error, hash: string) => {
                if (err) {
                    console.log(err);
                }
                else {
                    req.body.password = hash;
                    const usercreate = new UserRepository();
                    if (usercreate.createV(req.body)) {
                        console.log(ControllerResponse.createUser);
                        res.status(200).send({
                            message: ControllerResponse.createUser,
                            data: {
                                name: req.body.name
                            },
                            status: 200
                        });
                    }
                    else {
                        res.send({
                            message: 'User not created'
                        });
                    }
                }
            });
        }
        catch (err) {
            return next({
                error: err,
                message: ControllerResponse.ResponseBadRequest,
                status: 400
            });
        }
    }
    deleteAt(req: Request, res: Response, next: NextFunction ) {
        try {
            const userRepository: UserRepository = new UserRepository();
            userRepository.delete(req.body.originalId, req.body.deletedBy);
                res.status(200).send({
                    message: ControllerResponse.deleted,
                    data: [
                        {
                            Deleted_By: req.body.name
                        }
                    ],
                    status: ControllerResponse.ResponseSuccess,
                });
        } catch (err) {
            console.log(err);
        }
    }
    update(req: Request, res: Response, next: NextFunction ) {
        try {
            const userRepository = new UserRepository();
            userRepository.userUpdate(req.body);
            res.status(200).send({
                message: ControllerResponse.updated,
                data: [
                    {
                        Updated_data: req.body
                    }
                ],
            });
        } catch (err) {
            console.log(err);
        }
    }
}

export default TraineeController.getInstance();
