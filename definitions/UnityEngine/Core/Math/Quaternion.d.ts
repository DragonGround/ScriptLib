declare module "UnityEngine" {
    import { IEquatable, IFormatProvider, IFormattable } from "System"

    export class Quaternion implements IFormattable, IEquatable<Quaternion> {
        static identity: Quaternion
        static kEpsilon: number
        static FromToRotation(fromDirection: Vector3, toDirection: Vector3): Quaternion
        static Inverse(rotation: Quaternion): Quaternion
        static Slerp(a: Quaternion, b: Quaternion, t: number): Quaternion
        static SlerpUnclamped(a: Quaternion, b: Quaternion, t: number): Quaternion
        static Lerp(a: Quaternion, b: Quaternion, t: number): Quaternion
        static LerpUnclamped(a: Quaternion, b: Quaternion, t: number): Quaternion
        static AngleAxis(angle: number, axis: Vector3): Quaternion
        static LookRotation(forward: Vector3, upwards: Vector3): Quaternion
        static LookRotation(forward: Vector3): Quaternion
        static Dot(a: Quaternion, b: Quaternion): number
        static Angle(a: Quaternion, b: Quaternion): number
        static Euler(x: number, y: number, z: number): Quaternion
        static Euler(euler: Vector3): Quaternion
        static RotateTowards(from: Quaternion, to: Quaternion, maxDegreesDelta: number): Quaternion
        static Normalize(q: Quaternion): Quaternion
        static EulerRotation(x: number, y: number, z: number): Quaternion
        static EulerRotation(euler: Vector3): Quaternion
        static EulerAngles(x: number, y: number, z: number): Quaternion
        static EulerAngles(euler: Vector3): Quaternion
        static ToEulerAngles(rotation: Quaternion): Vector3
        static AxisAngle(axis: Vector3, angle: number): Quaternion
        Item: number
        eulerAngles: Vector3
        normalized: Quaternion
        x: number
        y: number
        z: number
        w: number
        constructor(x: number, y: number, z: number, w: number)
        Set(newX: number, newY: number, newZ: number, newW: number): void
        SetLookRotation(view: Vector3): void
        SetLookRotation(view: Vector3, up: Vector3): void
        ToAngleAxis(angle: number, axis: Vector3): void
        SetFromToRotation(fromDirection: Vector3, toDirection: Vector3): void
        Normalize(): void
        GetHashCode(): number
        Equals(other: any): boolean
        Equals(other: Quaternion): boolean
        ToString(): string
        ToString(format: string): string
        ToString(format: string, formatProvider: IFormatProvider): string
        SetEulerRotation(x: number, y: number, z: number): void
        SetEulerRotation(euler: Vector3): void
        ToEuler(): Vector3
        ToAxisAngle(axis: Vector3, angle: number): void
        SetEulerAngles(x: number, y: number, z: number): void
        SetEulerAngles(euler: Vector3): void
        ToEulerAngles(): Vector3
        SetAxisAngle(axis: Vector3, angle: number): void
    }
}