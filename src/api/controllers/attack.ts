import { id } from "../../utility/functions";
import { animationAttack } from "../../utility/animations";
import { gamerArmy, opponentArmy, gamer, opponent } from "../models";

const btn = id("roundbtn");

btn.onclick = async _ => {
    btn.classList.add("btn_hide")
    
    await animationAttack()

    attack();
    checkResultOfAttack();
}

function attack() {
    const gamerCards = gamerArmy.getAttacking();
    const opponentCards = opponentArmy.getAttacking();

    for (let i = 0; i < 3; i++) {
        gamerCards[i].toDamage(opponentCards[i]);
        opponentCards[i].toDamage(gamerCards[i]);
    }
    
    gamerArmy.update();
    opponentArmy.update();
}

function checkResultOfAttack() {
    if (gamer.actual.hp == 0 && opponent.actual.hp == 0) {
        
    } else if (gamer.actual.hp == 0) {
        id("infinite").classList.remove('btn_hide');
    } else if (opponent.actual.hp == 0) {
        id("infinite").classList.remove('btn_hide');
    } else {
        btn.classList.remove("btn_hide")
    }
}