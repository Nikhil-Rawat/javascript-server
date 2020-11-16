import UserRepository from '../repositories/user/UserRepository';
import configuration from '../config/configuration';
import * as bcrypt from 'bcrypt';


const userRepository: UserRepository = new UserRepository();
export default () => {
    userRepository.count()
        .then((res) => {
            if (res === 0 ) {
                console.log('Data seeding in progress');
                bcrypt.hash(configuration.password, 10, (err: Error, hash: string) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        userRepository.createV({
                            id: '123',
                            name: 'Head Trainer',
                            role: 'head-trainer',
                            email: 'headtrainer@successive.tech',
                            password: hash,
                            createdBy: 'Admin',
                            createdAt: Date.now()
                        });
                        userRepository.createV({
                            id: '456',
                            name: 'Trainer',
                            role: 'trainee',
                            email: 'trainer@successive.tech',
                            password: hash,
                            createdBy: 'Admin',
                            createdAt: Date.now()
                        });

                    }
                });
            }
        })
        .catch((err) => console.log(err));
};