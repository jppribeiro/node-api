import { CarRoutes } from "./car.routes.config";
import { Route } from "./route.config";
import { RootRoute } from "./root.routes.config";
import express from 'express';

export class AppRoutes {
    app: express.Application;

    constructor(app: express.Application) {
        this.app = app;
    }

    /*
        the *routes* object is where we define the route tree of the entire application.

        It builds a routing hyerarchy based on a logical nesting of resources.

        A route node is defined by a key that identifies the resource of the route, and an object value with:

            * klass: Klass          -> a reference to the Route class of the resource to enable dynamic class construction
            * routes?: {...}        -> an optional nested route node to build inner routes under
                                       the parent resource collection
            * entityRoutes?: {...}  -> an optional nested route node to build inner routes under a parent
                                       resource entity. Must have param property.
            * param?: string        -> a conditional identifier to build the entityRoutes.
    */
    private _routes = {
        '/': {
            klass: RootRoute,
            routes: {
                cars: {
                    klass: CarRoutes,
                    routes: {},
                    entityRoutes: {}
                }
            },
            entityRoutes: {
            },
            param: ''
        }
    }

    buildRouteTree(node: any = this._routes['/'], resource: string = '', parent: string = ''): Route {
        let children = Object.keys(node.routes).map((c) => {
            return this.buildRouteTree(node.routes[c], c, `${parent}/${resource}`);
        });

        children = children.concat(Object.keys(node.entityRoutes).map((e) => {
            return this.buildRouteTree(node.entityRoutes[e], e, `${parent}/${node.param}/${resource}`);
        }));

        return new (node.klass)(this.app, parent, resource, children);
    }
}