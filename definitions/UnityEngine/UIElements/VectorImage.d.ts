

declare module "UnityEngine/UIElements" {
    import { ScriptableObject } from "UnityEngine"

    export class VectorImage extends ScriptableObject {
        width: number
        height: number
    }
}