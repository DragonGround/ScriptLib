

declare module "UnityEngine" {
    import { IFormattable, IFormatProvider } from "System"

    export class Ray implements IFormattable {
        origin: Vector3
        direction: Vector3
        constructor(origin: Vector3, direction: Vector3)
        GetPoint(distance: number): Vector3
        ToString(): string
        ToString(format: string): string
        ToString(format: string, formatProvider: IFormatProvider): string
    }
}