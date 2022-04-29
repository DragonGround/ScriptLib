declare module "Unity/Mathematics" {
    import { Color, Color32 } from "UnityEngine"

    export interface float4 {
        ToColor32(): Color32
        ToColor(): Color
    }
}