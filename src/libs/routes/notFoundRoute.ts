import { Response, Request, NextFunction } from 'express';
export default (req: Response, res: Request, next: NextFunction) => {
    next({
        error: 'Not found',
        code: 404
    });
};
