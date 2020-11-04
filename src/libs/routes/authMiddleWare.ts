import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import hasPermission from '../permission';

export default (moduleName: string, permissionType: string) => (req: Request, res: Response, next: NextFunction) => {
    try {
    const auth = 'authorization';
    const token = req.headers[auth];
    const decodeUser = jwt.verify(token, 'qwertyuiopasdfghjklzxcvbnm123456');
    console.log(decodeUser);
    console.log(moduleName, decodeUser.role, permissionType);
    if (hasPermission(moduleName, decodeUser.role, permissionType)) {
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
