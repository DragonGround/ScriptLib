

declare module "OneJS/Utils" {
    import { Color32 } from "UnityEngine"
    import { IJobParallelFor } from "Unity/Jobs"

    export class GradientTextureFillJob extends IJobParallelFor {
        static Run(colors: NativeArray<Color32>, width: number, height: number, topRightColor: Color32): void
        colors: NativeArray<Color32>
        width: number
        height: number
        topRightColor: Color32
        Execute(index: number): void
    }
}