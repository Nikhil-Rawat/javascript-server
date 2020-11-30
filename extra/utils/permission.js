import {permissions} from "../constants"
export default function hasPermission(moduleName,role,permissionType){
    permissions[moduleName].read.push(permissions[moduleName].all[0])
    permissions[moduleName].write.push(permissions[moduleName].all[0])
    permissions[moduleName].deleTe.push(permissions[moduleName].all[0])
    if(permissions[moduleName][permissionType].includes(role)){
        console.log(`${role} holds the ${permissionType} authority for ${moduleName}.`)
    }
    else{
        console.log(`${role} does not hold ${permissionType} authority for ${moduleName}.`)
    }
}

