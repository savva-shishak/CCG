import { Goal, IGoal } from "../../entities/Goal";
import { Army } from "./Army";
import { Card } from "../../entities/Card";

export interface IComandPost extends IGoal {
    units: number
}

export class ComandPost extends Goal<IComandPost> {

    private _army: Army

    constructor(name: string, hp: number, damage: number) {
        super({name, hp, maxHp: hp, damage, shield: 0, units: 15})
    }

    public get army(): Army {
        return this._army
    }

    
    public set army(v : Army) {
        this._army = v;

        this._army.reserve.sub(cards => {
            this.value.units = cards.length;
            this.update();
        })
    }
    
    
}