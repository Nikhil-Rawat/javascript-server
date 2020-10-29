import { Response, Request, NextFunction } from 'express';

export default (err, res: Response, req: Request, next: NextFunction) => {
    console.log(err);
    res.json(
        {
            error: err.error,
            status: err.code,
            message: err.message || 'Error',
            timestamp: new Date()
        }
    );
};
