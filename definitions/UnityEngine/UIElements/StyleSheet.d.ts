
declare module "UnityEngine/UIElements" {
    import { ScriptableObject } from "UnityEngine"

    export class StyleSheet extends ScriptableObject {
        importedWithErrors: boolean
        importedWithWarnings: boolean
        contentHash: number
        constructor()
    }
}