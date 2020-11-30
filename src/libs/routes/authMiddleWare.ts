import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction, request } from 'express';
import hasPermission from '../permission';
import configuration from '../../config/configuration';
import { Auth, Invalid } from '../constant';

export default (moduleName: string, permissionType: string) => (req: Request, res: Response, next: NextFunction) => {
    try {
        const auth = 'authorization';
        const token = req.headers[auth];
        const decodeUser = jwt.verify(token, configuration.secretkey);
        console.log(`${decodeUser.docs.name} Profile:\n`, decodeUser.docs);
        if (hasPermission(moduleName, decodeUser.docs.role, permissionType)) {
            console.log(`${decodeUser.docs.name} has ${permissionType} permission for ${moduleName} module.`);
            res.locals.val = decodeUser.docs;
            next();
        }
        else {
            res.status(401).send( {
                message: Auth.Unauthorized
            });
        }
    }
    catch (err) {
        res.status(403).send({
                error: Invalid.token,
                message: Auth.Unauthenticated
        });
    }
};

