import Server from './Server';
import { config } from './config';

const server = new Server({port: 9000});

server.bootstrap().run();
