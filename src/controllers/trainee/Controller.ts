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
    get(req: Request, res: Response, next: NextFunction) {
        try {
            console.log(ControllerResponse.Insideget);

            res.status(200).send({
                message: ControllerResponse.fetched,
                data: [
                    {
                        name: 'Nisha Mangnani',
                        address: 'Ahemdabad'
                    }
                ],
                status: ControllerResponse.ResponseSuccess
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
    getAll(req: Request, res: Response, next: NextFunction) {
        try {
            console.log(ControllerResponse.InsidegetAll);
            const Userepository: UserRepository = new UserRepository();
            Userepository.getAll({}, (err: Error, data: object) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.status(200).send({
                        message: ControllerResponse.fetched,
                        data: [
                            {
                               database : data
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
    findOne(req: Request, res: Response, next: NextFunction) {
        try {
            console.log(ControllerResponse.InsidefindOne);
            const Userepository: UserRepository = new UserRepository();
            Userepository.findOne({email: req.body.email}, (err, data) => {
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
    find(req: Request, res: Response, next: NextFunction) {
        try {
            console.log(ControllerResponse.Insidefind);
            const Userepository: UserRepository = new UserRepository();
            Userepository.find(req.body, (err, data) => {
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

    post(req: Request, res: Response, next: NextFunction) {
        try {
            console.log(ControllerResponse.Insidepost);

            res.status(200).send({
                message: ControllerResponse.created,
                data: {
                        name: 'Rahul Bisht',
                        address: 'Delhi'
                    },
                status: ControllerResponse.ResponseSuccess
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
    createUser(req: Request, res: Response, next: NextFunction) {
        try {
            console.log(ControllerResponse.insideCreateUser);
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                // Store hash in your password DB.
                if (err) {
                    console.log(err);
                }
                else {
                    req.body.password = hash;
                    const usercreate = new UserRepository();
                    usercreate.createV(req.body);
                    console.log('New user created');
                    res.status(200).send({
                    message: ControllerResponse.createUser,
                    data: {
                        name: req.body.name,
                        password: req.body.password
                    },
                    status: 200
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
    put(req: Request, res: Response, next: NextFunction) {
        try {
            console.log(ControllerResponse.Insideput);

            res.status(200).send({
                message: ControllerResponse.updated,
                data: {
                        name: 'Rahul Bisht',
                        address: 'Kamoun'
                    },
                status: ControllerResponse.ResponseSuccess
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

    delete(req: Request, res: Response, next: NextFunction) {
        try {
            console.log(ControllerResponse.Insidedelete);

            res.status(200).send({
                message: ControllerResponse.deleted,
                data: {},
                status: ControllerResponse.ResponseSuccess
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
    deleteAt(req: Request, res: Response, next: NextFunction ) {
        try {
            const userRepository: UserRepository = new UserRepository();
            userRepository.delete(req.body.originalId, req.body.deletedBy);
            res.status(200).send({
                message: ControllerResponse.deleted,
                data: [
                    {
                        Deleted_Id: req.body.originalId,
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
