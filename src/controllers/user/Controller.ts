import { Response, Request, NextFunction } from 'express';
import UserRepository from '../../repositories/user/UserRepository';
import { createEmitAndSemanticDiagnosticsBuilderProgram } from 'typescript';
import configuration from '../../config/configuration';
import { ControllerResponse } from '../../libs/constant';
import * as jwt from 'jsonwebtoken';
import { config } from 'dotenv/types';
import { userModel } from '../../repositories/user/UserModel';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import * as bcrypt from 'bcrypt';

class UserController {
    static instance: UserController;

    static getInstance() {
        if (UserController.instance) {
            return UserController.instance;
        }
        UserController.instance = new UserController();
            return UserController.instance;
    }
    login(req: Request, res: Response, next: NextFunction) {
        const secretkey = configuration.secretkey;
        userModel.findOne({email: req.body.email}, (err, data) => {
            if (err) {
                console.log(err);
                res.send({
                    message: err
                });
            }
            else {
                if (data === null) {
                    console.log('Unauthorized user');
                    res.send({
                        message: 'Unauthorized user'
                    });
                }
                else {
                    console.log(data);
                    bcrypt.compare(req.body.password, data.password, (error: Error, result: boolean) => {
                        if (error) {
                            console.log(error);
                            res.send({
                                message: error
                            });
                        }
                        else {
                            if (result === true) {
                                const token = jwt.sign({data}, secretkey, {
                                    expiresIn : '15d'
                                });
                                res.send({
                                    message: 'Successfully created token',
                                    datatoken: token
                                });
                            }
                            else {
                                console.log('Unauthorized user');
                                res.send({
                                message: 'Unauthorized user'
                             });
                            }
                        }
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


