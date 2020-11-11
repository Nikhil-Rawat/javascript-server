import { Response, Request, NextFunction } from 'express';
import UserRepository from '../../repositories/user/UserRepository';
import { createEmitAndSemanticDiagnosticsBuilderProgram } from 'typescript';
import configuration from '../../config/configuration';
import { ControllerResponse } from '../../libs/constant';
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
            console.log(ControllerResponse.Insideget);

            res.status(200).send({
                message: ControllerResponse.fetched,
                data: [
                    {
                        name: 'Nikhil Rawat',
                        address: 'Rudrapryag'
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
            console.log(ControllerResponse.deleted);

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
        res.send({
            user: data
        });
    }
}

export default UserController.getInstance();


