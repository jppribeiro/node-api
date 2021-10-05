import exp from 'express';
import { CarController } from '../controllers/car.controller';
import { Route } from './route.config';
import { RouteConfig } from './route.interface';

export class CarRoutes extends Route implements RouteConfig{
    protected _controller: CarController;

    constructor(app: exp.Application, parentRoute: string, resource: string, children: Array<Route>) {
        super(app, parentRoute, resource, children);
        this._controller = new CarController();
        this.configureRoutes();
    }

    configureRoutes(): exp.Application {
        this.app.route(`${this.parentRoute}${this.resource}`)
            .get((req: exp.Request, res: exp.Response) => {
                (<CarController>this._controller).index(req, res)
            })
            .post((req: exp.Request, res: exp.Response) => {
                (<CarController>this._controller).create(req, res);
            });

        this.app.route(`${this.parentRoute}${this.resource}/:carId`)
            .get((req: exp.Request, res: exp.Response) => {
                res.status(200).send(`GET req for id ${req.params.carId} and ${req.params.rootId}`);
            })
            .put((req: exp.Request, res: exp.Response) => {
                res.status(200).send()
            });
            
        return this.app;
    }
}