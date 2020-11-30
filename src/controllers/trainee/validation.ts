import { Invalid, Required } from '../../libs/constant';
const config = {
    post: {
        name: {
            required: true,
            string: true,
            in: ['body'],
            error: Required.name
        },
        role: {
            required: true,
            string: true,
            in: ['body'],
            error: Required.role
        },
        email: {
            required: true,
            string: true,
            in: ['body'],
            error: Required.email,
        },
        password: {
            required: true,
            string: true,
            in: ['body'],
            error: Required.password,
        },
        createdBy: {
            required: true,
            string: true,
            error: Required.createdBy,
            in: ['body']
        }
    },
    put: {
        originalId: {
            required: true,
            string: true,
            in: ['body'],
            error: Required.id
        },
        name: {
            required: false,
            string: true,
            in: ['body'],
            error: Required.name,
        },
        updatedBy: {
            required: true,
            string: true,
            in: ['body'],
            error: Required.updatedBy
        },
        email: {
            required: false,
            string: true,
            in: ['body'],
            error: Required.email
        },
        password: {
            required: false,
            string: true,
            in: ['body'],
            error: Required.password
        },
        role: {
            required: false,
            string: true,
            in: ['body'],
            error: Required.role
        }
    },
    delete: {
        deletedBy: {
            required: true,
            string: true,
            in: ['body'],
            error: Required.deletedBy
        },
        originalId: {
            required: true,
            string: true,
            in: ['body'],
            error: Required.id
        }
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
        sortBy: {
            required: false,
            string: true,
            default: '_id',
            in: ['query'],
            error: Invalid.sortBy
        },
        sortorder: {
            required: false,
            default: -1,
            in: ['query'],
            error: Invalid.sortOrder
        },
        search: {
            required: false,
            string: true,
            in: ['query'],
            error: Invalid.sortBy
        }
    }
};

export default config;
