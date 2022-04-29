

declare module "UnityEngine/Rendering" {
    import { MonoBehaviour } from "UnityEngine"

    export class Volume extends MonoBehaviour {
        sharedProfile: VolumeProfile
    }
}