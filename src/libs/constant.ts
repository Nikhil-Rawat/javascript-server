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

export const ResponseMessage = {
    successStatus: 'Success',
    badRequest: 'bad request',
    fetched: 'trainees fetched successfully',
    created: 'trainees created successfully',
    updated: 'trainees updated successfully',
    deleted: 'trainees deleted successfully'
};

export const InsideMessage = {
    get: 'inside get method',
    post: 'inside post method',
    put: 'inside put method',
    delete: 'inside delete method'
};

export const errorMessage = {
    limit: 'Limit is invalid',
    skip: 'Skip is invalid',
    id: 'Id is required',
    name: 'Name is required'
};