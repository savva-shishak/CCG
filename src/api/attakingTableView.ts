import { id, clearTable } from "../utility/functions";
import { gamerAttackCards, opponentAttackCards } from "./models";

opponentAttackCards.sub(o => {
    const table = id("table__opponent")
    clearTable(table);

    o.forEach(c => {
        table.appendChild(c.getDiv())
    })
})

gamerAttackCards.sub(o => {
    const table = id("table__gamer")
    clearTable(table);

    o.forEach(c => {
        const card = c.getDiv();

        if (!card.classList.contains("card_gamer")) {
            card.classList.add("card_gamer")
        }

        table.appendChild(card)
    })
})