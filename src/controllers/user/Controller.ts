import { Response, Request, NextFunction } from 'express';
import UserRepository from '../../repositories/user/UserRepository';
import configuration from '../../config/configuration';
import { responseController } from '../../libs/constant';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import Idocs from './interface';

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
        const userrepository = new UserRepository();
        userrepository.findOne({email: req.body.email}, (err: Error, docs: Idocs) => {
            if (err) {
                console.log(err);
                res.send({
                    message: err
                });
            }
            else {
                if (docs === null) {
                    console.log(responseController.Unauthorized);
                    res.send({
                        message:  responseController.Unauthorized
                    });
                }
                else {
                    bcrypt.compare(req.body.password, docs.password, (error: Error, result: boolean) => {
                        if (error) {
                            console.log(error);
                            res.send({
                                message: error
                            });
                        }
                        else {
                            if (result === true) {
                                const token = jwt.sign({docs}, secretkey, {
                                    expiresIn : '15d'
                                });
                                console.log(`A token is issued to ${docs.name}`);
                                console.log(`${docs.name}: ${docs}`);
                                res.send({
                                    message: responseController.tokenCreated,
                                    datatoken: token
                                });
                            }
                            else {
                                console.log(responseController.Unauthorized);
                                res.send({
                                message: responseController.Unauthorized
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
            User_Profile: data
        });
    }
}

export default UserController.getInstance();


