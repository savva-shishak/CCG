export function id(id: string) {
    return document.getElementById(id);
}

export function x2(value: number): string {
    if (value < 0) {
        return " - " + hideIf_1(-value) + "x<sup>2</sup>";
    } else if (value > 0) {
        return hideIf_1(value) + "x<sup>2</sup>";
    } else {
        return "";
    }
}

export function x(value: number): string {
    if (value < 0) {
        return " - " + hideIf_1(-value) + "x";
    } else if (value > 0) {
        return " + " + hideIf_1(value) + "x";
    } else {
        return "";
    }
}

export function hideIf_1(value: number): string {
    return value == 1? "": value.toString();
}