

declare module "UnityEngine" {
    import { IEquatable } from "System"

    export class PhysicsScene implements IEquatable<PhysicsScene> {
        ToString(): string
        GetHashCode(): number
        Equals(other: any): boolean
        Equals(other: PhysicsScene): boolean
        IsValid(): boolean
        IsEmpty(): boolean
        Simulate(step: number): void
        Raycast(origin: Vector3, direction: Vector3, maxDistance: number, layerMask: number, queryTriggerInteraction: QueryTriggerInteraction): boolean
        Raycast(origin: Vector3, direction: Vector3, hitInfo: RaycastHit, maxDistance: number, layerMask: number, queryTriggerInteraction: QueryTriggerInteraction): boolean
        Raycast(origin: Vector3, direction: Vector3, raycastHits: RaycastHit[], maxDistance: number, layerMask: number, queryTriggerInteraction: QueryTriggerInteraction): number
        CapsuleCast(point1: Vector3, point2: Vector3, radius: number, direction: Vector3, hitInfo: RaycastHit, maxDistance: number, layerMask: number, queryTriggerInteraction: QueryTriggerInteraction): boolean
        CapsuleCast(point1: Vector3, point2: Vector3, radius: number, direction: Vector3, results: RaycastHit[], maxDistance: number, layerMask: number, queryTriggerInteraction: QueryTriggerInteraction): number
        OverlapCapsule(point0: Vector3, point1: Vector3, radius: number, results: Collider[], layerMask: number, queryTriggerInteraction: QueryTriggerInteraction): number
        SphereCast(origin: Vector3, radius: number, direction: Vector3, hitInfo: RaycastHit, maxDistance: number, layerMask: number, queryTriggerInteraction: QueryTriggerInteraction): boolean
        SphereCast(origin: Vector3, radius: number, direction: Vector3, results: RaycastHit[], maxDistance: number, layerMask: number, queryTriggerInteraction: QueryTriggerInteraction): number
        OverlapSphere(position: Vector3, radius: number, results: Collider[], layerMask: number, queryTriggerInteraction: QueryTriggerInteraction): number
        BoxCast(center: Vector3, halfExtents: Vector3, direction: Vector3, hitInfo: RaycastHit, orientation: Quaternion, maxDistance: number, layerMask: number, queryTriggerInteraction: QueryTriggerInteraction): boolean
        BoxCast(center: Vector3, halfExtents: Vector3, direction: Vector3, hitInfo: RaycastHit): boolean
        OverlapBox(center: Vector3, halfExtents: Vector3, results: Collider[], orientation: Quaternion, layerMask: number, queryTriggerInteraction: QueryTriggerInteraction): number
        OverlapBox(center: Vector3, halfExtents: Vector3, results: Collider[]): number
        BoxCast(center: Vector3, halfExtents: Vector3, direction: Vector3, results: RaycastHit[], orientation: Quaternion, maxDistance: number, layerMask: number, queryTriggerInteraction: QueryTriggerInteraction): number
        BoxCast(center: Vector3, halfExtents: Vector3, direction: Vector3, results: RaycastHit[]): number
    }

    export class Physics {
        static gravity: Vector3
        static defaultContactOffset: number
        static sleepThreshold: number
        static queriesHitTriggers: boolean
        static queriesHitBackfaces: boolean
        static bounceThreshold: number
        static defaultMaxDepenetrationVelocity: number
        static defaultSolverIterations: number
        static defaultSolverVelocityIterations: number
        static defaultMaxAngularSpeed: number
        static improvedPatchFriction: boolean
        static defaultPhysicsScene: PhysicsScene
        static autoSimulation: boolean
        static autoSyncTransforms: boolean
        static reuseCollisionCallbacks: boolean
        static interCollisionDistance: number
        static interCollisionStiffness: number
        static interCollisionSettingsToggle: boolean
        static clothGravity: Vector3
        static IgnoreRaycastLayer: number
        static DefaultRaycastLayers: number
        static AllLayers: number
        static IgnoreCollision(collider1: Collider, collider2: Collider, ignore: boolean): void
        static IgnoreCollision(collider1: Collider, collider2: Collider): void
        static IgnoreLayerCollision(layer1: number, layer2: number, ignore: boolean): void
        static IgnoreLayerCollision(layer1: number, layer2: number): void
        static GetIgnoreLayerCollision(layer1: number, layer2: number): boolean
        static GetIgnoreCollision(collider1: Collider, collider2: Collider): boolean
        static Raycast(origin: Vector3, direction: Vector3, maxDistance: number, layerMask: number, queryTriggerInteraction: QueryTriggerInteraction): boolean
        static Raycast(origin: Vector3, direction: Vector3, maxDistance: number, layerMask: number): boolean
        static Raycast(origin: Vector3, direction: Vector3, maxDistance: number): boolean
        static Raycast(origin: Vector3, direction: Vector3): boolean
        static Raycast(origin: Vector3, direction: Vector3, hitInfo: RaycastHit, maxDistance: number, layerMask: number, queryTriggerInteraction: QueryTriggerInteraction): boolean
        static Raycast(origin: Vector3, direction: Vector3, hitInfo: RaycastHit, maxDistance: number, layerMask: number): boolean
        static Raycast(origin: Vector3, direction: Vector3, hitInfo: RaycastHit, maxDistance: number): boolean
        static Raycast(origin: Vector3, direction: Vector3, hitInfo: RaycastHit): boolean
        static Raycast(ray: Ray, maxDistance: number, layerMask: number, queryTriggerInteraction: QueryTriggerInteraction): boolean
        static Raycast(ray: Ray, maxDistance: number, layerMask: number): boolean
        static Raycast(ray: Ray, maxDistance: number): boolean
        static Raycast(ray: Ray): boolean
        static Raycast(ray: Ray, hitInfo: RaycastHit, maxDistance: number, layerMask: number, queryTriggerInteraction: QueryTriggerInteraction): boolean
        static Raycast(ray: Ray, hitInfo: RaycastHit, maxDistance: number, layerMask: number): boolean
        static Raycast(ray: Ray, hitInfo: RaycastHit, maxDistance: number): boolean
        static Raycast(ray: Ray, hitInfo: RaycastHit): boolean
        static Linecast(start: Vector3, end: Vector3, layerMask: number, queryTriggerInteraction: QueryTriggerInteraction): boolean
        static Linecast(start: Vector3, end: Vector3, layerMask: number): boolean
        static Linecast(start: Vector3, end: Vector3): boolean
        static Linecast(start: Vector3, end: Vector3, hitInfo: RaycastHit, layerMask: number, queryTriggerInteraction: QueryTriggerInteraction): boolean
        static Linecast(start: Vector3, end: Vector3, hitInfo: RaycastHit, layerMask: number): boolean
        static Linecast(start: Vector3, end: Vector3, hitInfo: RaycastHit): boolean
        static CapsuleCast(point1: Vector3, point2: Vector3, radius: number, direction: Vector3, maxDistance: number, layerMask: number, queryTriggerInteraction: QueryTriggerInteraction): boolean
        static CapsuleCast(point1: Vector3, point2: Vector3, radius: number, direction: Vector3, maxDistance: number, layerMask: number): boolean
        static CapsuleCast(point1: Vector3, point2: Vector3, radius: number, direction: Vector3, maxDistance: number): boolean
        static CapsuleCast(point1: Vector3, point2: Vector3, radius: number, direction: Vector3): boolean
        static CapsuleCast(point1: Vector3, point2: Vector3, radius: number, direction: Vector3, hitInfo: RaycastHit, maxDistance: number, layerMask: number, queryTriggerInteraction: QueryTriggerInteraction): boolean
        static CapsuleCast(point1: Vector3, point2: Vector3, radius: number, direction: Vector3, hitInfo: RaycastHit, maxDistance: number, layerMask: number): boolean
        static CapsuleCast(point1: Vector3, point2: Vector3, radius: number, direction: Vector3, hitInfo: RaycastHit, maxDistance: number): boolean
        static CapsuleCast(point1: Vector3, point2: Vector3, radius: number, direction: Vector3, hitInfo: RaycastHit): boolean
        static SphereCast(origin: Vector3, radius: number, direction: Vector3, hitInfo: RaycastHit, maxDistance: number, layerMask: number, queryTriggerInteraction: QueryTriggerInteraction): boolean
        static SphereCast(origin: Vector3, radius: number, direction: Vector3, hitInfo: RaycastHit, maxDistance: number, layerMask: number): boolean
        static SphereCast(origin: Vector3, radius: number, direction: Vector3, hitInfo: RaycastHit, maxDistance: number): boolean
        static SphereCast(origin: Vector3, radius: number, direction: Vector3, hitInfo: RaycastHit): boolean
        static SphereCast(ray: Ray, radius: number, maxDistance: number, layerMask: number, queryTriggerInteraction: QueryTriggerInteraction): boolean
        static SphereCast(ray: Ray, radius: number, maxDistance: number, layerMask: number): boolean
        static SphereCast(ray: Ray, radius: number, maxDistance: number): boolean
        static SphereCast(ray: Ray, radius: number): boolean
        static SphereCast(ray: Ray, radius: number, hitInfo: RaycastHit, maxDistance: number, layerMask: number, queryTriggerInteraction: QueryTriggerInteraction): boolean
        static SphereCast(ray: Ray, radius: number, hitInfo: RaycastHit, maxDistance: number, layerMask: number): boolean
        static SphereCast(ray: Ray, radius: number, hitInfo: RaycastHit, maxDistance: number): boolean
        static SphereCast(ray: Ray, radius: number, hitInfo: RaycastHit): boolean
        static BoxCast(center: Vector3, halfExtents: Vector3, direction: Vector3, orientation: Quaternion, maxDistance: number, layerMask: number, queryTriggerInteraction: QueryTriggerInteraction): boolean
        static BoxCast(center: Vector3, halfExtents: Vector3, direction: Vector3, orientation: Quaternion, maxDistance: number, layerMask: number): boolean
        static BoxCast(center: Vector3, halfExtents: Vector3, direction: Vector3, orientation: Quaternion, maxDistance: number): boolean
        static BoxCast(center: Vector3, halfExtents: Vector3, direction: Vector3, orientation: Quaternion): boolean
        static BoxCast(center: Vector3, halfExtents: Vector3, direction: Vector3): boolean
        static BoxCast(center: Vector3, halfExtents: Vector3, direction: Vector3, hitInfo: RaycastHit, orientation: Quaternion, maxDistance: number, layerMask: number, queryTriggerInteraction: QueryTriggerInteraction): boolean
        static BoxCast(center: Vector3, halfExtents: Vector3, direction: Vector3, hitInfo: RaycastHit, orientation: Quaternion, maxDistance: number, layerMask: number): boolean
        static BoxCast(center: Vector3, halfExtents: Vector3, direction: Vector3, hitInfo: RaycastHit, orientation: Quaternion, maxDistance: number): boolean
        static BoxCast(center: Vector3, halfExtents: Vector3, direction: Vector3, hitInfo: RaycastHit, orientation: Quaternion): boolean
        static BoxCast(center: Vector3, halfExtents: Vector3, direction: Vector3, hitInfo: RaycastHit): boolean
        static RaycastAll(origin: Vector3, direction: Vector3, maxDistance: number, layerMask: number, queryTriggerInteraction: QueryTriggerInteraction): RaycastHit[]
        static RaycastAll(origin: Vector3, direction: Vector3, maxDistance: number, layerMask: number): RaycastHit[]
        static RaycastAll(origin: Vector3, direction: Vector3, maxDistance: number): RaycastHit[]
        static RaycastAll(origin: Vector3, direction: Vector3): RaycastHit[]
        static RaycastAll(ray: Ray, maxDistance: number, layerMask: number, queryTriggerInteraction: QueryTriggerInteraction): RaycastHit[]
        static RaycastAll(ray: Ray, maxDistance: number, layerMask: number): RaycastHit[]
        static RaycastAll(ray: Ray, maxDistance: number): RaycastHit[]
        static RaycastAll(ray: Ray): RaycastHit[]
        static RaycastNonAlloc(ray: Ray, results: RaycastHit[], maxDistance: number, layerMask: number, queryTriggerInteraction: QueryTriggerInteraction): number
        static RaycastNonAlloc(ray: Ray, results: RaycastHit[], maxDistance: number, layerMask: number): number
        static RaycastNonAlloc(ray: Ray, results: RaycastHit[], maxDistance: number): number
        static RaycastNonAlloc(ray: Ray, results: RaycastHit[]): number
        static RaycastNonAlloc(origin: Vector3, direction: Vector3, results: RaycastHit[], maxDistance: number, layerMask: number, queryTriggerInteraction: QueryTriggerInteraction): number
        static RaycastNonAlloc(origin: Vector3, direction: Vector3, results: RaycastHit[], maxDistance: number, layerMask: number): number
        static RaycastNonAlloc(origin: Vector3, direction: Vector3, results: RaycastHit[], maxDistance: number): number
        static RaycastNonAlloc(origin: Vector3, direction: Vector3, results: RaycastHit[]): number
        static CapsuleCastAll(point1: Vector3, point2: Vector3, radius: number, direction: Vector3, maxDistance: number, layerMask: number, queryTriggerInteraction: QueryTriggerInteraction): RaycastHit[]
        static CapsuleCastAll(point1: Vector3, point2: Vector3, radius: number, direction: Vector3, maxDistance: number, layerMask: number): RaycastHit[]
        static CapsuleCastAll(point1: Vector3, point2: Vector3, radius: number, direction: Vector3, maxDistance: number): RaycastHit[]
        static CapsuleCastAll(point1: Vector3, point2: Vector3, radius: number, direction: Vector3): RaycastHit[]
        static SphereCastAll(origin: Vector3, radius: number, direction: Vector3, maxDistance: number, layerMask: number, queryTriggerInteraction: QueryTriggerInteraction): RaycastHit[]
        static SphereCastAll(origin: Vector3, radius: number, direction: Vector3, maxDistance: number, layerMask: number): RaycastHit[]
        static SphereCastAll(origin: Vector3, radius: number, direction: Vector3, maxDistance: number): RaycastHit[]
        static SphereCastAll(origin: Vector3, radius: number, direction: Vector3): RaycastHit[]
        static SphereCastAll(ray: Ray, radius: number, maxDistance: number, layerMask: number, queryTriggerInteraction: QueryTriggerInteraction): RaycastHit[]
        static SphereCastAll(ray: Ray, radius: number, maxDistance: number, layerMask: number): RaycastHit[]
        static SphereCastAll(ray: Ray, radius: number, maxDistance: number): RaycastHit[]
        static SphereCastAll(ray: Ray, radius: number): RaycastHit[]
        static OverlapCapsule(point0: Vector3, point1: Vector3, radius: number, layerMask: number, queryTriggerInteraction: QueryTriggerInteraction): Collider[]
        static OverlapCapsule(point0: Vector3, point1: Vector3, radius: number, layerMask: number): Collider[]
        static OverlapCapsule(point0: Vector3, point1: Vector3, radius: number): Collider[]
        static OverlapSphere(position: Vector3, radius: number, layerMask: number, queryTriggerInteraction: QueryTriggerInteraction): Collider[]
        static OverlapSphere(position: Vector3, radius: number, layerMask: number): Collider[]
        static OverlapSphere(position: Vector3, radius: number): Collider[]
        static Simulate(step: number): void
        static SyncTransforms(): void
        static ComputePenetration(colliderA: Collider, positionA: Vector3, rotationA: Quaternion, colliderB: Collider, positionB: Vector3, rotationB: Quaternion, direction: Vector3, distance: number): boolean
        static ClosestPoint(point: Vector3, collider: Collider, position: Vector3, rotation: Quaternion): Vector3
        static OverlapSphereNonAlloc(position: Vector3, radius: number, results: Collider[], layerMask: number, queryTriggerInteraction: QueryTriggerInteraction): number
        static OverlapSphereNonAlloc(position: Vector3, radius: number, results: Collider[], layerMask: number): number
        static OverlapSphereNonAlloc(position: Vector3, radius: number, results: Collider[]): number
        static CheckSphere(position: Vector3, radius: number, layerMask: number, queryTriggerInteraction: QueryTriggerInteraction): boolean
        static CheckSphere(position: Vector3, radius: number, layerMask: number): boolean
        static CheckSphere(position: Vector3, radius: number): boolean
        static CapsuleCastNonAlloc(point1: Vector3, point2: Vector3, radius: number, direction: Vector3, results: RaycastHit[], maxDistance: number, layerMask: number, queryTriggerInteraction: QueryTriggerInteraction): number
        static CapsuleCastNonAlloc(point1: Vector3, point2: Vector3, radius: number, direction: Vector3, results: RaycastHit[], maxDistance: number, layerMask: number): number
        static CapsuleCastNonAlloc(point1: Vector3, point2: Vector3, radius: number, direction: Vector3, results: RaycastHit[], maxDistance: number): number
        static CapsuleCastNonAlloc(point1: Vector3, point2: Vector3, radius: number, direction: Vector3, results: RaycastHit[]): number
        static SphereCastNonAlloc(origin: Vector3, radius: number, direction: Vector3, results: RaycastHit[], maxDistance: number, layerMask: number, queryTriggerInteraction: QueryTriggerInteraction): number
        static SphereCastNonAlloc(origin: Vector3, radius: number, direction: Vector3, results: RaycastHit[], maxDistance: number, layerMask: number): number
        static SphereCastNonAlloc(origin: Vector3, radius: number, direction: Vector3, results: RaycastHit[], maxDistance: number): number
        static SphereCastNonAlloc(origin: Vector3, radius: number, direction: Vector3, results: RaycastHit[]): number
        static SphereCastNonAlloc(ray: Ray, radius: number, results: RaycastHit[], maxDistance: number, layerMask: number, queryTriggerInteraction: QueryTriggerInteraction): number
        static SphereCastNonAlloc(ray: Ray, radius: number, results: RaycastHit[], maxDistance: number, layerMask: number): number
        static SphereCastNonAlloc(ray: Ray, radius: number, results: RaycastHit[], maxDistance: number): number
        static SphereCastNonAlloc(ray: Ray, radius: number, results: RaycastHit[]): number
        static CheckCapsule(start: Vector3, end: Vector3, radius: number, layerMask: number, queryTriggerInteraction: QueryTriggerInteraction): boolean
        static CheckCapsule(start: Vector3, end: Vector3, radius: number, layerMask: number): boolean
        static CheckCapsule(start: Vector3, end: Vector3, radius: number): boolean
        static CheckBox(center: Vector3, halfExtents: Vector3, orientation: Quaternion, layermask: number, queryTriggerInteraction: QueryTriggerInteraction): boolean
        static CheckBox(center: Vector3, halfExtents: Vector3, orientation: Quaternion, layerMask: number): boolean
        static CheckBox(center: Vector3, halfExtents: Vector3, orientation: Quaternion): boolean
        static CheckBox(center: Vector3, halfExtents: Vector3): boolean
        static OverlapBox(center: Vector3, halfExtents: Vector3, orientation: Quaternion, layerMask: number, queryTriggerInteraction: QueryTriggerInteraction): Collider[]
        static OverlapBox(center: Vector3, halfExtents: Vector3, orientation: Quaternion, layerMask: number): Collider[]
        static OverlapBox(center: Vector3, halfExtents: Vector3, orientation: Quaternion): Collider[]
        static OverlapBox(center: Vector3, halfExtents: Vector3): Collider[]
        static OverlapBoxNonAlloc(center: Vector3, halfExtents: Vector3, results: Collider[], orientation: Quaternion, mask: number, queryTriggerInteraction: QueryTriggerInteraction): number
        static OverlapBoxNonAlloc(center: Vector3, halfExtents: Vector3, results: Collider[], orientation: Quaternion, mask: number): number
        static OverlapBoxNonAlloc(center: Vector3, halfExtents: Vector3, results: Collider[], orientation: Quaternion): number
        static OverlapBoxNonAlloc(center: Vector3, halfExtents: Vector3, results: Collider[]): number
        static BoxCastNonAlloc(center: Vector3, halfExtents: Vector3, direction: Vector3, results: RaycastHit[], orientation: Quaternion, maxDistance: number, layerMask: number, queryTriggerInteraction: QueryTriggerInteraction): number
        static BoxCastNonAlloc(center: Vector3, halfExtents: Vector3, direction: Vector3, results: RaycastHit[], orientation: Quaternion): number
        static BoxCastNonAlloc(center: Vector3, halfExtents: Vector3, direction: Vector3, results: RaycastHit[], orientation: Quaternion, maxDistance: number): number
        static BoxCastNonAlloc(center: Vector3, halfExtents: Vector3, direction: Vector3, results: RaycastHit[], orientation: Quaternion, maxDistance: number, layerMask: number): number
        static BoxCastNonAlloc(center: Vector3, halfExtents: Vector3, direction: Vector3, results: RaycastHit[]): number
        static BoxCastAll(center: Vector3, halfExtents: Vector3, direction: Vector3, orientation: Quaternion, maxDistance: number, layerMask: number, queryTriggerInteraction: QueryTriggerInteraction): RaycastHit[]
        static BoxCastAll(center: Vector3, halfExtents: Vector3, direction: Vector3, orientation: Quaternion, maxDistance: number, layerMask: number): RaycastHit[]
        static BoxCastAll(center: Vector3, halfExtents: Vector3, direction: Vector3, orientation: Quaternion, maxDistance: number): RaycastHit[]
        static BoxCastAll(center: Vector3, halfExtents: Vector3, direction: Vector3, orientation: Quaternion): RaycastHit[]
        static BoxCastAll(center: Vector3, halfExtents: Vector3, direction: Vector3): RaycastHit[]
        static OverlapCapsuleNonAlloc(point0: Vector3, point1: Vector3, radius: number, results: Collider[], layerMask: number, queryTriggerInteraction: QueryTriggerInteraction): number
        static OverlapCapsuleNonAlloc(point0: Vector3, point1: Vector3, radius: number, results: Collider[], layerMask: number): number
        static OverlapCapsuleNonAlloc(point0: Vector3, point1: Vector3, radius: number, results: Collider[]): number
        static RebuildBroadphaseRegions(worldBounds: Bounds, subdivisions: number): void
        static BakeMesh(meshID: number, convex: boolean, cookingOptions: MeshColliderCookingOptions): void
        static BakeMesh(meshID: number, convex: boolean): void
        constructor()
    }
}