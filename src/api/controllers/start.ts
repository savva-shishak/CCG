import { id } from "../../utility/functions";
import { gamer, opponent } from "../models/index";
import { ComandPost } from "../models/ComandPost";

export function start() {
    id('infinite').classList.add("btn_hide");
    id('roundbtn').classList.remove("btn_hide");

    gamer.army.init()
    opponent.army.init();

    hp100(gamer);
    hp100(opponent);
}

function hp100(gamer: ComandPost) {
    gamer.nextFn(actual => {
        actual.hp = actual.maxHp
        return actual
    })
}

id('infinite').onclick = start;

start();