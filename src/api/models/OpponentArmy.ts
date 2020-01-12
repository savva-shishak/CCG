import { Army } from "./Army";
import { opponent } from "./index";
import { LightInfantry } from "./cards/LightInfantry";
import { ArmoredVehicles } from "./cards/ArmoredVehicles";
import { Poisoner } from "./cards/Poisoner";
import { Tower } from "./cards/tower";
import { HeavyInfantry } from "./cards/HeavyInfantry";

export class OpponentArmy extends Army {
    constructor() {
        super(opponent);
    }

    setArmyBase() {
        super.setArmyBase();

        for (let i = 0; i < 6; i++) {
            this._reserve.add(new HeavyInfantry())
        }

        for (let i = 0; i < 4; i++) {
            this._reserve.add(new Poisoner())
        }

        for (let i = 0; i < 3; i++) {
            this._reserve.add(new ArmoredVehicles())
        }

        for (let i = 0; i < 2; i++) {
            this._reserve.add(new Tower())
        }

        this._reserve.mix();
    }

    update() {
        super.update();

        for (let i = this._attack.actual.length; i < 3; i++) {


            if (!this._attack.actual[i]){
                const cardFromReserve = this._reserve.actual.pop();

                if (cardFromReserve) {
                    this._attack.add(cardFromReserve);
                    this._reserve.remove(cardFromReserve);
                }
            }
        }
    }
}