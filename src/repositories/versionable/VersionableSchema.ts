import * as mongoose from 'mongoose';

export default class VersionableSchema extends mongoose.Schema {
    constructor(options: any, collections: any) {
        const versionedOption = Object.assign( {
            createdAt: {
                default: Date.now,
                type: Date
            },
            deletedAt: {
                required: false,
                type: Date
            },
            updatedAt: {
                requied: false,
                type: Date
            },
            createdBy: {
                required: false,
                type: String
            },
            deletedBy: {
                required: false,
                type: String
            },
            updatedBy: {
                required: false,
                type: String
            },
            originalId: {
                required: true,
                type: String
            }
        }, options);
        super(versionedOption, collections);
    }
}
