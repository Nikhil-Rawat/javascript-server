import { permissions } from './constant';

export default function hasPermission(moduleName: string, role: string, permissionType: string) {
    permissions[moduleName].read.push(permissions[moduleName].all[0]);
    permissions[moduleName].write.push(permissions[moduleName].all[0]);
    permissions[moduleName].deleTe.push(permissions[moduleName].all[0]);
    return (permissions[moduleName][permissionType].includes(role));
}
