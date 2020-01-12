import { gamer, activeCard } from "../models/index";
import { delay } from "../../utility/animations";
import { scrollManager } from "./ScrollState";

document.body.onload = async () => {
    await delay(3000);

    const demandIfEntryAttacks = scrollManager.createDemand()

    gamer.army.attack.sub(async cards => {
        if (cards.length < 3 && gamer.army.reserve.actual.length != 0) {
            demandIfEntryAttacks.next(true);
        } else {
            demandIfEntryAttacks.next(false);
        }
    });

    const demandIfActiveCard = scrollManager.createDemand();

    activeCard.sub(async card => {
        if (card && gamer.army.reserve.actual.length != 0) {
            demandIfActiveCard.next(true);
        } else {
            demandIfActiveCard.next(false);
        }
    });
}