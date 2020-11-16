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
    find: {
        role: {
            required: false,
            string: true,
            in: ['body'],
            error: errorMessage.Occured,
            message: errorMessage.id,
        },
        originalId: {
            required: false,
            string: true,
            errorMessage: errorMessage.id,
            in: ['body'],
        },
        name: {
            required: false,
            string: true,
            in: ['body'],
            error: errorMessage.Occured,
            message: errorMessage.name,
        },
        createdBy: {
            required: false,
            string: true,
            in: ['body'],
            error: errorMessage.Occured,
            message: errorMessage.name,
        },
        email: {
            required: false,
            string: true,
            in: ['body'],
            error: errorMessage.Occured,
            message: errorMessage.name,
        },
    },
    create: {
        name: {
            required: true,
            string: true,
            in: ['body'],
            error: errorMessage.Occured,
            message: errorMessage.name,
        },
        role: {
            required: true,
            string: true,
            in: ['body'],
            error: errorMessage.Occured,
            message: errorMessage.name
        },
        email: {
            required: true,
            string: true,
            in: ['body'],
            error: errorMessage.Occured,
            message: errorMessage.name,
        },
        password: {
            required: true,
            string: true,
            in: ['body'],
            error: errorMessage.Occured,
            message: errorMessage.name,
        },
        createdBy: {
            required: true,
            string: true,
            in: ['body'],
            error: errorMessage.Occured,
            message: errorMessage.name,
        }
    },
    update: {
        originalId: {
            required: true,
            string: true,
            errorMessage: errorMessage.id,
            in: ['body'],
        },
        name: {
            required: false,
            string: true,
            in: ['body'],
            error: errorMessage.Occured,
            message: errorMessage.name,
        },
        updatedBy: {
            required: true,
            string: true,
            in: ['body'],
            error: errorMessage.Occured,
            message: errorMessage.name,
        },
        email: {
            required: false,
            string: true,
            in: ['body'],
            error: errorMessage.Occured,
            message: errorMessage.name,
        },
        password: {
            required: false,
            string: true,
            in: ['body'],
            error: errorMessage.Occured,
            message: errorMessage.name,
        },
        role: {
            required: false,
            string: true,
            in: ['body'],
            error: errorMessage.Occured,
            message: errorMessage.name,
        }
    },

    delete: {
        id: {
            required: true,
            errorMessage: errorMessage.id,
            in: ['params'],
        },
    },
    findone: {
        email: {
            required: true,
            string: true,
            errorMessage: errorMessage.email,
            in: ['body'],
        },
    },
    traineedelete: {
        originalId: {
            required: true,
            string: true,
            errorMessage: errorMessage.id,
            in: ['body'],
        },
        deletedBy: {
            required: true,
            string: true,
            errorMessage: 'not deleted',
            in: ['body']
        }
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
