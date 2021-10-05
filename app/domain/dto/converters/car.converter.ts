import { Car } from "../../model/car.model";
import { CarDto } from "../car.dto";
import { Converter } from "./converter";

export class CarConverter implements Converter<Car, CarDto> {
    toDomain(dto: CarDto): Car {
        return new Car(
            dto.maker,
            dto.model,
            dto.year,
            dto.color,
            dto.price,
            new Date(dto.availability)
        );
    }

    toDto(car: Car): CarDto {
        const dto: CarDto = {
            maker: car.getMaker(),
            model: car.getModel(),
            year: car.getYear(),
            color: car.getColor(),
            price: car.getPrice(),
            availability: car.getAvailability().toString(),
            uuid: car.getUuid(),
        }

        return dto;
    }
}