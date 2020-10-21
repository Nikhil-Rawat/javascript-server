let permissions = {
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
}
function hasPermission(moduleName,role,permissionType){
    permissions[moduleName].read.push(permissions[moduleName].all[0])
    permissions[moduleName].write.push(permissions[moduleName].all[0])
    permissions[moduleName].deleTe.push(permissions[moduleName].all[0])
    console.log(permissions[moduleName][permissionType].includes(role))
}

hasPermission('getProducts','trainee','deleTe')
