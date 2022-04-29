declare module "UnityEngine/UIElements" {

    export interface ITextElement {
        text: string
    }

    export class Label extends TextElement {
        static ussClassName: string
        constructor()
        constructor(text: string)
    }
}