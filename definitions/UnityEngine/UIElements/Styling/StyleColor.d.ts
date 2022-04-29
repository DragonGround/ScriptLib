

declare module "UnityEngine/UIElements" {
    import { Color } from "UnityEngine"

    export enum StyleKeyword {
        Undefined,
        Null,
        Auto,
        None,
        Initial
    }

    export interface IStyleValue<T> {
        value: T
        keyword: StyleKeyword
    }

    export class StyleColor implements IStyleValue<Color> {
        value: Color
        keyword: StyleKeyword

        constructor(v: Color)
        constructor(k: StyleKeyword)
    }
}