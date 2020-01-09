import { subject } from "./models";
import { ABC } from "../types";
import { id, x2, x } from "../utility";
import { withToken, calc } from "../calculator";

subject.sub((v: ABC) => {
    id("equation").innerHTML = `Уравнение: ${x2(v.a)} ${x(v.b)} ${withToken(v.c)} = 0`
    id("result").innerHTML = "Ответ: " + calc(v);
});