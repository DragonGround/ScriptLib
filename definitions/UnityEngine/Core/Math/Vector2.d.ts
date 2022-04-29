declare module "UnityEngine" {
    import { IEquatable, IFormatProvider, IFormattable } from "System"

    export class Vector2 implements IFormattable, IEquatable<Vector2> {
        static zero: Vector2
        static one: Vector2
        static up: Vector2
        static down: Vector2
        static left: Vector2
        static right: Vector2
        static positiveInfinity: Vector2
        static negativeInfinity: Vector2
        static kEpsilon: number
        static kEpsilonNormalSqrt: number
        static Lerp(a: Vector2, b: Vector2, t: number): Vector2
        static LerpUnclamped(a: Vector2, b: Vector2, t: number): Vector2
        static MoveTowards(current: Vector2, target: Vector2, maxDistanceDelta: number): Vector2
        static Scale(a: Vector2, b: Vector2): Vector2
        static Reflect(inDirection: Vector2, inNormal: Vector2): Vector2
        static Perpendicular(inDirection: Vector2): Vector2
        static Dot(lhs: Vector2, rhs: Vector2): number
        static Angle(from: Vector2, to: Vector2): number
        static SignedAngle(from: Vector2, to: Vector2): number
        static Distance(a: Vector2, b: Vector2): number
        static ClampMagnitude(vector: Vector2, maxLength: number): Vector2
        static SqrMagnitude(a: Vector2): number
        static Min(lhs: Vector2, rhs: Vector2): Vector2
        static Max(lhs: Vector2, rhs: Vector2): Vector2
        static SmoothDamp(current: Vector2, target: Vector2, currentVelocity: Vector2, smoothTime: number, maxSpeed: number): Vector2
        static SmoothDamp(current: Vector2, target: Vector2, currentVelocity: Vector2, smoothTime: number): Vector2
        static SmoothDamp(current: Vector2, target: Vector2, currentVelocity: Vector2, smoothTime: number, maxSpeed: number, deltaTime: number): Vector2
        Item: number
        normalized: Vector2
        magnitude: number
        sqrMagnitude: number
        x: number
        y: number
        constructor(x: number, y: number)
        Set(newX: number, newY: number): void
        Scale(scale: Vector2): void
        Normalize(): void
        ToString(): string
        ToString(format: string): string
        ToString(format: string, formatProvider: IFormatProvider): string
        GetHashCode(): number
        Equals(other: any): boolean
        Equals(other: Vector2): boolean
        SqrMagnitude(): number
    }

    export class Vector2Int implements IFormattable, IEquatable<Vector2Int> {
        static zero: Vector2Int
        static one: Vector2Int
        static up: Vector2Int
        static down: Vector2Int
        static left: Vector2Int
        static right: Vector2Int
        static Distance(a: Vector2Int, b: Vector2Int): number
        static Min(lhs: Vector2Int, rhs: Vector2Int): Vector2Int
        static Max(lhs: Vector2Int, rhs: Vector2Int): Vector2Int
        static Scale(a: Vector2Int, b: Vector2Int): Vector2Int
        static FloorToInt(v: Vector2): Vector2Int
        static CeilToInt(v: Vector2): Vector2Int
        static RoundToInt(v: Vector2): Vector2Int
        x: number
        y: number
        Item: number
        magnitude: number
        sqrMagnitude: number
        constructor(x: number, y: number)
        Set(x: number, y: number): void
        Scale(scale: Vector2Int): void
        Clamp(min: Vector2Int, max: Vector2Int): void
        Equals(other: any): boolean
        Equals(other: Vector2Int): boolean
        GetHashCode(): number
        ToString(): string
        ToString(format: string): string
        ToString(format: string, formatProvider: IFormatProvider): string
    }
}