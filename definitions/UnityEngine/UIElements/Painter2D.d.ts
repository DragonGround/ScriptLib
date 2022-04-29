


declare module "UnityEngine/UIElements" {
    import { Color, Color32, Rect, Texture, Vector2, Vector3 } from "UnityEngine"
    import { NativeSlice } from "Unity/Collections"

    export enum LineJoin {
        Miter,
        Bevel,
        Round,
    }

    export enum LineCap {
        Butt,
        Round,
    }

    export enum ArcDirection {
        Clockwise,
        CounterClockwise,
    }

    export enum FillRule {
        NonZero,
        OddEven,
    }

    export class Painter2D {
        lineWidth: number
        strokeColor: Color
        fillColor: Color
        lineJoin: LineJoin
        lineCap: LineCap
        miterLimit: number
        BeginPath(): void
        ClosePath(): void
        MoveTo(pos: Vector2): void
        LineTo(pos: Vector2): void
        ArcTo(p1: Vector2, p2: Vector2, radius: number): void
        Arc(center: Vector2, radius: number, startAngle: Angle, endAngle: Angle, direction: ArcDirection): void
        BezierCurveTo(p1: Vector2, p2: Vector2, p3: Vector2): void
        QuadraticCurveTo(p1: Vector2, p2: Vector2): void
        Stroke(): void
        Fill(): void
        Fill(fillRule: FillRule): void
    }

    export class Vertex {
        static nearZ: number
        position: Vector3
        tint: Color32
        uv: Vector2
    }

    export class MeshWriteData {
        vertexCount: number
        indexCount: number
        uvRegion: Rect
        SetNextVertex(vertex: Vertex): void
        SetNextIndex(index: number): void
        SetAllVertices(vertices: Vertex[]): void
        SetAllVertices(vertices: NativeSlice<Vertex>): void
        SetAllIndices(indices: number[]): void
        SetAllIndices(indices: NativeSlice<number>): void
    }

    export class MeshGenerationContext {
        visualElement: VisualElement
        painter2D: Painter2D
        Allocate(vertexCount: number, indexCount: number, texture: Texture): MeshWriteData
    }
}