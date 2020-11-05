import * as mongoose from 'mongoose';
import { mongoResponse } from './constant';

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
    static open(mongoURL) {
        return new Promise((resolve, reject) => {
            console.log(mongoResponse.openMethod);
            mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
                if (err) {
                    console.log(err);
                    reject(err);
                    return;
                }
                resolve(undefined);
            });
        });
    }
    static disconnect() {
        console.log(mongoResponse.disconnectMethod);
    }
}

export default Database;