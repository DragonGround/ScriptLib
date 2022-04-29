


declare module "UnityEngine" {
    import { MonoBehaviour } from "UnityEngine"
    import { List, IList } from "System/Collections/Generic"

    export enum SpriteMeshType {
        FullRect,
        Tight,
    }

    export enum SpritePackingMode {
        Tight,
        Rectangle,
    }

    export enum SpritePackingRotation {
        None,
        FlipHorizontal,
        FlipVertical,
        Rotate180,
        Any,
    }

    export class Sprite extends Object {
        static Create(texture: Texture2D, rect: Rect, pivot: Vector2, pixelsPerUnit: number, extrude: number, meshType: SpriteMeshType, border: Vector4, generateFallbackPhysicsShape: boolean): Sprite
        static Create(texture: Texture2D, rect: Rect, pivot: Vector2, pixelsPerUnit: number, extrude: number, meshType: SpriteMeshType, border: Vector4): Sprite
        static Create(texture: Texture2D, rect: Rect, pivot: Vector2, pixelsPerUnit: number, extrude: number, meshType: SpriteMeshType): Sprite
        static Create(texture: Texture2D, rect: Rect, pivot: Vector2, pixelsPerUnit: number, extrude: number): Sprite
        static Create(texture: Texture2D, rect: Rect, pivot: Vector2, pixelsPerUnit: number): Sprite
        static Create(texture: Texture2D, rect: Rect, pivot: Vector2): Sprite
        bounds: Bounds
        rect: Rect
        border: Vector4
        texture: Texture2D
        pixelsPerUnit: number
        spriteAtlasTextureScale: number
        associatedAlphaSplitTexture: Texture2D
        pivot: Vector2
        packed: boolean
        packingMode: SpritePackingMode
        packingRotation: SpritePackingRotation
        textureRect: Rect
        textureRectOffset: Vector2
        vertices: Vector2[]
        triangles: number[]
        uv: Vector2[]
        GetPhysicsShapeCount(): number
        GetPhysicsShapePointCount(shapeIdx: number): number
        GetPhysicsShape(shapeIdx: number, physicsShape: List<Vector2>): number
        OverridePhysicsShape(physicsShapes: IList<Vector2[]>): void
        OverrideGeometry(vertices: Vector2[], triangles: number[]): void
    }
}