import { Request, Response, NextFunction, response } from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
    next({
        error : 'Not found',
        code: 404
    } );
};