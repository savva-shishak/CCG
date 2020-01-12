import { activeCard } from "../models/index";

let currentActiveCard: HTMLElement = null;

activeCard.sub(card => {
    if(!card) {
        return;
    }

    if (card.getDiv() != currentActiveCard) {
        currentActiveCard = card.getDiv();
        currentActiveCard.classList.add("card_active");
    } else {
        currentActiveCard.classList.remove("card_active");
        currentActiveCard = null;
        activeCard.next(null)
    }
});