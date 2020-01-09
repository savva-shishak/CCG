import { Subject } from "./Subject";

export interface IGoal {
    name: string;
    hp: number;
    damage: number;
}

export class Goal<T extends IGoal> extends Subject<T> {
    public hint(damage: number) {
        if (this.value.hp == 0) {
            return;
        }

        this.value.hp -= damage

        if (this.value.hp <= 0) {
            this.value.hp = 0;
        }

        this.update()
    }

    public get state(): string {
        return this.value.hp == 0? "Мёртв": ""
    }
}