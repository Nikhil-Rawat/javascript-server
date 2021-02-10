import IVersionalbleDocument from '../versionable/IVersionableDocument';

export default interface IUserModel extends IVersionalbleDocument {
    id: string;
    name: string;
    email: string;
    role: string;
    password: string;
}

export interface ICreate {
    id: string;
    name: string;
    email: string;
    role: string;
    password: string;
    originalId: string;
    createdAt: string;
}
