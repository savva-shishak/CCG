export function id(id: string) {
    return document.getElementById(id);
}

export function getNameHpDamageTags(parent: HTMLElement) {
    let name, hp, damage;

    for (let i = 0; i < parent.children.length; i++) {
        const element = parent.children[i];

        if (element.classList.contains("comandpost__hp")) {
            hp = element
        } else if (element.classList.contains("comandpost__name")) {
            name = element
        } else if (element.classList.contains("comandpost__damage")) {
            damage = element
        }
    }

    return {name, hp, damage}
}

export function newDiv(classList: string[], children: Node[] = []) {
    const div = document.createElement('div')
    
    classList.forEach(clss => {
        div.classList.add(clss);
    })

    children.forEach(child => {
        div.appendChild(child);
    })

    return div;
}

export function createCardProps() {
    const hp = newDiv(['property__hp'])
    const damage = newDiv(['property__damage'])

    return {hp, damage}
}
export function clearTable(table: HTMLElement) {
    const children = table.children;

    const length = children.length

    for (let i = 0; i < length; i++) {
        table.removeChild(children[0]);
    }
}