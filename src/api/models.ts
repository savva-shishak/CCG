import { ComandPost } from "../utility/ComandPost";
import { Attaking } from "../utility/Attaking";
import { Card } from "../utility/Card";

export const gamer = new ComandPost("Савва", 50, 10);
export const opponent = new ComandPost("Противник", 50, 10);

export const testCard = new Card("Боец", 100, 15, "assets/tiger.jpg")

export const gamerAttackCards = new Attaking([testCard]);
export const opponentAttackCards = new Attaking([]);