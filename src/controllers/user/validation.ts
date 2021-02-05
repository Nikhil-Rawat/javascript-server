import { Invalid } from '../../libs/constant';

const config = {
    login: {
        password: {
            required: true,
            string: true,
            in: ['body'],
            custom(value: any) {
                console.log('Value', value);
                throw {
                    error: Invalid.password,
                };
            },
        },
        email: {
            required: true,
            string: true,
            regex: /\b[a-zA-Z0-9+_.-]+@[a-z]+\.[a-z]{2,}\b/,
            in: ['body'],
            error: Invalid.email,
        },
    },
    get: {
        skip: {
            required: false,
            default: 0,
            number: true,
            in: ['query'],
            error: Invalid.skip,
        },
        limit: {
            required: false,
            default: 10,
            number: true,
            in: ['query'],
            error: Invalid.limit,
        },
    }
};

export default config;