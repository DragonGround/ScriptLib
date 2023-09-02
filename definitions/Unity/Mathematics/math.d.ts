declare module "math" {
  import { type float2, type float3, type float4 } from "Unity/Mathematics"

  export const PI: float

  export function float2(x: number): float2
  export function float2(x: number, y: number): float2
  export function float3(x: number): float3
  export function float3(x: number, y: number, z: number): float3
  export function float4(x: number): float4
  export function float4(x: number, y: number, z: number, w: number): float4

  export function clamp(v: float, a: float, b: float): float
  export function lerp(a: float, b: float, t: float): float
  export function saturate(v: float): float
  export function unlerp(a: float, b: float, t: float): float
}
