import { Subject } from "./Subject";
import { Card } from "./Card";

export class Deck extends Subject<Card[]> {
    public add(...cards: Card[]) {
        this.value.push(...cards);
        this.update();
    }

    public remove(card: Card) {
        this.next(this.value.filter(c => {
            return c != card;
        }));
    }

    public get randomCard() {
        const randomCard = this.value[this.randomIndex];
        this.remove(randomCard);
        return randomCard;
    }

    public get shift(): Card {
        const card = this.value.shift();
        this.update();
        return card;
    }

    public mix() {
        for (let i = 0; i < this.value.length; i++) {
            const randomIndex = this.randomIndex;

            [this.value[i], this.value[randomIndex]] = [this.value[randomIndex], this.value[i]];
        }

        this.update();
    }

    public get randomIndex() {
        return Math.floor(Math.random() * (this.value.length - 1));
    }

    public filter() {
        this.nextFn(cards => {
            return cards.filter(card => card.isDead);
        })
    }
}