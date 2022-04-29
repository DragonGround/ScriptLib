import { float2, float3, float4 } from "Unity/Mathematics"
import { clamp, float2 as f2, float3 as f3, float4 as f4 } from "math"

export function parseFloat2(input: number[] | float2): float2 {
    if (Array.isArray(input))
        input = f2(input[0] ?? 0, input[1] ?? 0)
    return input
}

export function parseFloat3(input: number[] | float3): float3 {
    if (Array.isArray(input))
        input = f3(input[0] ?? 0, input[1] ?? 0, input[2] ?? 0)
    return input
}

export function parseFloat4(input: number[] | float4): float4 {
    if (Array.isArray(input))
        input = f4(input[0] ?? 0, input[1] ?? 0, input[2] ?? 0, input[3] ?? 0)
    return input
}