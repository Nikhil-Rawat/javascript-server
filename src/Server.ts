import * as express from 'express';
import * as bodyParser from 'body-parser';
import { errorHandler, notFoundRoute } from './libs/routes';
import routes from './router';
import Database from './libs/Database';
import { mongoResponse } from './libs/constant';
import { mongo } from 'mongoose';
import IConfig from './config/IConfig';

class Server {
    private app: any;
    constructor(private configuration: IConfig) {
        this.app = express();
    }

    public bootstrap() {
        this.initBodyParser();
        this.setupRoutes();
        return this.app;
    }

    public setupRoutes() {
        const { app } = this;

        app.use('/health-check', (req, res) => {
            res.send('I am ok');
        });
        app.use('/api', routes);

        app.use(notFoundRoute);

        app.use(errorHandler);

    }

    public initBodyParser() {
        const { app } = this;
        app.use(bodyParser.json());
    }

    run() {
        const { app, configuration: { PORT, MONGO_URL } } = this;
        // Database.open(MONGO_URL, (err) => {
        //     if (err) {
        //         console.log(err);
        //         return;
        //     }
        //     app.listen(port, err => {
        //         if (err) {
        //             console.log(`Error: app failed  ${err}`);
        //         }
        //         console.log(`app is running on port ${port}`);
        //     });
        //     console.log(mongoResponse.success);
        // });
        Database.open(MONGO_URL)
            .then((res) => {
                console.log(mongoResponse.success);
                app.listen(PORT, err => {
                    if (err) {
                        console.log(`Error: app failed  ${err}`);
                    }
                    console.log(`app is running on port ${PORT}`);
                });
            })
            .catch(err => console.log(err));
        return this;
    }
}
export default Server;
