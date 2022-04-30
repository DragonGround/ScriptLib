

declare module "Unity/Mathematics" {
    import { Color32, Color } from "UnityEngine"

    export interface float4 {
        ToColor32(): Color32
        ToColor(): Color
    }
}