

declare module "UnityEngine" {
    import { IFormattable, IEquatable, IFormatProvider } from "System"

    export class Rect implements IFormattable, IEquatable<Rect> {
        static zero: Rect
        static MinMaxRect(xmin: number, ymin: number, xmax: number, ymax: number): Rect
        static NormalizedToPoint(rectangle: Rect, normalizedRectCoordinates: Vector2): Vector2
        static PointToNormalized(rectangle: Rect, point: Vector2): Vector2
        x: number
        y: number
        position: Vector2
        center: Vector2
        min: Vector2
        max: Vector2
        width: number
        height: number
        size: Vector2
        xMin: number
        yMin: number
        xMax: number
        yMax: number
        left: number
        right: number
        top: number
        bottom: number
        constructor(x: number, y: number, width: number, height: number)
        constructor(position: Vector2, size: Vector2)
        constructor(source: Rect)
        Set(x: number, y: number, width: number, height: number): void
        Contains(point: Vector2): boolean
        Contains(point: Vector3): boolean
        Contains(point: Vector3, allowInverse: boolean): boolean
        Overlaps(other: Rect): boolean
        Overlaps(other: Rect, allowInverse: boolean): boolean
        GetHashCode(): number
        Equals(other: any): boolean
        Equals(other: Rect): boolean
        ToString(): string
        ToString(format: string): string
        ToString(format: string, formatProvider: IFormatProvider): string
    }

    export class RectInt implements IFormattable, IEquatable<RectInt> {
        x: number
        y: number
        center: Vector2
        min: Vector2Int
        max: Vector2Int
        width: number
        height: number
        xMin: number
        yMin: number
        xMax: number
        yMax: number
        position: Vector2Int
        size: Vector2Int
        allPositionsWithin: PositionEnumerator
        constructor(xMin: number, yMin: number, width: number, height: number)
        constructor(position: Vector2Int, size: Vector2Int)
        SetMinMax(minPosition: Vector2Int, maxPosition: Vector2Int): void
        ClampToBounds(bounds: RectInt): void
        Contains(position: Vector2Int): boolean
        Overlaps(other: RectInt): boolean
        ToString(): string
        ToString(format: string): string
        ToString(format: string, formatProvider: IFormatProvider): string
        Equals(other: RectInt): boolean
    }
}