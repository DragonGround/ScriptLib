declare module "UnityEngine" {
    export enum RigidbodyConstraints {
        None,
        FreezePositionX,
        FreezePositionY,
        FreezePositionZ,
        FreezeRotationX,
        FreezeRotationY,
        FreezeRotationZ,
        FreezePosition,
        FreezeRotation,
        FreezeAll,
    }

    export enum RigidbodyInterpolation {
        None,
        Interpolate,
        Extrapolate,
    }

    export enum ForceMode {
        Force,
        Acceleration,
        Impulse,
        VelocityChange,
    }

    

    export class Rigidbody extends Component {
        velocity: Vector3
        angularVelocity: Vector3
        drag: number
        angularDrag: number
        mass: number
        useGravity: boolean
        maxDepenetrationVelocity: number
        isKinematic: boolean
        freezeRotation: boolean
        constraints: RigidbodyConstraints
        collisionDetectionMode: CollisionDetectionMode
        centerOfMass: Vector3
        worldCenterOfMass: Vector3
        inertiaTensorRotation: Quaternion
        inertiaTensor: Vector3
        detectCollisions: boolean
        position: Vector3
        rotation: Quaternion
        interpolation: RigidbodyInterpolation
        solverIterations: number
        sleepThreshold: number
        maxAngularVelocity: number
        maxLinearVelocity: number
        solverVelocityIterations: number
        sleepVelocity: number
        sleepAngularVelocity: number
        useConeFriction: boolean
        solverIterationCount: number
        solverVelocityIterationCount: number
        constructor()
        SetDensity(density: number): void
        MovePosition(position: Vector3): void
        MoveRotation(rot: Quaternion): void
        Move(position: Vector3, rotation: Quaternion): void
        Sleep(): void
        IsSleeping(): boolean
        WakeUp(): void
        ResetCenterOfMass(): void
        ResetInertiaTensor(): void
        GetRelativePointVelocity(relativePoint: Vector3): Vector3
        GetPointVelocity(worldPoint: Vector3): Vector3
        AddForce(force: Vector3, mode: ForceMode): void
        AddForce(force: Vector3): void
        AddForce(x: number, y: number, z: number, mode: ForceMode): void
        AddForce(x: number, y: number, z: number): void
        AddRelativeForce(force: Vector3, mode: ForceMode): void
        AddRelativeForce(force: Vector3): void
        AddRelativeForce(x: number, y: number, z: number, mode: ForceMode): void
        AddRelativeForce(x: number, y: number, z: number): void
        AddTorque(torque: Vector3, mode: ForceMode): void
        AddTorque(torque: Vector3): void
        AddTorque(x: number, y: number, z: number, mode: ForceMode): void
        AddTorque(x: number, y: number, z: number): void
        AddRelativeTorque(torque: Vector3, mode: ForceMode): void
        AddRelativeTorque(torque: Vector3): void
        AddRelativeTorque(x: number, y: number, z: number, mode: ForceMode): void
        AddRelativeTorque(x: number, y: number, z: number): void
        AddForceAtPosition(force: Vector3, position: Vector3, mode: ForceMode): void
        AddForceAtPosition(force: Vector3, position: Vector3): void
        AddExplosionForce(explosionForce: number, explosionPosition: Vector3, explosionRadius: number, upwardsModifier: number, mode: ForceMode): void
        AddExplosionForce(explosionForce: number, explosionPosition: Vector3, explosionRadius: number, upwardsModifier: number): void
        AddExplosionForce(explosionForce: number, explosionPosition: Vector3, explosionRadius: number): void
        ClosestPointOnBounds(position: Vector3): Vector3
        SweepTest(direction: Vector3, hitInfo: RaycastHit, maxDistance: number, queryTriggerInteraction: QueryTriggerInteraction): boolean
        SweepTest(direction: Vector3, hitInfo: RaycastHit, maxDistance: number): boolean
        SweepTest(direction: Vector3, hitInfo: RaycastHit): boolean
        SweepTestAll(direction: Vector3, maxDistance: number, queryTriggerInteraction: QueryTriggerInteraction): RaycastHit[]
        SweepTestAll(direction: Vector3, maxDistance: number): RaycastHit[]
        SweepTestAll(direction: Vector3): RaycastHit[]
        SetMaxAngularVelocity(a: number): void
    }
}