import { errorMessage } from '../../libs/constant';

const config = {
    login: {
        password: {
            required: true,
            string: true,
            in: ['body'],
            custom(value) {
                console.log('Value', value);
                throw {
                    error: errorMessage.Occured,
                    message: errorMessage.id,
                };
            },
        },
        email: {
            required: true,
            string: true,
            regex: /^[a-zA-Z0-9+_.-]+@+[a-zA-Z]+.+[a-zA-Z]+$/,
            in: ['body'],
            errorMessage: errorMessage.name,
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