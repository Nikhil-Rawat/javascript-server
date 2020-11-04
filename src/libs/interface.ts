interface IPermissions {
    getUsers: GetUsers;
    getProducts: GetProduct;
}
type GetUsers = {
    all: string[],
    read: string[],
    write: string[],
    deleTe: string[]
};

type GetProduct = {
    all: string[],
    read: string[],
    write: string[],
    deleTe: string[]
};
