

declare module "UnityEngine" {
    import { IFormattable, IEquatable, IFormatProvider } from "System"
    
    export class Matrix4x4 implements IFormattable, IEquatable<Matrix4x4> {
        static zero: Matrix4x4
        static identity: Matrix4x4
        static Determinant(m: Matrix4x4): number
        static TRS(pos: Vector3, q: Quaternion, s: Vector3): Matrix4x4
        static Inverse3DAffine(input: Matrix4x4, result: Matrix4x4): boolean
        static Inverse(m: Matrix4x4): Matrix4x4
        static Transpose(m: Matrix4x4): Matrix4x4
        static Ortho(left: number, right: number, bottom: number, top: number, zNear: number, zFar: number): Matrix4x4
        static Perspective(fov: number, aspect: number, zNear: number, zFar: number): Matrix4x4
        static LookAt(from: Vector3, to: Vector3, up: Vector3): Matrix4x4
        static Frustum(left: number, right: number, bottom: number, top: number, zNear: number, zFar: number): Matrix4x4
        static Frustum(fp: FrustumPlanes): Matrix4x4
        static Scale(vector: Vector3): Matrix4x4
        static Translate(vector: Vector3): Matrix4x4
        static Rotate(q: Quaternion): Matrix4x4
        rotation: Quaternion
        lossyScale: Vector3
        isIdentity: boolean
        determinant: number
        decomposeProjection: FrustumPlanes
        inverse: Matrix4x4
        transpose: Matrix4x4
        Item: number
        m00: number
        m10: number
        m20: number
        m30: number
        m01: number
        m11: number
        m21: number
        m31: number
        m02: number
        m12: number
        m22: number
        m32: number
        m03: number
        m13: number
        m23: number
        m33: number
        constructor(column0: Vector4, column1: Vector4, column2: Vector4, column3: Vector4)
        ValidTRS(): boolean
        SetTRS(pos: Vector3, q: Quaternion, s: Vector3): void
        GetHashCode(): number
        Equals(other: any): boolean
        Equals(other: Matrix4x4): boolean
        GetColumn(index: number): Vector4
        GetRow(index: number): Vector4
        GetPosition(): Vector3
        SetColumn(index: number, column: Vector4): void
        SetRow(index: number, row: Vector4): void
        MultiplyPoint(point: Vector3): Vector3
        MultiplyPoint3x4(point: Vector3): Vector3
        MultiplyVector(vector: Vector3): Vector3
        TransformPlane(plane: Plane): Plane
        ToString(): string
        ToString(format: string): string
        ToString(format: string, formatProvider: IFormatProvider): string
    }
}