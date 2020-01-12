import { id, clearTable } from "../../utility/functions";
import { gamer, opponent } from "../models/index";
import { EntryCard } from "../../entities/EntryCard";

opponent.army.attack.sub(o => {
    const table = id("table__opponent")
    clearTable(table);

    o.forEach(c => {
        table.appendChild(c.getDiv());
    })
})

gamer.army.attack.sub(o => {
    const table = id("table__gamer")
    clearTable(table);

    const cards = [new EntryCard(), new EntryCard(), new EntryCard()]

    o.forEach((card, i) => {
        cards[i] = card;
    })

    cards.forEach(card => {
        if (!card.getDiv().classList.contains("card_gamer")) {
            card.getDiv().classList.add("card_gamer")
        }

        table.appendChild(card.getDiv());
    });
})

