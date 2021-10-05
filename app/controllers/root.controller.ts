import { Controller } from "./controller";
import express from 'express';

export class RootController implements Controller {
    constructor() {
    }
    
    public index(_: express.Request, res: express.Response) {
        res.status(200).send('Hello World!');
    }
}