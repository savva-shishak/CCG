import { IGoal, Goal } from "./Goal";

export class ComandPost extends Goal<IGoal> {
    constructor(name: string, hp: number, damage: number) {
        super({name, hp, damage})
    }
}