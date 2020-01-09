import { id } from "../utility";

export class Subject<T> {
    private value: T;
    private subs: ((v: T) => void)[] = [];

    constructor(v: T) {
        this.value = v;
    }

    public oninput(input: string, handler: (value: string) => T) {
        id(input).oninput = this.inputNext(handler)
    }

    public inputNext(handler: (value: string) => T) {
        return (e: InputEvent) => {
            this.next(handler((e.target as HTMLTextAreaElement).value))
        }
    }

    public next(v: T) {
        this.value = v;
        this.update();
    }

    private update() {
        for (const sub of this.subs) {
            sub(this.value)
        }
    }

    public sub(sub: (v: T) => void) {
        this.subs.push(sub);
        sub(this.value);
    }
}
