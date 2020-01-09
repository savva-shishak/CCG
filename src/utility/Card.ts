import { Goal, IGoal } from "./Goal";
import { createCardProps, newDiv } from "./functions";

export interface ICard extends IGoal {
    imageUrl: string;
}

export class Card extends Goal<ICard> {
    private div: HTMLElement;

    public getDiv(): HTMLElement {
        return this.div;
    }

    constructor(name: string, hp: number, damage: number, imageUrl: string) {
        super({
            name,
            hp, damage, imageUrl
        })

        this.div = this.createCardHTML()
    }

    private createCardHTML(): HTMLElement {
        const {hp, damage} = createCardProps();

        damage.innerHTML = this.value.damage + "";
        this.sub(v => {
            hp.innerText = v.hp + "/100"
        })

        const card = newDiv(['card', 'card'], [
            newDiv(['card__properties'], [hp, damage])
        ])

        card.style.backgroundImage = this.value.imageUrl;

        return card;
    }
}