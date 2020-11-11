import IConfig from './IConfig';
import * as dotenv from 'dotenv';

const envparsed = dotenv.config().parsed;
const configuration: IConfig = {
    port: envparsed.PORT,
    node_env: envparsed.NODE_ENV,
    mongourl: envparsed.MONGO_URL,
    secretkey: envparsed.SECRETKEY
};
Object.freeze(configuration);
console.log(`config is ${configuration}`);
console.log(`config object is frozen: ${Object.isFrozen(configuration)}`);
export default configuration;
