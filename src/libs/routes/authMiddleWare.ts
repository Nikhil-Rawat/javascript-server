import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction, request } from 'express';
import hasPermission from '../permission';
import configuration from '../../config/configuration';

export default (moduleName: string, permissionType: string) => (req: Request, res: Response, next: NextFunction) => {
    try {
        const auth = 'authorization';
        const token = req.headers[auth];
        const decodeUser = jwt.verify(token, configuration.secretkey);
        console.log(decodeUser.data);
        console.log(moduleName, decodeUser.data.role, permissionType);
        if (hasPermission(moduleName, decodeUser.data.role, permissionType)) {
            res.locals.val = decodeUser.data;
            next();
        }
        else {
            next({
                error: 'Unauthorized Access',
                message: 403
            });
        }
    }
    catch (err) {
        next({
                error: err,
            message: 'Unauthenticate Access',
            code: 404
        });
    }
};

