import UserRepository from '../repositories/user/UserRepository';

const userRepository: UserRepository = new UserRepository();
export default () => {
    userRepository.count()
        .then((res) => {
            if (res === 0 ) {
                console.log('Data seeding in progress');
                userRepository.create({
                    name: 'Head Trainer',
                    role: 'head-trainer',
                    email: 'headtrainer@successive.tech',
                    password: 'headtrainer123',
                    id: '123'
                });
                userRepository.create({
                    name: 'Trainer',
                    role: 'trainee',
                    email: 'trainer@successive.tech',
                    password: 'trainer456',
                    id: '456'
                });
            }
        })
        .catch((err) => console.log(err));
};