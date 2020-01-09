import { testCard, gamerAttackCards } from "./models";

testCard.getDiv().onclick = _ => {
    gamerAttackCards.remove(testCard)
}