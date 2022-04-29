

declare module "UnityEngine/UIElements" {
    import { Color, Texture2D } from "UnityEngine"
    import { float2 } from "Unity/Mathematics"

    export class Cursor {
        texture: Texture2D
        hotspot: float2
    }

    export class StyleCursor implements IStyleValue<Cursor> {
        value: Cursor
        keyword: StyleKeyword

        constructor(v: Cursor)
        constructor(k: StyleKeyword)
    }
}