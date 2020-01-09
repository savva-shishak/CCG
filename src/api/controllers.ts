import { ABC } from "../types";
import { subject } from "./models";

let actualABC: ABC;

subject.sub((v: ABC) => {
    actualABC = v;
});

subject.oninput("inputA", (value: string) => {
    actualABC.a = +value || 0;
    return actualABC
})

subject.oninput("inputB", (value: string) => {
    actualABC.b = +value || 0;
    return actualABC
})

subject.oninput("inputC", (value: string) => {
    actualABC.c = +value || 0;
    return actualABC
})