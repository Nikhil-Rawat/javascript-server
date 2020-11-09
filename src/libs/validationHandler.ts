// import { Request, Response, NextFunction } from 'express';

// export default (config) => (req: Request, res: Response, next: NextFunction) => {
//     console.log(req.body);
//     const errors = [];
//     Object.keys(config).forEach((key) => {
//         const i = 0;
//         const keys = config[key];
//         const locations = keys.in[i];
//         let request = req[locations][key];
//         const regex = keys.regex;
//         console.log(req.body.email);
//         if ((keys.required) && !(request)) {
//             console.log('1');
//             const err = {
//                 key: `${key}`,
//                 location: `${keys.in}`,
//                 errorMessage: `${keys.errorMessage || 'required'}`
//                 };
//                 return errors.push(err);
//         }
//         if ((!keys.required) && !(request)) {
//             return request = keys.default;
//         }
//         if (
//             (((keys.number) && !(Number.isInteger(Number(request)))) ||
//             ((keys.string) && !(typeof request === 'string')))
//             ) {
//                 console.log('3');
//             const err = {
//                 key: `${key}`,
//                 location: `${keys.in}`,
//                 errorMessage: `${keys.errorMessage || 'incorrect Type'}`
//                 };
//                 return errors.push(err);
//         }
//         if ((keys.isObject) && !(typeof(request) === 'object')) {
//             console.log('4');
//             const err = {
//                 key: `${key}`,
//                 location: `${keys.in}`,
//                 errorMessage: `${keys.errorMessage || 'not an Object'}`
//                 };
//                 return errors.push(err);
//         }
//         if ((regex) && (!regex.test(request))) {
//             console.log('5');
//             const err = {
//                 key: `${key}`,
//                 location: `${keys.in}`,
//                 errorMessage: `${request} is not valid`
//                 };
//                 return errors.push(err);
//         }
//     });
//     if (errors.length > 0) {
//         return res.status(400).send(errors);
//     }
//     next();
// };
import { Request, Response, NextFunction } from 'express';
export default (Validation) => (req: Request, res: Response, next: NextFunction ) => {
    console.log(req.body);
    console.log(req.query);
    const error = [];
    Object.keys(Validation).forEach((keys) => {
        const inObject = Validation[keys];
        inObject.in.forEach(inside => {
            let value = req[inside][keys];
            const a = {
                key : '',
                location: '',
                errorMessage: ''
            };
            if ((inObject.required) && !(value)) {
                a.key = keys;
                a.location = inside;
                a.errorMessage = inObject.errorMessage || `${keys} is required`;
                error.push(a);
                return;
            }
            value = value || inObject.default;
            if (!value) {
                return;
            }
            if ((inObject.number) && !(Number.isInteger(Number(value)))) {
                a.key = keys;
                a.location = inside;
                a.errorMessage = inObject.errorMessage || `${keys}'s type is not number`;
                error.push(a);
                return;
            }
            if ((inObject.string) && !(typeof value === 'string')) {
                a.key = keys;
                a.location = inside;
                a.errorMessage = inObject.errorMessage || `${keys}'s type is not string`;
                error.push(a);
                return;
            }
            const regex = inObject.regex;
            if ((regex) && !regex.test(value)) {
                a.key = keys;
                a.location = inside;
                a.errorMessage = inObject.errorMessage || `${keys} is invalid`;
                error.push(a);
                return;
            }
            if (inObject.isObject && (!(typeof value === 'object') || !(Object.entries(value).length))) {
                a.key = keys;
                a.location = inside;
                a.errorMessage = `${keys} is invalid`;
                error.push(a);
                return;
            }
            console.log(`inside ${keys} values are ${value}`);
        });
    });
    if (error.length) {
        return res.status(400).send(error);
    }
    next ();
};
