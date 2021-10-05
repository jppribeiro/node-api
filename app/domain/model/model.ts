import { v4 } from 'uuid';

export class Model {
    private uuid: string;

    constructor() {
        this.uuid = v4();
    }

    getUuid(): string {
        return this.uuid;
    }
}