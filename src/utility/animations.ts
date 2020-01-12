import { gamerArmy, opponentArmy } from "../api/models/index";

export function animationAttack(): Promise<void> {
    return new Promise<void>(res => {
        toggleClassOnArmies('card_jolt')

        setTimeout(() => {
            toggleClassOnArmies('card_jolt')
            toggleClassOnArmies('card_attack')

            setTimeout(() => {
                toggleClassOnArmies('card_attack')

                res();
            }, 1000);
        }, 1000);
    });
}

export function warningText(text: Element): Promise<void> {
    return new Promise(res => {
        text.classList.add("text_warning");

        setTimeout(() => {
            text.classList.remove("text_warning")
        }, 500);
    });
}

export function scrollToReserve(): Promise<void> {
    const goalSroll = document.documentElement.clientHeight * .5;

    return new Promise(res => {
        const interval = setInterval(() => {
            if (window.pageYOffset >= goalSroll) {
                res();
                clearInterval(interval);
            }

            window.scrollBy(0, goalSroll * (20/300))
        }, 20)
    });
}

export function delay(time: number = 1000): Promise<void> {
    return new Promise(res => {
        setTimeout(() => {
            res();
        }, time);
    })
}

export function scrollToButtle(): Promise<void> {
    const goalSroll = document.documentElement.clientHeight * .5;

    return new Promise(res => {
        const interval = setInterval(() => {
            if (window.pageYOffset <= 5) {
                res();
                clearInterval(interval);
            }

            window.scrollBy(0, -goalSroll * (20/300))
        }, 20)
    });
}

function toggleClassOnArmies(className: string) {
    gamerArmy.toggleClassCards(className);
    opponentArmy.toggleClassCards(className);
}

function calcScrollParams() {
    
}