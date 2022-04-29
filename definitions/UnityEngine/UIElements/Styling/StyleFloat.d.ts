

declare module "UnityEngine/UIElements" {
    import { Color } from "UnityEngine"

    export class StyleFloat implements IStyleValue<float> {
        value: float
        keyword: StyleKeyword

        constructor(v: float)
        constructor(k: StyleKeyword)
    }
}