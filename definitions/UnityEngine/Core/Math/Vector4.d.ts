

declare module "UnityEngine" {
    import { IFormattable, IEquatable, IFormatProvider } from "System"

    export class Vector4 implements IFormattable, IEquatable<Vector4> {
        static zero: Vector4
        static one: Vector4
        static positiveInfinity: Vector4
        static negativeInfinity: Vector4
        static kEpsilon: number
        static Lerp(a: Vector4, b: Vector4, t: number): Vector4
        static LerpUnclamped(a: Vector4, b: Vector4, t: number): Vector4
        static MoveTowards(current: Vector4, target: Vector4, maxDistanceDelta: number): Vector4
        static Scale(a: Vector4, b: Vector4): Vector4
        static Normalize(a: Vector4): Vector4
        static Dot(a: Vector4, b: Vector4): number
        static Project(a: Vector4, b: Vector4): Vector4
        static Distance(a: Vector4, b: Vector4): number
        static Magnitude(a: Vector4): number
        static Min(lhs: Vector4, rhs: Vector4): Vector4
        static Max(lhs: Vector4, rhs: Vector4): Vector4
        static SqrMagnitude(a: Vector4): number
        Item: number
        normalized: Vector4
        magnitude: number
        sqrMagnitude: number
        x: number
        y: number
        z: number
        w: number
        constructor(x: number, y: number, z: number, w: number)
        constructor(x: number, y: number, z: number)
        constructor(x: number, y: number)
        Set(newX: number, newY: number, newZ: number, newW: number): void
        Scale(scale: Vector4): void
        GetHashCode(): number
        Equals(other: any): boolean
        Equals(other: Vector4): boolean
        Normalize(): void
        ToString(): string
        ToString(format: string): string
        ToString(format: string, formatProvider: IFormatProvider): string
        SqrMagnitude(): number
    }
}