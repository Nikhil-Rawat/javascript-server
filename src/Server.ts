import * as express from 'express';
import * as bodyparser from 'body-parser';
import { notFoundRoute, errorHandler } from './libs/routes';


console.log(bodyparser);

class Server  {
    app;
    constructor (private config) {
        this.app = express();
    }
    bootstrap() {
        this.setupRoutes();
        this.initBodyParser();
        return this;
    }
    setupRoutes() {
        this.app.use('/health-check', (req, res, next) => {
            res.send('I am OK');
        });
        this.app.use(notFoundRoute);
        this.app.use(errorHandler);
    }
    public initBodyParser() {
        this.app.use(bodyparser.json({ type: 'application/*+json' }));
    }
    run() {
        const { app, config: { port } } = this;
        app.listen(port, (err) => {
            if (err) {
                console.log(err);
            }
            console.log(`app is running on port ${port}`);
        });
    }
    }


export default Server;
