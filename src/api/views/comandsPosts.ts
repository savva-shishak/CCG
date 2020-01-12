import { opponent, gamer } from "../models/index";
import { getNameHpDamageTags, id } from "../../utility/functions";
import { IComandPost } from "../models/ComandPost";
import { warningText } from "../../utility/animations";

let savedHpGamers = {
    gamer: gamer.actual.hp,
    opponent: opponent.actual.hp
}

opponent.sub(async (v: IComandPost) => {
    const {name, hp, damage} = getNameHpDamageTags(id("opponent"));

    name.innerHTML   = v.units + " <i class=\"fas fa-users\"></i>"
    hp.innerHTML     = v.hp + "/" + v.maxHp + " <i class=\"fas fa-heart\"></i>"
    damage.innerHTML = "" + v.damage + " <i class=\"fas fa-fire-alt\"></i>"

    if (v.hp != savedHpGamers.opponent) {
        savedHpGamers.opponent = v.hp;
        await warningText(hp);
    }
});

gamer.sub(async (v: IComandPost) => {
    const {name, hp, damage} = getNameHpDamageTags(id("gamer"));

    name.innerHTML   = v.units + " <i class=\"fas fa-users\"></i>"
    hp.innerHTML     = v.hp + "/" + v.maxHp + " <i class=\"fas fa-heart\"></i>"
    damage.innerHTML = "" + v.damage + " <i class=\"fas fa-fire-alt\"></i>"

    if (v.hp != savedHpGamers.gamer) {
        savedHpGamers.gamer = v.hp;
        await warningText(hp);
    }
});