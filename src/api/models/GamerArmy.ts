import { Army } from "./Army";
import { gamer, activeCard } from "./index";
import { Terminator } from "./cards/Terminator";
import { T345 } from "./cards/T345";
import { LightInfantry } from "./cards/LightInfantry";
import { HeavyArmored } from "./cards/HeavyArmored";

export class GamerArmy extends Army {
    constructor() {
        super(gamer);
    }

    public init() {
        super.init();

        this._attack.sub(cards => {
            for (let i = 0; i < cards.length; i++) {
                const cardDiv = cards[i].getDiv();
        
                cardDiv.onclick = _ => {
                    activeCard.next(cards[i]);
                }
            }
        });
        
        this._reserve.sub(cards => {
            for (let i = 0; i < cards.length; i++) {
                const cardDiv = cards[i].getDiv();
        
                cardDiv.onclick = _ => {
                    activeCard.replaceOn(cards[i]);
                }
            }
        });
    }

    setArmyBase() {
        super.setArmyBase();

        for (let i = 0; i < 6; i++) {
            this._reserve.add(new LightInfantry())
        }

        for (let i = 0; i < 4; i++) {
            this._reserve.add(new T345())
        }

        for (let i = 0; i < 3; i++) {
            this._reserve.add(new Terminator())
        }

        for (let i = 0; i < 2; i++) {
            this._reserve.add(new HeavyArmored())
        }

        this._reserve.mix();
    }
}