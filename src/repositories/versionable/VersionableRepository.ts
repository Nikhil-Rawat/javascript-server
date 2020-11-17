import * as mongoose from 'mongoose';
import { DocumentQuery, Query } from 'mongoose';
import IUserModel from '../user/IUserModel';
import * as bcrypt from 'bcrypt';

export default class VersioningRepository<D extends mongoose.Document, M extends mongoose.Model<D>> {
    public static generateObjectId() {
        return String(mongoose.Types.ObjectId());
    }
    private model: M;
    constructor(model) {
        this.model = model;
    }

    public async createV(data: any): Promise<D> {
        // const password = bcrypt.hash(data.password, 10);
        const id = VersioningRepository.generateObjectId();
        const model = new this.model( {
            ...data,
            _id: id,
            originalId: id
        });
        return await model.save();
    }
    public count(query): Query<number> {
        const finalQuery = { deletedAt: undefined, ...query };
        return this.model.countDocuments(finalQuery);
    }
    public getAll(query: any, projection: any = {}, options: any = {sort: {name : 1 }}): DocumentQuery<D[], D> {
        const finalQuery = {deletedAt: undefined, ...query};
        return this.model.find(finalQuery, projection, options);
    }
    public findOne(query: any, options: any = {}): DocumentQuery<D, D> {
        const finalQuery = {deletedAt: undefined, ...query};
        return this.model.findOne(finalQuery, options);
    }
    public find(query: any = {}, projection: any = {}, options: any = {}): DocumentQuery<D[], D> {
        const finalQuery = {deletedAt: undefined, ...query};
        return this.model.find(finalQuery, projection, options);
    }

    public invalidate(id: string, name: string): any {
        const query: any = { originalId: id, deletedAt: {$exists: false}, deletedBy: {$exists: false} };
        const data: any =  { deletedAt: Date.now(), deletedBy: name };
        return this.model.update(query, data);
    }
    public async delete(id: string, name: string): Promise<D> {
        const prevoius = await this.findOne({ originalId: id, deletedAt: undefined });
        console.log(prevoius);
        if (prevoius) {
            return await this.invalidate(id, name);
        }
    }
    public invalidateUpdate(id: string, updatedByname: string): any {
        const query: any = {
            originalId: id,
            deletedAt: {$exists: false},
            deletedBy: {$exists: false},
            updatedBy: {$exists: false},
            updatedAt: {$exists: false}
        };
        const data: any =  {
            deletedAt: Date.now(),
            deletedBy: updatedByname,
            updatedBy: updatedByname,
            updatedAt: Date.now()
        };
        return this.model.update(query, data);
    }

    public async userUpdate(data: any): Promise<D> {
        const previous = await this.findOne({
            originalId: data.originalId,
            deletedAt: {$exists: false},
            updatedBy: {$exists: false},
            updatedAt: {$exists: false}
        });

        console.log('previous: ', previous);
        if (previous) {
            await this.invalidateUpdate(data.originalId, data.updatedBy);
        }
        else {
            return undefined;
        }

        const newData = Object.assign(JSON.parse(JSON.stringify(previous)), data);
        newData._id = VersioningRepository.generateObjectId();
        delete newData.deletedAt;
        newData.updatedAt = Date.now();
        const model = new this.model(newData);
        return await model.save();
    }
}
