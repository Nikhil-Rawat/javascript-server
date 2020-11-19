import { errorMessage } from '../../libs/constant';

const config = {
    login: {
        password: {
            required: true,
            string: true,
            in: ['body'],
            custom(value: any) {
                console.log('Value', value);
                throw {
                    error: errorMessage.occured,
                    message: errorMessage.password,
                };
            },
        },
        email: {
            required: true,
            string: true,
            regex: /\b[a-zA-Z0-9+_.-]+@[a-z]+\.[a-z]{2,}\b/,
            in: ['body'],
            errorMessage: errorMessage.email,
        },
    },
    get: {
        skip: {
            required: false,
            default: 0,
            number: true,
            in: ['query'],
            errorMessage: errorMessage.skip,
        },
        limit: {
            required: false,
            default: 10,
            number: true,
            in: ['query'],
            errorMessage: errorMessage.limit,
        },
    }
};

export default config;