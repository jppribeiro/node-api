import { CarDto } from '../dto/car.dto';
import { Dao } from './dao';
import { Car } from '../model/car.model';

export class CarDao extends Dao<Car> {
    car: CarDto;

    constructor(car: CarDto) {
        super();
        this.car = car;
    }
}
