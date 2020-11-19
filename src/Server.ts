import * as express from 'express';
import * as bodyParser from 'body-parser';
import { errorHandler, notFoundRoute } from './libs/routes';
import routes from './router';
import Database from './libs/Database';
import { DatabaseMongo } from './libs/constant';
import { mongo } from 'mongoose';
import IConfig from './config/IConfig';
import { Response, Request, NextFunction } from 'express';

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

        app.use('/health-check', (req: Request, res: Response) => {
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
        const { app, configuration: { port, mongourl } } = this;
        Database.open(mongourl)
            .then((res) => {
                console.log(DatabaseMongo.success);
                app.listen(port, err => {
                    if (err) {
                        console.log(`Error: app failed  ${err}`);
                    }
                    console.log(`app is running on port ${port}`);
                });
            })
            .catch(err => console.log(err));
        return this;
    }
}
export default Server;
