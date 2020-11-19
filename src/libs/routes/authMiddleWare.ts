import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction, request } from 'express';
import hasPermission from '../permission';
import configuration from '../../config/configuration';
import { responseController } from '../constant';

export default (moduleName: string, permissionType: string) => (req: Request, res: Response, next: NextFunction) => {
    try {
        const auth = 'authorization';
        const token = req.headers[auth];
        const decodeUser = jwt.verify(token, configuration.secretkey);
        console.log(`${decodeUser.data.name} Profile:\n`, decodeUser.data);
        if (hasPermission(moduleName, decodeUser.data.role, permissionType)) {
            console.log(`${decodeUser.data.name} has ${permissionType} permission for ${moduleName} module.`);
            res.locals.val = decodeUser.data;
            next();
        }
        else {
            next({
                error: responseController.Unauthorized,
                message: 403
            });
        }
    }
    catch (err) {
        res.send({
                error: err,
            message: responseController.Unauthenticated,
            code: 404
        });
    }
};

