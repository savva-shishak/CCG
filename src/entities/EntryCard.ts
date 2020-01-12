import { Card } from "./Card";

export class EntryCard extends Card {
    public getDiv(): HTMLElement {
        const div = document.createElement('div');

        div.classList.add('card')
        div.classList.add('card_entry')

        const span = document.createElement('span')
        span.innerHTML = 'Пусто'

        div.appendChild(span);

        return div;
    }

    constructor() {
        super(null, null, null, null)
    }
}