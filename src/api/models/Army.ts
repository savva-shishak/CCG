import { Deck } from "../../entities/Deck";
import { ComandPost } from "./ComandPost";
import { IGoal, Goal } from "../../entities/Goal";
import { Card } from "../../entities/Card";
import { LightInfantry } from "./cards/LightInfantry";

export class Army {
    protected _attack: Deck;
    protected _reserve: Deck;

    constructor(protected gamer: ComandPost) {
        this._attack = new Deck([]);
        this._reserve = new Deck([]);
        gamer.army = this;
    }

    public getAttacking(): Goal<IGoal>[] {
        const attackObjs: Goal<IGoal>[] = this._attack.actual.slice();

        for (let i = attackObjs.length; i < 3; i++) {
            attackObjs.push(this.gamer);
        }

        return attackObjs;
    }

    public init() {
        this._attack.sub(this.maxAttackCards);
        this.setArmyBase();
        this.update();
    }

    protected setArmyBase() {
        this._attack.next([]);
        this._reserve.next([]);
    }

    protected maxAttackCards = (cards: Card[]) => {
        if (cards.length > 3) {
            this._reserve.add(this._attack.shift);
        }
    }

    public update() {
        this._attack.filter();
    }

    public toggleClassCards(className: string) {
        this._attack.actual.forEach(card => {
            card.getDiv().classList.toggle(className);
        });
    }

    protected filterOnDeadCards(card: Card): boolean {
        return card.actual.hp != 0;
    }
    
    public get attack() : Deck {
        return this._attack;
    }
    
    public get reserve() : Deck {
        return this._reserve;
    }
}