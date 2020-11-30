import { Response, Request, NextFunction } from 'express';
import { message, Invalid, Inside, success } from '../../libs/constant';
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
    public async read(req: Request, res: Response, next: NextFunction) {
        try {
            console.log(Inside.getall);
            const Skip = res.locals.skip;
            const skip = parseInt(Skip.toString(), 10);

            const Limit = res.locals.limit;
            const limit = parseInt(Limit.toString(), 10);

            const sortBy = res.locals.sortBy;

            const Search = req.query.search as string ||  '';

            let value = '';
            let key = '';

            const regexName = /^[a-z]+$/i;
            const regexEmail = /\b[a-zA-Z0-9+_.-]+@[a-z]+\.[a-z]{2,}\b/;

            if (req.query.search) {
                if (regexName.test(Search)) {
                    value  = Search;
                    key = 'name';
                }
                else if (regexEmail.test(Search)) {
                    value = Search;
                    key = 'email';
                }
                else {
                    console.log(message.badRequest);
                    res.status(400).send( {
                        message: Invalid.input
                    });
                }
            }
            else {
                key = undefined;
                value = undefined;
            }
            const SortOrder = res.locals.sortorder;
            const sortOrder = parseInt(SortOrder.toString(), 10);
            if (sortBy === '_id' || sortBy === 'name' || sortBy === 'email') {
                const Userepository: UserRepository = new UserRepository();
                const data = await Userepository.getAll({[key]: value}, skip, limit, sortBy, sortOrder);
                if (data.length === 0) {
                    res.status(400).send ({
                        message: `Invalid ${key}`
                    });
                }
                const TotalCount = await Userepository.totalCount();
                    res.status(200).send({
                        status: message.ok,
                        message: success.fetched,
                        data: [
                            {
                                Page_Count: data.length,
                                Total_Count: TotalCount,
                                records: data
                            }
                        ]
                    });
            }
            else {
                res.status(400).send( {
                    message: Invalid.sortBy
                });
            }
        }
        catch (err) {
            res.status(400).send( {
                message: message.badRequest
            });
        }
    }
    public async create(req: Request, res: Response, next: NextFunction) {
        try {
            console.log(Inside.create);
            const hash = await bcrypt.hash(req.body.password, 10);
            req.body.password = hash;
            const usercreate = new UserRepository();
            const createdTrainee = await usercreate.createV(req.body);
            if (createdTrainee === null) {
                res.status(400).send ( {
                    message: message.failed
                });
            }
            else {
                res.status(200).send({
                    status: 'Ok',
                    message: success.created,
                    data: {
                        name: req.body.name,
                        email: req.body.email,
                        role: req.body.role
                    }
                });
            }
        }
        catch (err) {
            res.status(400).send( {
                message: message.failed
            });
        }
    }
    public async delete(req: Request, res: Response, next: NextFunction ) {
        try {
            console.log(Inside.delete);
            const userRepository: UserRepository = new UserRepository();
            const userdeleted = await userRepository.delete(req.body.originalId, req.body.deletedBy);
            if (!userdeleted) {
                res.status(400).send({
                    Message: Invalid.id
                });
            }
            else {
                res.status(200).send({
                    status: message.ok,
                    message: success.deleted,
                    data: {
                            originalId: req.body.originalId,
                            deletedBy: req.body.deletedBy
                        }
                });
            }
        } catch (err) {
            res.status(400).send( {
                message: message.failed
            });
        }
    }
    public async update(req: Request, res: Response, next: NextFunction ) {
        try {
            console.log(Inside.update);
            if (req.body.password) {
                const hash = await bcrypt.hash(req.body.password, 10);
                req.body.password = hash;
            }
            const userRepository = new UserRepository();
            const Updateduser = await userRepository.userUpdate(req.body);
            if (!Updateduser) {
                res.status(400).send({
                    Message: Invalid.id
                });
            }
            else {
                res.status(200).send({
                    status: message.ok,
                    message: success.updated,
                    data: [
                        {
                            Id: req.body.originalId
                        }
                    ],
                });
            }
        }
        catch (err) {
            res.status(400).send({
                message: message.badRequest
            });
        }
    }
}

export default TraineeController.getInstance();
