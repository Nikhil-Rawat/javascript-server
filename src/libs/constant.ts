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


export const errorMessage = {
    limit: 'Limit is invalid',
    skip: 'Skip is invalid',
    id: 'Id is required',
    name: 'Name is required',
    occured: 'Error Occured',
    password: 'Invalid password',
    email: 'Wrong or invalid email',
    deltedBy: 'DeletedBy name is required',
    role: 'Role is required',
    sortBy: 'sortBy required',
    sortOrder: 'invalid Sort Order'
};

export const DatabaseMongo = {
    success: 'Successfully connected to mongo',
    openMethod: 'Processing Open method for mongoDB connection',
    disconnectMethod: 'Inside disconnect method'
};

export const responseController = {
    InsidegetAll: 'Inside getAll method',
    InsidefindOne: 'Inside findOne method',
    Insidefind: 'Inside find method',
    Insidedelete: 'inside delete method',
    createUser: 'Creating new User',
    userCreated: 'User created successfully',
    responseSuccess: 'Success',
    responseInvalidRequest: 'Invalid request',
    fetched: 'User fetched successfully',
    updated: 'User updated successfully',
    deleted: 'User deleted successfully',
    InvalidSorting: 'Invalid sorting argument',
    sortingUnavailable: 'Sorting is only avaible on name and email',
    Unauthorized: 'Unauthorized user',
    Unauthenticated: 'Unauthenticate Access',
    tokenCreated: 'Successfully created token',
    notFound: 'User not found'
};

export const route = {
    routeNotFound: 'Route not found'
};

export const dataSeeding = {
    seeding: 'Data seeding in progress',
    seeded: 'Data is seeded sucessfully'
};
