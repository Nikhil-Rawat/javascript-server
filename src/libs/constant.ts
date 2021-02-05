export const permissions: IPermissions = {
    'getUsers':
    {
    all: ['head-trainer'],
    read : ['trainee', 'trainer'],
    write : ['trainer'],
    deleTe: ['head-trainer']
    },
    'getProducts':
    {
    all: ['head-trainer'],
    read : ['trainee', 'trainer'],
    write : ['trainer'],
    deleTe: ['head-tainer']
    }
};


export const DatabaseMongo = {
    success: 'Successfully connected to mongo',
    openMethod: 'Processing Open method for mongoDB connection',
    disconnectMethod: 'Inside disconnect method',
    maintainceBreak: 'Database Under Maintaince'
};

export const message = {
    badRequest: 'Bad Request',
    ok: 'OK',
    failed: 'Request Failed',
};

export const Auth = {
    Unauthorized: 'Unauthorized Access',
    Unauthenticated: 'Unauthenticated Access'
};

export const route = {
    notFound: 'Route not found'
};

export const dataSeeding = {
    seeding: 'Data seeding in progress',
    seeded: 'Data is seeded sucessfully'
};

export const Invalid = {
    limit: 'Invalid limit',
    skip: 'Invalid skip',
    password: 'Invalid password',
    email: 'Invalid email',
    sortOrder: 'Invalid sortOrder',
    input: 'Invalid input',
    id: 'Invalid Id',
    sortBy: 'Invalid Sorting argument',
    token: 'Invalid Token'
};

export const Required = {
    id: 'Required id',
    name: 'Required name',
    role: 'Required role',
    sortBy: 'Required sortBy',
    email: 'Required email',
    password: 'Required password',
    createdBy: 'Required createdBy',
    deletedBy: 'Required deletedBy',
    updatedBy: 'Required updatedBy'
};

export const InsideRoute = {
    GET_ALL: 'Inside getall route',
    CREATE: 'Inside create route',
    DELETE: 'Inside delete route',
    UPDATE: 'Inside update route',
    LOGIN: 'Inside login route',
    ME: 'Inside me route'
};

export const successResponse = {
    FETCHED: 'Successfully Fetched Trainees',
    UPDATED: 'Trainee Updated Successfully',
    DELETED: 'Trainee Deleted Successfully',
    CREATED: 'Trainee Created Successfully',
    LOGIN: 'Login Successfull',
    USER_DETAILS: 'User details'
};

