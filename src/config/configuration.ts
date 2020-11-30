import IConfig from './IConfig';
import * as dotenv from 'dotenv';

const envparsed = dotenv.config().parsed;
const configuration: IConfig = {
    port: envparsed.PORT,
    node_env: envparsed.NODE_ENV,
    mongourl: envparsed.MONGO_URL,
    secretkey: envparsed.SECRETKEY,
    password: envparsed.PASSWORD
};
Object.freeze(configuration);
console.log(`Configuration is locked`);
export default configuration;
