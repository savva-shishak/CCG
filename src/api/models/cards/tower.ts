import { Card } from "../../../entities/Card";

export class Tower extends Card {
    constructor() {
        super("Башня", 120, 3, "assets/сторожевая башня.jpg", 55);
    }
}