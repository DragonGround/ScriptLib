



declare module "OneJS/Utils" {
    import { StyleFloat, StyleInt } from "UnityEngine/UIElements"
    import { MonoBehaviour } from "UnityEngine"

    export class UIStyleUtil extends MonoBehaviour {
        static GetStyleFloat(n: number): StyleFloat
        static GetStyleInt(n: number): StyleInt
    }
}