declare module "UnityEngine" {
    import { float3 } from "Unity/Mathematics"

    export enum CollisionDetectionMode {
        Discrete,
        Continuous,
        ContinuousDynamic,
        ContinuousSpeculative
    }

    export class RaycastHit {
        collider: Collider
        colliderInstanceID: number
        point: Vector3
        normal: Vector3
        barycentricCoordinate: Vector3
        distance: number
        triangleIndex: number
        textureCoord: Vector2
        textureCoord2: Vector2
        transform: Transform
        rigidbody: Rigidbody
        articulationBody: ArticulationBody
        lightmapCoord: Vector2
        textureCoord1: Vector2
    }

    export enum QueryTriggerInteraction {
        UseGlobal,
        Ignore,
        Collide,
    }
}