import { Response, Request, NextFunction } from 'express';
import { message, Invalid, InsideRoute, successResponse, DatabaseMongo } from '../../libs/constant';
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
            console.log(InsideRoute.GET_ALL);
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
                const TotalCount = await Userepository.totalCount();
                const data = await Userepository.getAll({[key]: value}, skip, limit, sortBy, sortOrder);
                    res.status(200).send({
                        status: 200,
                        message: successResponse.FETCHED,
                        data: {
                                Page_Count: data.length,
                                Total_Count: TotalCount,
                                records: data
                            }
                    });
            }
            else {
                next({
                    code: 400,
                    message: Invalid.sortBy
                });
            }
        }
        catch (err) {
            next({
                code: 503,
                message: DatabaseMongo.maintainceBreak
            });
        }
    }
    public async create(req: Request, res: Response, next: NextFunction) {
        try {
            console.log(InsideRoute.CREATE);
            console.log(req.body.password);
            const userrepository = new UserRepository();
            const docs = await userrepository.findOne({email: req.body.email});
            if (docs) {
                next({
                    code: 401,
                    message: 'Email Already Exist'
                });
            } else {
                const hash = await bcrypt.hash(req.body.password, 10);
                req.body.password = hash;
                const usercreate = new UserRepository();
                const createdTrainee = await usercreate.createV(req.body);
                if (createdTrainee === null) {
                    next({
                        code: 400,
                        message: message.failed
                    });
                }
                else {
                    res.status(200).send({
                        status: 200,
                        message: successResponse.CREATED,
                        data: {
                            name: createdTrainee.name,
                            email: createdTrainee.email,
                            role: createdTrainee.role,
                            originalId: createdTrainee.originalId,
                            createdAt: createdTrainee.createdAt
                        }
                    });
                }
            }
        }
        catch (err) {
            next({
                code: 503,
                message: DatabaseMongo.maintainceBreak
            });
        }
    }
    public async delete(req: Request, res: Response, next: NextFunction ) {
        try {
            console.log(InsideRoute.DELETE);
            const userRepository: UserRepository = new UserRepository();
            const userdeleted = await userRepository.delete(req.params.id, req.body.deletedBy);

            if (!userdeleted) {
                next({
                    code: 400,
                    message: Invalid.id
                });
            }
            else {
                res.status(200).send({
                    status: 200,
                    message: successResponse.DELETED
                });
            }
        } catch (err) {
            next({
                code: 503,
                message: DatabaseMongo.maintainceBreak
            });
        }
    }
    public async update(req: Request, res: Response, next: NextFunction ) {
        try {
            console.log(InsideRoute.UPDATE);
            if (req.body.password) {
                req.body.password = await bcrypt.hash(req.body.password, 10);
            }
            if (req.body.email) {
                const userrepository = new UserRepository();
                const docs = await userrepository.findOne({email: req.body.email});
                if (docs && !(docs.originalId === req.body.originalId)) {
                    return next({
                        code: 401,
                        message: 'Email Already Exist'
                    });
                }
            }
            const userRepository = new UserRepository();
            const Updateduser = await userRepository.userUpdate(req.body);
            if (!Updateduser) {
                next({
                    code: 400,
                    message: Invalid.id
                });
            }
            else {
                res.status(200).send({
                    status: 200,
                    message: successResponse.UPDATED,
                    data: {
                            originalId: Updateduser.originalId,
                            name: Updateduser.name,
                            email: Updateduser.email,
                            role: Updateduser.role,
                            createdAt: Updateduser.createdAt
                        }
                });
            }
        }
        catch (err) {
            next({
                code: 503,
                message: DatabaseMongo.maintainceBreak
            });
        }
    }
}

export default TraineeController.getInstance();
