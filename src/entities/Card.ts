import { Goal, IGoal } from "./Goal";
import { createCardProps, newDiv } from "../utility/functions";

export interface ICard extends IGoal {
    imageUrl: string;
}

export class Card extends Goal<ICard> {
    private div: HTMLElement;

    public getDiv(): HTMLElement {
        return this.div;
    }

    constructor(name: string, hp: number, damage: number, imageUrl: string, shield: number = 0) {
        super({name,hp, maxHp: hp, damage, imageUrl, shield})

        this.div = this.createCardHTML()
    }

    private createCardHTML(): HTMLElement {
        const {hp, damage, shield} = createCardProps();

        const card = newDiv(['card', 'card'], [
            newDiv(['card__properties'], [hp, shield, damage])
        ])

        damage.innerHTML = this.value.damage + " <i class=\"fas fa-fire-alt\"></i>";
        shield.innerHTML = (this.value.shield || 0) + " <i class=\"fas fa-shield-alt\"></i>";

        this.sub(v => {
            hp.innerHTML = v.hp + " <i class=\"fas fa-heart\"></i>"
            card.style.opacity = .1 + ((v.hp / v.maxHp)*.9) + "";
        })

        card.style.backgroundImage = `url("${this.value.imageUrl}")`;

        return card;
    }

    public get isDead(): boolean {
        return this.value.hp != 0;
    }
}