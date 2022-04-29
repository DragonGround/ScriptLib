declare module "math" {
    // import { float2 } from "Unity/Mathematics"
    // `import` causes conflicts with the floatX functions 
    // So use the type = import() syntax instead
    type float2 = import("Unity/Mathematics").float2
    type float3 = import("Unity/Mathematics").float3
    type float4 = import("Unity/Mathematics").float4

    export const PI

    export function float2(x: number): float2
    export function float2(x: number, y: number): float2
    export function float3(x: number): float3
    export function float3(x: number, y: number, z: number): float3
    export function float4(x: number): float4
    export function float4(x: number, y: number, z: number, w: number): float4

    export function clamp(v: float, a: float, b: float): float
}