import { CarDto } from "../domain/dto/car.dto";
import { CarService } from "../services/car.service";
import express from 'express';
import { Car } from "../domain/model/car.model";
import { Controller } from "./controller";
import { CarConverter } from "../domain/dto/converters/car.converter";

export class CarController extends Controller {
    private _carService: CarService;
    private _converter: CarConverter;

    protected cars: Array<Car>;

    constructor() {
        super();
        this._carService = new CarService();
        this._converter = new CarConverter();
        this.cars = [
            new Car('BMW', 'Series3', 2019, 'black', 300, new Date()),
            new Car('Toyota', 'Yaris', 2016, 'white', 120, new Date())
        ];
    }

    index(_: express.Request, res: express.Response) {
        res.status(200).send(this.cars)
    }

    create(req: express.Request, res: express.Response) {
        const dto: CarDto = req.body;

        const car = this._converter.toDomain(dto);

        this.cars.push(car);

        res.status(201).send(res.json(this._converter.toDto(car)));
    }
}