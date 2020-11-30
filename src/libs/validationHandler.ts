import { Request, Response, NextFunction } from 'express';


export default (Validation) => (req: Request, res: Response, next: NextFunction ) => {
    // console.log(req.body);
    // console.log(req.query);
    const error = [];
    Object.keys(Validation).forEach((keys) => {
        const inObject = Validation[keys];
        inObject.in.forEach(inside => {
            let value = req[inside][keys];
            const a = {
                key : '',
                location: '',
                error: ''
            };
            if ((inObject.required) && !(value)) {
                a.key = keys;
                a.location = inside;
                a.error = inObject.error || `${keys} is required`;
                error.push(a);
                return;
            }
            value = value || inObject.default;
            res.locals[keys] = value;
            // console.log(value);
            if (!value) {
                return;
            }
            if ((inObject.number) && !(Number.isInteger(Number(value)))) {
                a.key = keys;
                a.location = inside;
                a.error = inObject.error || `${keys}'s type is not number`;
                error.push(a);
                return;
            }
            if ((inObject.string) && !(typeof value === 'string')) {
                a.key = keys;
                a.location = inside;
                a.error = inObject.error || `${keys}'s type is not string`;
                error.push(a);
                return;
            }
            const regex = inObject.regex;
            if ((regex) && !regex.test(value)) {
                a.key = keys;
                a.location = inside;
                a.error = inObject.error || `${keys} is invalid`;
                error.push(a);
                return;
            }
            if (inObject.isObject && (!(typeof value === 'object') || !(Object.entries(value).length))) {
                a.key = keys;
                a.location = inside;
                a.error = `${keys} is invalid`;
                error.push(a);
                return;
            }
            console.log(`Processing ${keys}: ${value}`);
        });
    });
    if (error.length) {
        return res.status(400).send(error);
    }
    next ();
};
