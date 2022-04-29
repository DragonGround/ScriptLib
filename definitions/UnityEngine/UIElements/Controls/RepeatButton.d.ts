declare module "UnityEngine/UIElements" {

    export class RepeatButton extends TextElement {
        static ussClassName: string
        constructor()
        constructor(clickEvent: () => void, delay: number, interval: number)
        SetAction(clickEvent: () => void, delay: number, interval: number): void
    }
}