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
    disconnectMethod: 'Inside disconnect method'
};

export const message = {
    badRequest: 'Bad Request',
    ok: 'OK',
    failed: 'Request Failed'
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

export const Inside = {
    getall: 'Inside getall route',
    create: 'Inside create route',
    delete: 'Inside delete route',
    update: 'Inside update route',
    login: 'Inside login route',
    me: 'Inside me route'
};

export const success = {
    fetched: 'Successfully Fetched Trainees',
    updated: 'Trainee Updated Successfully',
    deleted: 'Trainee Deleted Successfully',
    created: 'Trainee Created Successfully'
};

