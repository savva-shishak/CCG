import { Subject } from "./Subject";

export interface IGoal {
    name: string;
    hp: number;
    maxHp: number;
    damage: number;
    shield?: number;
}

export class Goal<T extends IGoal> extends Subject<T> {

    public takeDamage(damage: number) {
        let {hp, shield} = this.value;

        if (hp == 0) {
            return;
        }

        damage -= (damage * (shield/100));

        hp -= damage;

        if (hp < 0) {
            hp = 0;
        }

        this.value.hp = Math.floor(hp);

        this.update()
    }

    public toDamage(goal: Goal<IGoal>) {
        goal.takeDamage(this.value.damage);
    }

    public get state(): string {
        return this.value.hp == 0? "Мёртв": ""
    }
}