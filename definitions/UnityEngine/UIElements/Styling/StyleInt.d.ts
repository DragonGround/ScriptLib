

declare module "UnityEngine/UIElements" {
    import { Color } from "UnityEngine"

    export class StyleInt implements IStyleValue<int> {
        value: int
        keyword: StyleKeyword

        constructor(v: int)
        constructor(k: StyleKeyword)
    }
}