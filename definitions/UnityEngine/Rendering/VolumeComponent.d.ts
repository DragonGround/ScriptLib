declare module "UnityEngine/Rendering" {
    import { MonoBehaviour, ScriptableObject } from "UnityEngine"

    export class VolumeComponent extends ScriptableObject {
        displayName: string
        active: boolean
    }
}