// import { config } from 'dotenv';

// const configuration: IConfig = {
//     port: process.env.port,
//     node_env: process.env.node_env,
//     MONGO_URL: process.env.MONGO_URL,
//     secretkey: process.env.secretkey
// };

import IConfig from './IConfig';
// tslint:disable-next-line: no-var-requires
const envVar = require('dotenv').config();
const configuration: IConfig = envVar.parsed;
Object.freeze(configuration);
console.log(`config is ${configuration}`);
console.log(`config object is frozen: ${Object.isFrozen(configuration)}`);
export default configuration;
