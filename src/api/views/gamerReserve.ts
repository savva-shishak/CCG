import { id, clearTable } from "../../utility/functions";
import { army, gamerArmy, gamer, opponent } from "../models/index";

gamer.army.reserve.sub(cards => {
    clearTable(id("ranks"))

    cards.forEach(c => {
        const card = c.getDiv();

        if (!card.classList.contains("card_gamer")) {
            card.classList.add("card_gamer")
        }

        id("ranks").appendChild(card)
    });
});