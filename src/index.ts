import config from './config/configuration';
import Server from './Server';
import * as bcrypt from 'bcrypt';

const server = new Server( config );
// bcrypt.hash('nikhil0211', 10, (err, hash) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         const password = hash;
//         console.log(password);
//     }
// });

server.bootstrap();
server.run();