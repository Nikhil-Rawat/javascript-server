import UserRepository from '../repositories/user/UserRepository';
import configuration from '../config/configuration';
import * as bcrypt from 'bcrypt';
import { dataSeeding } from './constant';


const userRepository: UserRepository = new UserRepository();
export default () => {
    userRepository.count()
        .then((res) => {
            if (res === 0 ) {
                console.log(dataSeeding.seeding);
                bcrypt.hash(configuration.password, 10, (err: Error, hash: string) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        userRepository.createV({
                            name: 'Head Trainer',
                            role: 'head-trainer',
                            email: 'headtrainer@successive.tech',
                            password: hash,
                            createdBy: 'Admin'
                        });
                        userRepository.createV({
                            name: 'Trainer',
                            role: 'trainer',
                            email: 'trainer@successive.tech',
                            password: hash,
                            createdBy: 'Admin'
                        });
                        userRepository.createV({
                            name: 'Nikhil',
                            role: 'head-trainer',
                            email: 'nikhil.rawat@successive.tech',
                            password: hash,
                            createdBy: 'Admin'
                        });

                    }
                    console.log(dataSeeding.seeded);
                });
            }
        })
        .catch((err) => console.log(err));
};