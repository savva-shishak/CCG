import { ABC } from "./types";

const { sqrt } = Math

export function withTokenShort(num: number): string {
    return (num < 0)? "- " + hideIf_1(-num): "+ " + hideIf_1(num); 
}

export function withToken(num: number): string {
    return (num < 0)? "- " + (-num): "+ " + (num); 
}

export function hideIf_1(num: number): string {
    return (num == 1)? "": num.toString();
}

export function withMinusShort(num: number): string {
    return (num < 0)? "- " + hideIf_1(-num): hideIf_1(num); 
}

export function withMinus(num: number): string {
    return (num < 0)? "- " + (-num): (num.toString()); 
}

export function calc(v: ABC): string {
    const {a, b, c} = v;

    if (a == 0) {
        if (b == 0) {
            return "x = " + withMinus(-c)
        }
        return "x = " + withMinus(-c/b)
    }

    if (b == 0) {
        let ressultNum = sqrt(-c/a)

        if (!ressultNum) {
            return "Корней нет";
        }

        const resultStr = withMinus(ressultNum);

        return "x<sub>1</sub> = " + resultStr + "; x<sub>2</sub> = " + -resultStr
    }

    if (c == 0) {
        return "x<sub>1</sub> = 0; x<sub>2</sub> = " + withMinus(b/a)
    }

    const d = b*b - 4*a*c;
    
    if (d < 0) {
        return "Корней нет";

    } else if (d == 0) {
        const x = (-b)/(2*a);
        return "x = " + withMinus(x)

    } else {
        const x1 = (-b + sqrt(d))/(2*a);
        const x2 = (-b - sqrt(d))/(2*a);

        console.log(`${x1}  ${x2}`);

        return "x<sub>1</sub> = " + withMinus(x1) + "; x<sub>2</sub> = " + withMinus(x2)
    }
}