import { id, getNameHpDamageTags, newDiv, createCardProps } from "../utility/functions";
import { opponent, gamer } from "./models";
import { IGoal } from "../utility/Goal";
import "./attakingTableView";

opponent.sub((v: IGoal) => {
    const {name, hp, damage} = getNameHpDamageTags(id("opponent"));

    name.innerHTML   = (opponent.state? `(${opponent.state}) `: "") + v.name
    hp.innerHTML     = v.hp + "/50"
    damage.innerHTML = "" + v.damage
})

gamer.sub((v: IGoal) => {
    const {name, hp, damage} = getNameHpDamageTags(id("gamer"));

    name.innerHTML   = (gamer.state? `(${gamer.state}) `: "") + v.name
    hp.innerHTML     = v.hp + "/50"
    damage.innerHTML = "" + v.damage
})