import * as dotenv from 'dotenv';

const envVars = dotenv.config();
const config: IConfig = envVars.parsed;
Object.freeze(config);
export default config;
