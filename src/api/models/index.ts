import { ComandPost } from "./ComandPost";
import { Deck } from "../../entities/Deck";
import { GamerArmy } from "./GamerArmy";
import { OpponentArmy } from "./OpponentArmy";
import { ActiveCard } from "./ActiveCard";
import { Subject } from "../../entities/Subject";
import { GameState } from "./gameStates";

export const gamer = new ComandPost("Савва", 50, 10);
export const opponent = new ComandPost("Противник", 50, 10);

export const gamerAttackCards = new Deck([]);
export const opponentAttackCards = new Deck([]);

export const army = new Deck([]);
export const armyOpponent = new Deck([]);

export const gamerArmy = new GamerArmy();
export const opponentArmy = new OpponentArmy();

export const activeCard = new ActiveCard(gamer.army.attack, gamer.army.reserve);

export const gameState = new Subject<GameState>(GameState.CONTINUE);