


declare module "OneJS/Dom" {
    import { FontStyle, Vector2 } from "UnityEngine"
    import { IStyle } from "UnityEngine/UIElements"

    type IStyleAny = {
        [k in keyof IStyle]: any
    }

    export interface DomStyle extends IStyleAny {
        setProperty(key: string, val: any): void
    }
}