import { Response, Request, NextFunction } from 'express';
import UserRepository from '../../repositories/user/UserRepository';
import { createEmitAndSemanticDiagnosticsBuilderProgram } from 'typescript';
import configuration from '../../config/configuration';
import { ResponseMessage, InsideMessage } from '../../libs/constant';
import * as jwt from 'jsonwebtoken';
import { config } from 'dotenv/types';
import { userModel } from '../../repositories/user/UserModel';
import authMiddleWare from '../../libs/routes/authMiddleWare';

class UserController {
    static instance: UserController;

    static getInstance() {
        if (UserController.instance) {
            return UserController.instance;
        }
        UserController.instance = new UserController();
            return UserController.instance;
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
    create(req: Request, res: Response, next: NextFunction) {
        const secretkey = configuration.secretkey;
        userModel.findOne({email: req.body.email, password: req.body.password}, (err, data) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log(data);
                if (data === null) {
                    console.log('Unauthorized user');
                    res.send({
                        message: 'Unauthorized user'
                    });
                }
                else {
                    const token = jwt.sign({data}, secretkey);
                    res.send({
                        message: 'Successfully created token',
                        datatoken: token
                    });
                }
            }
        });
    }
    me(req: Request, res: Response, next: NextFunction) {
        const data = res.locals.val;
        console.log('......', data);
        res.send({
            user: data
        });
    }
}

export default UserController.getInstance();


