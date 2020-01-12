import { Subject } from "../../entities/Subject";
import { scrollToButtle, scrollToReserve } from "../../utility/animations";

export class ScrollManager {
    private conditions: (() => boolean | null)[] = [];

    scrollIf(subject: Subject<any>, condition: () => boolean | null) {
        this.conditions.push(condition);

        subject.sub(async () => {
            this.containsTrue();
        });
    }

    private async containsTrue() {
        for (let i = 0; i < this.conditions.length; i++) {
            const res = this.conditions[i]();

            if (res == null) {
                continue;
            }

            if (res == false) {
                await scrollToButtle();
                return;
            }

            await scrollToReserve();
        }

    }
}

export const scrollManager = new ScrollManager();