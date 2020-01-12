import { id } from "../utility/functions";

export class Subject<T> {
    protected value: T;
    private subs: ((v: T) => void)[] = [];

    constructor(v: T) {
        this.value = v;
    }

    public oninput(input: string, handler: (value: string) => T) {
        id(input).oninput = this.inputNext(handler)
    }

    public onclick(btnId: string, handler: (o: T) => T) {
        id(btnId).onclick = _ => this.next(handler(this.value))
    }

    public inputNext(handler: (value: string) => T) {
        return (e: InputEvent) => {
            this.next(handler((e.target as HTMLTextAreaElement).value))
        }
    }

    public get actual(): T {
        return this.value;
    }

    public next(v: T) {
        this.value = v;
        this.update();
    }

    public nextFn(fn: (v: T) => T) {
        this.next(fn(this.value));
    }

    protected update() {
        for (const sub of this.subs) {
            sub(this.value)
        }
    }

    public sub(sub: (v: T) => void) {
        this.subs.push(sub);
        sub(this.value);
    }
}
