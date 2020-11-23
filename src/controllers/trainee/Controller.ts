import { Response, Request, NextFunction } from 'express';
import { responseController } from '../../libs/constant';
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
            const skip = parseInt(Skip.toString(), 10);

            const Limit = res.locals.limit;
            const limit = parseInt(Limit.toString(), 10);

            const sortBy = res.locals.sortBy;

            const Search = req.query.search as string ||  '';
            console.log(Search);

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
                    console.log(responseController.responseInvalidRequest);
                }
            }
            else {
                key = undefined;
                value = undefined;
            }
            const SortOrder = res.locals.sortorder;
            const sortOrder = parseInt(SortOrder.toString(), 10);
            console.log(responseController.InsidegetAll);
            if (sortBy === '_id' || sortBy === 'name' || sortBy === 'email') {
                const Userepository: UserRepository = new UserRepository();
                const data = await Userepository.getAll({[key]: value}, skip, limit, sortBy, sortOrder);
                if (data.length === 0) {
                    res.send ({
                        message: `Incoorect ${key}`
                    });
                }
                const TotalCount = await Userepository.totalCount();
                    res.status(200).send({
                        message: responseController.fetched,
                        data: [
                            {
                                Page_Count: data.length,
                                Total_Count: TotalCount,
                                database: data
                            }
                        ],
                        status: responseController.responseSuccess
                    });
            }
            else {
                console.log(responseController.InvalidSorting);
                res.send( {
                    message: responseController.sortingUnavailable
                });
            }
        }
        catch (err) {
            return next({
                error: responseController.responseInvalidRequest,
                message: err,
                status: 400
            });
        }
    }
    // public async findOne(req: Request, res: Response, next: NextFunction) {
    //     try {
    //         console.log(responseController.InsidefindOne);
    //         const Userepository: UserRepository = new UserRepository();
    //         await Userepository.findOne({email: req.body.email}, (err: Error, data: []) => {
    //             if (err) {
    //                 console.log(err);
    //             }
    //             else {
    //                 res.status(200).send({
    //                     message: responseController.fetched,
    //                     Data: [
    //                         {
    //                            email : data
    //                         }
    //                     ],
    //                     status: responseController.responseSuccess
    //                 });
    //             }
    //         });
    //     }
    //     catch (err) {
    //         return next({
    //             error: responseController.responseInvalidRequest,
    //             message: err,
    //             status: 400
    //         });
    //     }
    // }
    // public async find(req: Request, res: Response, next: NextFunction) {
    //     try {
    //         console.log(responseController.Insidefind);
    //         const Userepository: UserRepository = new UserRepository();
    //         await Userepository.find(req.body, (err: Error, data: []) => {
    //             if (err) {
    //                 console.log(err);
    //             }
    //             else {
    //                 res.status(200).send({
    //                     message: responseController.fetched,
    //                     Database: [
    //                         {
    //                            Data : data
    //                         }
    //                     ],
    //                     status: responseController.responseSuccess
    //                 });
    //             }
    //         });
    //     }
    //     catch (err) {
    //         return next({
    //             error: responseController.responseInvalidRequest,
    //             message: err,
    //             status: 400
    //         });
    //     }
    // }
    public async createUser(req: Request, res: Response, next: NextFunction) {
        try {
            console.log(responseController.createUser);
            const hash = await bcrypt.hash(req.body.password, 10);
            req.body.password = hash;
            const usercreate = new UserRepository();
            await usercreate.createV(req.body);
            console.log(`${responseController.userCreated}: ${req.body.name}`);
            res.status(200).send({
                message: responseController.userCreated,
                data: {
                    name: req.body.name
                },
                status: 200
            });
        }
        catch (err) {
            return next({
                error: err,
                message: responseController.responseInvalidRequest,
                status: 400
            });
        }
    }
    public async deleteAt(req: Request, res: Response, next: NextFunction ) {
        try {
            const userRepository: UserRepository = new UserRepository();
            await userRepository.delete(req.body.originalId, req.body.deletedBy);
            console.log(responseController.deleted);
                res.status(200).send({
                    message: responseController.deleted,
                    data: {
                            Deleted_Id: req.body.originalId,
                            Deleted_By: req.body.deletedBy
                        },
                    status: responseController.responseSuccess,
                });
        } catch (err) {
            console.log(err);
        }
    }
    public async update(req: Request, res: Response, next: NextFunction ) {
        try {
            if (req.body.password) {
                const hash = await bcrypt.hash(req.body.password, 10);
                req.body.password = hash;
            }
            const userRepository = new UserRepository();
            const Updateduser = await userRepository.userUpdate(req.body);
            if (!Updateduser) {
                res.send({
                    Message: responseController.notFound
                });
            }
            else {
                console.log(responseController.updated, `:${req.body.originalId}`);
                res.status(200).send({
                message: responseController.updated,
                data: [
                    {
                        Updated_data: req.body
                    }
                ],
            });
        }
        }
        catch (err) {
            console.log(err);
        }
    }
}


export default TraineeController.getInstance();
