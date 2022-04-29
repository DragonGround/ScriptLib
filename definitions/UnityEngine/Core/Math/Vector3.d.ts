

declare module "UnityEngine" {
    import { IEquatable, IFormatProvider, IFormattable } from "System"

    export class Vector3 implements IFormattable, IEquatable<Vector3> {
        static zero: Vector3
        static one: Vector3
        static forward: Vector3
        static back: Vector3
        static up: Vector3
        static down: Vector3
        static left: Vector3
        static right: Vector3
        static positiveInfinity: Vector3
        static negativeInfinity: Vector3
        static fwd: Vector3
        static kEpsilon: number
        static kEpsilonNormalSqrt: number
        static Slerp(a: Vector3, b: Vector3, t: number): Vector3
        static SlerpUnclamped(a: Vector3, b: Vector3, t: number): Vector3
        static OrthoNormalize(normal: Vector3, tangent: Vector3): void
        static OrthoNormalize(normal: Vector3, tangent: Vector3, binormal: Vector3): void
        static RotateTowards(current: Vector3, target: Vector3, maxRadiansDelta: number, maxMagnitudeDelta: number): Vector3
        static Lerp(a: Vector3, b: Vector3, t: number): Vector3
        static LerpUnclamped(a: Vector3, b: Vector3, t: number): Vector3
        static MoveTowards(current: Vector3, target: Vector3, maxDistanceDelta: number): Vector3
        static SmoothDamp(current: Vector3, target: Vector3, currentVelocity: Vector3, smoothTime: number, maxSpeed: number): Vector3
        static SmoothDamp(current: Vector3, target: Vector3, currentVelocity: Vector3, smoothTime: number): Vector3
        static SmoothDamp(current: Vector3, target: Vector3, currentVelocity: Vector3, smoothTime: number, maxSpeed: number, deltaTime: number): Vector3
        static Scale(a: Vector3, b: Vector3): Vector3
        static Cross(lhs: Vector3, rhs: Vector3): Vector3
        static Reflect(inDirection: Vector3, inNormal: Vector3): Vector3
        static Normalize(value: Vector3): Vector3
        static Dot(lhs: Vector3, rhs: Vector3): number
        static Project(vector: Vector3, onNormal: Vector3): Vector3
        static ProjectOnPlane(vector: Vector3, planeNormal: Vector3): Vector3
        static Angle(from: Vector3, to: Vector3): number
        static SignedAngle(from: Vector3, to: Vector3, axis: Vector3): number
        static Distance(a: Vector3, b: Vector3): number
        static ClampMagnitude(vector: Vector3, maxLength: number): Vector3
        static Magnitude(vector: Vector3): number
        static SqrMagnitude(vector: Vector3): number
        static Min(lhs: Vector3, rhs: Vector3): Vector3
        static Max(lhs: Vector3, rhs: Vector3): Vector3
        static AngleBetween(from: Vector3, to: Vector3): number
        static Exclude(excludeThis: Vector3, fromThat: Vector3): Vector3
        Item: number
        normalized: Vector3
        magnitude: number
        sqrMagnitude: number
        x: number
        y: number
        z: number
        constructor(x: number, y: number, z: number)
        constructor(x: number, y: number)
        Set(newX: number, newY: number, newZ: number): void
        Scale(scale: Vector3): void
        GetHashCode(): number
        Equals(other: any): boolean
        Equals(other: Vector3): boolean
        Normalize(): void
        ToString(): string
        ToString(format: string): string
        ToString(format: string, formatProvider: IFormatProvider): string
    }

    export class Vector3Int implements IFormattable, IEquatable<Vector3Int> {
        static zero: Vector3Int
        static one: Vector3Int
        static up: Vector3Int
        static down: Vector3Int
        static left: Vector3Int
        static right: Vector3Int
        static forward: Vector3Int
        static back: Vector3Int
        static Distance(a: Vector3Int, b: Vector3Int): number
        static Min(lhs: Vector3Int, rhs: Vector3Int): Vector3Int
        static Max(lhs: Vector3Int, rhs: Vector3Int): Vector3Int
        static Scale(a: Vector3Int, b: Vector3Int): Vector3Int
        static FloorToInt(v: Vector3): Vector3Int
        static CeilToInt(v: Vector3): Vector3Int
        static RoundToInt(v: Vector3): Vector3Int
        x: number
        y: number
        z: number
        Item: number
        magnitude: number
        sqrMagnitude: number
        constructor(x: number, y: number)
        constructor(x: number, y: number, z: number)
        Set(x: number, y: number, z: number): void
        Scale(scale: Vector3Int): void
        Clamp(min: Vector3Int, max: Vector3Int): void
        Equals(other: any): boolean
        Equals(other: Vector3Int): boolean
        GetHashCode(): number
        ToString(): string
        ToString(format: string): string
        ToString(format: string, formatProvider: IFormatProvider): string
    }
}