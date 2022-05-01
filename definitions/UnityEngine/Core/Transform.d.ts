


declare module "UnityEngine" {
    import { IEnumerable, IEnumerator } from "System/Collections/Generic"

    export enum Space {
        World,
        Self,
    }

    export class Transform extends Component implements IEnumerable {
        position: Vector3
        localPosition: Vector3
        eulerAngles: Vector3
        localEulerAngles: Vector3
        right: Vector3
        up: Vector3
        forward: Vector3
        rotation: Quaternion
        localRotation: Quaternion
        localScale: Vector3
        parent: Transform
        worldToLocalMatrix: Matrix4x4
        localToWorldMatrix: Matrix4x4
        root: Transform
        childCount: number
        lossyScale: Vector3
        hasChanged: boolean
        hierarchyCapacity: number
        hierarchyCount: number
        SetParent(p: Transform): void
        SetParent(parent: Transform, worldPositionStays: boolean): void
        SetPositionAndRotation(position: Vector3, rotation: Quaternion): void
        Translate(translation: Vector3, relativeTo: Space): void
        Translate(translation: Vector3): void
        Translate(x: number, y: number, z: number, relativeTo: Space): void
        Translate(x: number, y: number, z: number): void
        Translate(translation: Vector3, relativeTo: Transform): void
        Translate(x: number, y: number, z: number, relativeTo: Transform): void
        Rotate(eulers: Vector3, relativeTo: Space): void
        Rotate(eulers: Vector3): void
        Rotate(xAngle: number, yAngle: number, zAngle: number, relativeTo: Space): void
        Rotate(xAngle: number, yAngle: number, zAngle: number): void
        Rotate(axis: Vector3, angle: number, relativeTo: Space): void
        Rotate(axis: Vector3, angle: number): void
        RotateAround(point: Vector3, axis: Vector3, angle: number): void
        LookAt(target: Transform, worldUp: Vector3): void
        LookAt(target: Transform): void
        LookAt(worldPosition: Vector3, worldUp: Vector3): void
        LookAt(worldPosition: Vector3): void
        TransformDirection(direction: Vector3): Vector3
        TransformDirection(x: number, y: number, z: number): Vector3
        InverseTransformDirection(direction: Vector3): Vector3
        InverseTransformDirection(x: number, y: number, z: number): Vector3
        TransformVector(vector: Vector3): Vector3
        TransformVector(x: number, y: number, z: number): Vector3
        InverseTransformVector(vector: Vector3): Vector3
        InverseTransformVector(x: number, y: number, z: number): Vector3
        TransformPoint(position: Vector3): Vector3
        TransformPoint(x: number, y: number, z: number): Vector3
        InverseTransformPoint(position: Vector3): Vector3
        InverseTransformPoint(x: number, y: number, z: number): Vector3
        DetachChildren(): void
        SetAsFirstSibling(): void
        SetAsLastSibling(): void
        SetSiblingIndex(index: number): void
        GetSiblingIndex(): number
        Find(n: string): Transform
        IsChildOf(parent: Transform): boolean
        FindChild(n: string): Transform
        GetEnumerator(): IEnumerator
        RotateAround(axis: Vector3, angle: number): void
        RotateAroundLocal(axis: Vector3, angle: number): void
        GetChild(index: number): Transform
        GetChildCount(): number
    }
}