import express from 'express';
import * as http from 'http';

import * as winston from 'winston';
import * as expWinston from 'express-winston';
import cors from 'cors';

import {Route} from './app/routes/route.config';
import { ApplicationRouter } from './app/routes/router/application.router.config';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = 3000;
const router: ApplicationRouter = new ApplicationRouter(app);

app.use(express.json());
app.use(cors());

const loggerOptions: expWinston.LoggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.colorize({all: true})
    )
};

if (!process.env.DEBUG) {
    loggerOptions.meta = false;
}

app.use(expWinston.logger(loggerOptions));

const runningMessage = `Server running at http://localhost:${port}`;

router.configRoutes();

server.listen(port, () => {
    router.routes().forEach((route: Route) => {
        console.log(`Routes configured for ${route.fullRoute}`);
    });

    console.log(runningMessage);
})