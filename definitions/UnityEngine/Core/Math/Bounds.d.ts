


declare module "UnityEngine" {
    import { IFormattable, IEquatable, IFormatProvider, IDisposable } from "System"
    import { IEnumeratorAny } from "System/Collections"
    import { IEnumerator } from "System/Collections/Generic"

    export class Bounds implements IFormattable, IEquatable<Bounds> {
        center: Vector3
        size: Vector3
        extents: Vector3
        min: Vector3
        max: Vector3
        constructor(center: Vector3, size: Vector3)
        GetHashCode(): number
        Equals(other: any): boolean
        Equals(other: Bounds): boolean
        SetMinMax(min: Vector3, max: Vector3): void
        Encapsulate(point: Vector3): void
        Encapsulate(bounds: Bounds): void
        Expand(amount: number): void
        Expand(amount: Vector3): void
        Intersects(bounds: Bounds): boolean
        IntersectRay(ray: Ray): boolean
        IntersectRay(ray: Ray, distance: number): boolean
        ToString(): string
        ToString(format: string): string
        ToString(format: string, formatProvider: IFormatProvider): string
        Contains(point: Vector3): boolean
        SqrDistance(point: Vector3): number
        ClosestPoint(point: Vector3): Vector3
    }

    export class PositionEnumerator implements IEnumerator<Vector3Int>, IEnumeratorAny, IDisposable {
        Current: Vector3Int
        constructor(min: Vector3Int, max: Vector3Int)
        GetEnumerator(): PositionEnumerator
        MoveNext(): boolean
        Reset(): void
        Dispose(): void
    }

    export class BoundsInt implements IFormattable, IEquatable<BoundsInt> {
        x: number
        y: number
        z: number
        center: Vector3
        min: Vector3Int
        max: Vector3Int
        xMin: number
        yMin: number
        zMin: number
        xMax: number
        yMax: number
        zMax: number
        position: Vector3Int
        size: Vector3Int
        allPositionsWithin: PositionEnumerator
        constructor(xMin: number, yMin: number, zMin: number, sizeX: number, sizeY: number, sizeZ: number)
        constructor(position: Vector3Int, size: Vector3Int)
        SetMinMax(minPosition: Vector3Int, maxPosition: Vector3Int): void
        ClampToBounds(bounds: BoundsInt): void
        Contains(position: Vector3Int): boolean
        ToString(): string
        ToString(format: string): string
        ToString(format: string, formatProvider: IFormatProvider): string
        Equals(other: any): boolean
        Equals(other: BoundsInt): boolean
        GetHashCode(): number
    }
}