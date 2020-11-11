import * as mongoose  from 'mongoose';

export default interface IVersionalbleDocument extends mongoose.Document {
    createdAt: Date;
    deletedAt: Date;
    originalId: string;
    updatedAt: string;
    deletedBy: string;
    createdBy: string;
    updatedBy: string;
}
