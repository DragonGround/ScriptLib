import { IFormattable, IFormatProvider } from "System"

declare module "UnityEngine" {
    export class Plane implements IFormattable {
        static Translate(plane: Plane, translation: Vector3): Plane
        normal: Vector3
        distance: number
        flipped: Plane
        constructor(inNormal: Vector3, inPoint: Vector3)
        constructor(inNormal: Vector3, d: number)
        constructor(a: Vector3, b: Vector3, c: Vector3)
        SetNormalAndPosition(inNormal: Vector3, inPoint: Vector3): void
        Set3Points(a: Vector3, b: Vector3, c: Vector3): void
        Flip(): void
        Translate(translation: Vector3): void
        ClosestPointOnPlane(point: Vector3): Vector3
        GetDistanceToPoint(point: Vector3): number
        GetSide(point: Vector3): boolean
        SameSide(inPt0: Vector3, inPt1: Vector3): boolean
        Raycast(ray: Ray, enter: number): boolean
        ToString(): string
        ToString(format: string): string
        ToString(format: string, formatProvider: IFormatProvider): string
    }
}