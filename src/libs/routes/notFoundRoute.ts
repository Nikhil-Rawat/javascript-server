import { Request, Response, NextFunction, response } from 'express';
import { route } from '../constant';

export default (req: Request, res: Response, next: NextFunction) => {
    next({
        error : route.notFound,
        code: 404
    });
};
