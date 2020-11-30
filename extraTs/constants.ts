import { IUsers, IPermissions } from './interface';
export const permissions: IPermissions = {
    'getUsers':
    {
    all: ['head-trainer'],
    read : ['trainee', 'trainer'],
    write : ['trainer'],
    deleTe: []
    },
    'getProducts':
    {
    all: ['head-trainer'],
    read : ['trainee', 'trainer'],
    write : ['trainer'],
    deleTe: []
    }
};

export const user: IUsers = [
    {
        traineeEmail: 'nikhil.rawat@successive.tech',
        reviewerEmail: 'shalu$sharma@successive.tech',
    },
    {
        traineeEmail: 'aviral.swarankar@successive.tech',
        reviewerEmail: 'avinash.dhubey@yahoo.com'
    },
    {
        traineeEmail: 'akhil.sharma@gmail.com',
        reviewerEmail: 'shalu.sharma@successive.tech'
    }
    ];
