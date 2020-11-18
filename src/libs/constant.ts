export const permissions = {
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
    Occured: 'Error Occured',
    email: 'Email is invalid',
    deltedBy: 'DeletedBy name is required',
    role: 'Role is required',
    sortBy: 'sortBy required'
};

export const DatabaseMongo = {
    success: 'Successfully connected to mongo',
    openMethod: 'Inside open method',
    disconnectMethod: 'Inside disconnect method'
};

export const ControllerResponse = {
    Insideget: 'inside get method',
    InsidegetAll: 'Inside getAll method',
    InsidefindOne: 'Inside findOne method',
    Insidefind: 'Inside find method',
    Insidepost: 'inside post method',
    Insideput: 'inside put method',
    Insidedelete: 'inside delete method',
    insideCreateUser: 'Inside createUser',
    ResponseSuccess: 'Success',
    ResponseBadRequest: 'bad request',
    fetched: 'trainees fetched successfully',
    created: 'trainees created successfully',
    updated: 'trainees updated successfully',
    deleted: 'trainees deleted successfully',
    createUser: 'User created successfully',
    updateUser: 'trainee updated successfully',
    InvalidSorting: 'Invalid sorting argument',
    SortingUnavailable: 'Sorting is only avaible on name and email'
};