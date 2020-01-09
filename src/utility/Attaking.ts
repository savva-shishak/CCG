import { Subject } from "./Subject";
import { Card } from "./Card";

export class Attaking extends Subject<Card[]> {
    public add(card: Card) {
        this.value.unshift(card)
        this.update();
    }

    public remove(card: Card) {
        this.next(this.value.filter(c => {
            return c != card;
        }))
    }
}