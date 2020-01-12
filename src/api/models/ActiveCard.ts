import { Subject } from "../../entities/Subject";
import { Card } from "../../entities/Card";
import { Deck } from "../../entities/Deck";

export class ActiveCard extends Subject<Card> {
    private oldCard: Card;

    constructor(private _attacking: Deck, private _reserve: Deck) {
        super(null);

        this.sub(card => {
            if (card) {
                card.getDiv().classList.add("card_active");
            }

            if (this.oldCard) {
                this.oldCard.getDiv().classList.remove("card_active");
            }

            if (card == this.oldCard && card) {
                this.next(null);
            } else {
                this.oldCard = card;
            }
        });
    }

    replaceOn(card: Card) {
        if (!this.value) {
            this._reserve.remove(card);
            this._attacking.add(card);
            return;
        }

        this._attacking.nextFn(cards => {
            for (let i = 0; i < cards.length; i++) {
                if (cards[i] == this.value) {
                    cards[i] = card;
                    return cards;
                }
            }
            return cards;
        });

        this._reserve.nextFn(cards => {
            for (let i = 0; i < cards.length; i++) {
                if (cards[i] == card) {
                    cards[i] = this.value;
                    return cards;
                }
            }
            return cards;
        });

        this.next(null);
    }
}