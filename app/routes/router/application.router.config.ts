import express from 'express';
import { Car } from '../../domain/model/car.model';
import { AppRoutes } from '../app.routes';
import { CarRoutes } from '../car.routes.config';
import {Route} from '../route.config';
import { RootRoute } from '../root.routes.config';

export class ApplicationRouter {
    private app: express.Application;
    private root: Route;
    private appRoutes: AppRoutes;

    constructor(app: express.Application) {
        this.app = app;
        this.root = new RootRoute(app, '/', '', []);
        this.appRoutes = new AppRoutes(this.app);
    }

    configRoutes() {
        /*
        this.root.children = [
            new CarRoutes(this.app, '', '/cars', []),
        ];*/
        this.root = this.appRoutes.buildRouteTree();
        console.log(this.root);
    }

    routes(): Array<Route> {
        return this._routesToArray(this.root);
    }

    /*
      _routesToArray recursevly transverses the routes tree and builds a flat array of routes
    */
    private _routesToArray(route: Route): Array<Route> {
        if (route.children.length === 0) {
            return [route];
        };

        return route.children.reduce((acc: Array<Route>, c: Route) => {
            return acc.concat(this._routesToArray(c));
        }, []);
    }
}