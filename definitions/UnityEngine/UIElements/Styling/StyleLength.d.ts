

declare module "UnityEngine/UIElements" {
    import { Color } from "UnityEngine"

    export enum LengthUnit {
        Pixel,
        Percent
    }

    export enum Unit {
        Pixel,
        Percent,
        Auto,
        None,
    }

    export class Length {
        static Percent(v: number): Length
        static Auto(): Length
        static None(): Length

        value: number
        unit: LengthUnit

        constructor(v: number)
        constructor(v: number, u: LengthUnit)

        ToString(): string
    }

    export class StyleLength implements IStyleValue<Length> {
        value: Length
        keyword: StyleKeyword

        constructor(v: Length)
        constructor(k: StyleKeyword)
    }
}