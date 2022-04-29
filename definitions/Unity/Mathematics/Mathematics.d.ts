

declare module "Unity/Mathematics" {
    import { Color32 } from "UnityEngine"

    export class float2 {
        x: number
        y: number

        constructor(x: number, y: number)
    }
    export class float3 {
        static zero: float3
        x: number
        y: number
        z: number

        constructor(x: number, y: number, z: number)
    }
    export class float4 {
        x: number
        y: number
        z: number
        w: number
        xyz: float3

        constructor(x: number, y: number, z: number, w: number)
    }

    export class quaternion {
        static identity: quaternion;
        static Euler(x: number, y: number, z: number): quaternion

        x: number
        y: number
        z: number
        w: number

        constructor(x: number, y: number, z: number, w: number)
    }
}