import { Response, Request, NextFunction } from 'express';
import UserRepository from '../../repositories/user/UserRepository';
import configuration from '../../config/configuration';
import { message, Invalid, Inside } from '../../libs/constant';
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
            console.log(Inside.login);
            const secretkey = configuration.secretkey;
            const userrepository = new UserRepository();
            const docs = await userrepository.findOne({email: req.body.email});
            if (docs === null) {
                console.log(Invalid.email);
                res.status(400).send({
                    message:  Invalid.email
                });
            }
            else {
                bcrypt.compare(req.body.password, docs.password, (error: Error, result: boolean) => {
                    if (result) {
                        const token = jwt.sign({docs}, secretkey, {
                            expiresIn : '15m'
                        });
                        res.status(200).send({
                            status: message.ok,
                            message: 'Authorized Token',
                            data: token
                        });
                    }
                    else {
                        console.log(error);
                        res.status(400).send({
                            message: Invalid.password
                        });
                    }
                });
            }
        }
        catch (err) {
            res.status(400).send( {
                message: message.badRequest
            });
        }
    }
    me(req: Request, res: Response, next: NextFunction) {
        console.log(Inside.me);
        const data = res.locals.val;
        res.status(200).send({
            status: message.ok,
            message: 'Me',
            Data: data
        });
    }
}

export default UserController.getInstance();


