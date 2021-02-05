import { Response, Request, NextFunction } from 'express';
import UserRepository from '../../repositories/user/UserRepository';
import configuration from '../../config/configuration';
import { message, Invalid, InsideRoute, DatabaseMongo, successResponse } from '../../libs/constant';
import * as jwt from 'jsonwebtoken';
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
    public async login(req: Request, res: Response, next: NextFunction) {
        try {
            console.log(InsideRoute.LOGIN);
            const secretkey = configuration.secretkey;
            const userrepository = new UserRepository();
            const docs = await userrepository.findOne({email: req.body.email});
            if (docs === null) {
                console.log(Invalid.email);
                next({
                    code: 400,
                    message:  Invalid.email
                });
            }
            else {
                bcrypt.compare(req.body.password, docs.password, (error: Error, result: boolean) => {
                    if (result) {
                        const token = jwt.sign({docs}, secretkey, {
                            expiresIn : '15d'
                        });
                        res.status(200).send({
                            status: 200,
                            message: successResponse.LOGIN,
                            data: token
                        });
                    }
                    else {
                        next({
                            message: Invalid.password,
                            code: 400,
                        });
                    }
                });
            }
        }
        catch (err) {
            next({
                code: 503,
                message: DatabaseMongo.maintainceBreak,
            });
        }
    }
    me(req: Request, res: Response, next: NextFunction) {
        console.log(InsideRoute.ME);
        const userDetails = res.locals.val;
        res.status(200).send({
            status: 200,
            message: successResponse.USER_DETAILS,
            data: userDetails
        });
    }
}

export default UserController.getInstance();


