import { errorMessage } from '../../libs/constant';

const config = {
    post: {
        id: {
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
        name: {
            required: true,
            string: true,
            regex: /[a-z]+[ ][a-z]+$/i,
            in: ['body'],
            errorMessage: errorMessage.name,
        },
    },

    delete: {
        id: {
            required: true,
            errorMessage: errorMessage.id,
            in: ['params'],
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
    },
    put: {
        id: {
            required: true,
            string: true,
            in: ['body']
        },
        dataToUpdate: {
            in: ['body'],
            required: true,
            isObject: true,
            custom(dataToUpdate) {
                console.log();
            },
        },
    },
};

export default config;