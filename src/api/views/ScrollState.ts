import { Demand } from "../../entities/Demand";
import { scrollToReserve, scrollToButtle, delay } from "../../utility/animations";

export class ScrollState {
    private demands: Demand[] = [];

    public add (demand: Demand) {
        demand.sub(async v => {
            if (this.checkAll()) {
                await delay(200);
                await scrollToReserve();
            } else {
                await delay(200);
                await scrollToButtle();
            }
        });

        this.demands.push(demand);
    }

    createDemand(startValue: boolean = false): Demand {
        const newDemand = new Demand(startValue);

        this.add(newDemand);

        return newDemand;
    }

    private checkAll(): boolean {
        for (let i = 0; i < this.demands.length; i++) {
            if(this.demands[i].actual) {
                return true;
            }
        }

        return false;
    }
}

export const scrollManager = new ScrollState();