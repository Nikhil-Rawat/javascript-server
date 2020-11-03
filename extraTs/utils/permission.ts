import { permissions } from '../constants';

export default function hasPermission(moduleName: string, role: string, permissionType: string): void {
    permissions[moduleName].read.push(permissions[moduleName].all[0]);
    permissions[moduleName].write.push(permissions[moduleName].all[0]);
    permissions[moduleName].deleTe.push(permissions[moduleName].all[0]);
    if (permissions[moduleName][permissionType].includes(role)) {
        console.log(`${role} has the ${permissionType} permission for ${moduleName}`);
    }
    else{
        console.log(`${} does not have ${permissionType} permission for ${moduleName}`);
    }
}

