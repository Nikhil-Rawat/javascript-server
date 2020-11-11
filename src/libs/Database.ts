import * as mongoose from 'mongoose';
import { DatabaseMongo } from './constant';
import { default as seedData } from './seedData';

class Database {
    // static open(mongoURL, callback) {
    //     console.log(mongoResponse.openMethod);
    //     mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    //         if (err) {
    //             console.log(err);
    //             callback(err);
    //             return;
    //         }
    //         callback(undefined);
    //     });
    // }
    public static open(mongourl: string) {
        return new Promise((resolve, reject) => {
            console.log(DatabaseMongo.openMethod);
            mongoose.connect(mongourl, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
                if (err) {
                    console.log(err);
                    reject(err);
                    return;
                }
                seedData();
                resolve(undefined);
            });
        });
    }
    static disconnect() {
        console.log(DatabaseMongo.disconnectMethod);
    }
}

export default Database;