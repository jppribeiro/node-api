import { Model } from "./model";

export class Car extends Model {

    private maker: string;
    private model: string;
    private year: number;
    private color: string;
    private price: number;
    private availability: Date;

    constructor(
        maker: string,
        model: string,
        year: number,
        color: string,
        price: number,
        availability: Date
    ) {
        super();
        this.maker = maker;
        this.model = model;
        this.year = year;
        this.color = color;
        this.price = price;
        this.availability = availability;
    }

    public getMaker(): string {
        return this.maker;
    }

    public setMaker(maker: string): void {
        this.maker = maker;
    }

    public getModel(): string {
        return this.model;
    }

    public setModel(model: string): void {
        this.model = model;
    }

    public getYear(): number {
        return this.year;
    }

    public setYear(year: number): void {
        this.year = year;
    }

    public getColor(): string {
        return this.color;
    }

    public setColor(color: string): void {
        this.color = color;
    }

    public getPrice(): number {
        return this.price;
    }

    public setPrice(price: number): void {
        this.price = price;
    }

    public getAvailability(): Date {
        return this.availability;
    }

    public setAvailability(availability: Date): void {
        this.availability = availability;
    }
}