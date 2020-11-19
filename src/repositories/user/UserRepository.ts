import * as mongoose from 'mongoose';
import { userModel } from './UserModel';
import IUserModel from './IUserModel';
import VersioningRepository from '../versionable/VersionableRepository';
import ICreate from './IUserModel';

export default class UserRepository extends VersioningRepository<IUserModel, mongoose.Model<IUserModel>> {
    constructor() {
        super(userModel);
    }
    public static generateObjectId() {
        return String(mongoose.Types.ObjectId());
    }
    public create(data: ICreate): Promise<IUserModel> {
        console.log('UserRepository:: create', data);
        const id = UserRepository.generateObjectId();
        const model = new userModel({
            _id: id,
            ...data,
        });
        return model.save();
    }
    public count() {
        return userModel.countDocuments();
    }
    public totalCount() {
        const finalQuery = {deletedAt: undefined};
        return userModel.countDocuments(finalQuery);
    }
}
