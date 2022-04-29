

declare module "UnityEngine/Rendering" {
    import { List } from "System/Collections/Generic"
    import { MonoBehaviour, ScriptableObject } from "UnityEngine"

    export class VolumeProfile extends ScriptableObject {
        components: List<VolumeComponent>
    }
}