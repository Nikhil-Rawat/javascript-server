import {diamond,equilateral} from "./patterns";
import {hasPermission,validateUsers} from "./utils"
import {user} from "./constants"

diamond(5)

equilateral(5)

hasPermission('getUsers','trainee','read')

validateUsers(user)
