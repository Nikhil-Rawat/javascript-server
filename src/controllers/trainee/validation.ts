import { errorMessage, responseController } from '../../libs/constant';
import { roleValidation, deletedByValidation, originalIdValidation } from '../config';
const config = {
    // find: {
    //     // role: {
    //     //     required: false,
    //     //     string: true,
    //     //     in: ['body'],
    //     //     error: errorMessage.occured,
    //     //     message: errorMessage.role,
    //     // },
    //     ...roleValidation,
    //     name: {
    //         required: false,
    //         string: true,
    //         in: ['body'],
    //         error: errorMessage.occured,
    //         message: errorMessage.name,
    //     },
    //     createdBy: {
    //         required: false,
    //         string: true,
    //         in: ['body'],
    //         error: errorMessage.occured,
    //         message: errorMessage.name,
    //     }
    // },
    create: {
        name: {
            required: true,
            string: true,
            in: ['body'],
            error: errorMessage.occured,
            message: errorMessage.name,
        },
        role: {
            required: true,
            string: true,
            in: ['body'],
            error: errorMessage.occured,
            message: errorMessage.name
        },
        email: {
            required: true,
            string: true,
            in: ['body'],
            error: errorMessage.occured,
            message: errorMessage.name,
        },
        password: {
            required: true,
            string: true,
            in: ['body'],
            error: errorMessage.occured,
            message: errorMessage.name,
        },
        createdBy: {
            required: true,
            string: true,
            in: ['body'],
            error: errorMessage.occured,
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
            error: errorMessage.occured,
            message: errorMessage.name,
        },
        updatedBy: {
            required: true,
            string: true,
            in: ['body'],
            error: errorMessage.occured,
            message: errorMessage.name,
        },
        email: {
            required: false,
            string: true,
            in: ['body'],
            error: errorMessage.occured,
            message: errorMessage.name,
        },
        password: {
            required: false,
            string: true,
            in: ['body'],
            error: errorMessage.occured,
            message: errorMessage.name,
        },
        role: {
            required: false,
            string: true,
            in: ['body'],
            error: errorMessage.occured,
            message: errorMessage.name,
        }
    },
    // findOne: {
    //     email: {
    //         required: true,
    //         string: true,
    //         errorMessage: errorMessage.email,
    //         in: ['body'],
    //     }
    // },
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
        // ...deletedByValidation,
        // ...originalIdValidation
    },
    deletedByValidation: {
        required: true,
        string: true,
        errorMessage: errorMessage.deltedBy,
        in: ['body']
    },
    originalIdValidation: {
        required: true,
        string: true,
        errorMessage: errorMessage.id,
        in: ['body']
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
        sortBy: {
            required: false,
            string: true,
            default: '_id',
            in: ['query'],
            errorMessage: errorMessage.sortBy
        },
        sortorder: {
            required: false,
            default: -1,
            in: ['query'],
            errorMessage: errorMessage.sortOrder
        },
        search: {
            required: false,
            string: true,
            in: ['query'],
            errorMessage: 'Incorrect email or name'
        }
    }
};

export default config;
