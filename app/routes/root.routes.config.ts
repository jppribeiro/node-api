import express from 'express';
import { RootController } from '../controllers/root.controller';
import { Route } from './route.config';
import { RouteConfig } from './route.interface';

export class RootRoute extends Route implements RouteConfig{
    protected _controller: RootController;

    constructor(app: express.Application, parentRoute: string, resource: string, children: Array<Route>) {
        super(app, parentRoute, resource, children);
        this._controller = new RootController();
        this.configureRoutes();
    }

    configureRoutes(): express.Application {
        this.app.route(this.fullRoute)
                .get((<RootController>this._controller).index);

        return this.app;
    }
}