import { Subject } from "./Subject";
import { Card } from "./Card";

export class Attaking extends Subject<Card[]> {
    public add(...cards: Card[]) {
        this.value.push(...cards);
        this.update();
    }

    public remove(card: Card) {
        this.next(this.value.filter(c => {
            return c != card;
        }))
    }
}