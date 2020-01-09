export interface ABC {
    a: number;
    b: number;
    c: number;
}

export interface result {
    text: string;
    result: string;
    nextFormula?(): result;
}
