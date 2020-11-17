import { errorMessage } from '../../libs/constant';

const config = {
    search: {
        role: {
            required: false,
            string: true,
            in: ['body'],
            error: errorMessage.Occured,
            message: errorMessage.role,
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
        }
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
    searchOne: {
        email: {
            required: true,
            string: true,
            errorMessage: errorMessage.email,
            in: ['body'],
        }
    },
    traineedelete: {
        deletedBy: {
            required: true,
            string: true,
            errorMessage: errorMessage.deltedBy,
            in: ['body']
        },
        originalId: {
            required: true,
            string: true,
            errorMessage: errorMessage.id,
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
    }
};

export default config;
