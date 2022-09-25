declare module "UnityEngine" {
    export class Mathf {
        static PI: number
        static Infinity: number
        static NegativeInfinity: number
        static Deg2Rad: number
        static Rad2Deg: number
        static Epsilon: number
        static ClosestPowerOfTwo(value: number): number
        static IsPowerOfTwo(value: number): boolean
        static NextPowerOfTwo(value: number): number
        static GammaToLinearSpace(value: number): number
        static LinearToGammaSpace(value: number): number
        static CorrelatedColorTemperatureToRGB(kelvin: number): Color
        static FloatToHalf(val: number): number
        static HalfToFloat(val: number): number
        static PerlinNoise(x: number, y: number): number
        static Sin(f: number): number
        static Cos(f: number): number
        static Tan(f: number): number
        static Asin(f: number): number
        static Acos(f: number): number
        static Atan(f: number): number
        static Atan2(y: number, x: number): number
        static Sqrt(f: number): number
        static Abs(f: number): number
        static Abs(value: number): number
        static Min(a: number, b: number): number
        static Min(values: number[]): number
        static Min(a: number, b: number): number
        static Min(values: number[]): number
        static Max(a: number, b: number): number
        static Max(values: number[]): number
        static Max(a: number, b: number): number
        static Max(values: number[]): number
        static Pow(f: number, p: number): number
        static Exp(power: number): number
        static Log(f: number, p: number): number
        static Log(f: number): number
        static Log10(f: number): number
        static Ceil(f: number): number
        static Floor(f: number): number
        static Round(f: number): number
        static CeilToInt(f: number): number
        static FloorToInt(f: number): number
        static RoundToInt(f: number): number
        static Sign(f: number): number
        static Clamp(value: number, min: number, max: number): number
        static Clamp(value: number, min: number, max: number): number
        static Clamp01(value: number): number
        static Lerp(a: number, b: number, t: number): number
        static LerpUnclamped(a: number, b: number, t: number): number
        static LerpAngle(a: number, b: number, t: number): number
        static MoveTowards(current: number, target: number, maxDelta: number): number
        static MoveTowardsAngle(current: number, target: number, maxDelta: number): number
        static SmoothStep(from: number, to: number, t: number): number
        static Gamma(value: number, absmax: number, gamma: number): number
        static Approximately(a: number, b: number): boolean
        static SmoothDamp(current: number, target: number, currentVelocity: number, smoothTime: number, maxSpeed: number): number
        static SmoothDamp(current: number, target: number, currentVelocity: number, smoothTime: number): number
        static SmoothDamp(current: number, target: number, currentVelocity: number, smoothTime: number, maxSpeed: number, deltaTime: number): number
        static SmoothDampAngle(current: number, target: number, currentVelocity: number, smoothTime: number, maxSpeed: number): number
        static SmoothDampAngle(current: number, target: number, currentVelocity: number, smoothTime: number): number
        static SmoothDampAngle(current: number, target: number, currentVelocity: number, smoothTime: number, maxSpeed: number, deltaTime: number): number
        static Repeat(t: number, length: number): number
        static PingPong(t: number, length: number): number
        static InverseLerp(a: number, b: number, value: number): number
        static DeltaAngle(current: number, target: number): number
    }
}