import express from 'express';
import { Controller } from '../controllers/controller';

export class Route {
    app: express.Application;
    resource: string;
    parentRoute: string;
    children: Array<Route>;
    fullRoute: string;
    
    constructor(app: express.Application, parentRoute: string, resource: string, children: Array<Route>) {
        this.app = app;
        this.resource = resource;
        this.parentRoute = parentRoute;
        this.children = children;
        this.fullRoute = `${parentRoute}${resource}`;
    }

    getName() {
        return this.resource;
    }
}