import {permissions} from "../constants"

export default function hasPermission(moduleName,role,permissionType){
    console.log("Is",role,"has the permission for",permissionType,"in",moduleName,"module.?")
    permissions[moduleName].read.push(permissions[moduleName].all[0])
    permissions[moduleName].write.push(permissions[moduleName].all[0])
    permissions[moduleName].deleTe.push(permissions[moduleName].all[0])
    console.log(permissions[moduleName][permissionType].includes(role))
}

