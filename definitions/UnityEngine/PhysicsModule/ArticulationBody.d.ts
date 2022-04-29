import { List } from "System/Collections/Generic"

declare module "UnityEngine" {
    export enum ArticulationJointType {
        FixedJoint,
        PrismaticJoint,
        RevoluteJoint,
        SphericalJoint,
    }

    export enum ArticulationDofLock {
        LockedMotion,
        LimitedMotion,
        FreeMotion,
    }

    export class ArticulationDrive {
        lowerLimit: number
        upperLimit: number
        stiffness: number
        damping: number
        forceLimit: number
        target: number
        targetVelocity: number
    }

    export class ArticulationReducedSpace {
        Item: number
        dofCount: number
        constructor(a: number)
        constructor(a: number, b: number)
        constructor(a: number, b: number, c: number)
    }

    export class ArticulationJacobian {
        Item: number
        rows: number
        columns: number
        elements: List<number>
        constructor(rows: number, cols: number)
    }

    export class ArticulationBody extends Behaviour {
        jointType: ArticulationJointType
        anchorPosition: Vector3
        parentAnchorPosition: Vector3
        anchorRotation: Quaternion
        parentAnchorRotation: Quaternion
        isRoot: boolean
        computeParentAnchor: boolean
        matchAnchors: boolean
        linearLockX: ArticulationDofLock
        linearLockY: ArticulationDofLock
        linearLockZ: ArticulationDofLock
        swingYLock: ArticulationDofLock
        swingZLock: ArticulationDofLock
        twistLock: ArticulationDofLock
        xDrive: ArticulationDrive
        yDrive: ArticulationDrive
        zDrive: ArticulationDrive
        immovable: boolean
        useGravity: boolean
        linearDamping: number
        angularDamping: number
        jointFriction: number
        velocity: Vector3
        angularVelocity: Vector3
        mass: number
        centerOfMass: Vector3
        worldCenterOfMass: Vector3
        inertiaTensor: Vector3
        inertiaTensorRotation: Quaternion
        sleepThreshold: number
        solverIterations: number
        solverVelocityIterations: number
        maxAngularVelocity: number
        maxLinearVelocity: number
        maxJointVelocity: number
        maxDepenetrationVelocity: number
        jointPosition: ArticulationReducedSpace
        jointVelocity: ArticulationReducedSpace
        jointAcceleration: ArticulationReducedSpace
        jointForce: ArticulationReducedSpace
        driveForce: ArticulationReducedSpace
        dofCount: number
        index: number
        collisionDetectionMode: CollisionDetectionMode
        constructor()
        AddForce(force: Vector3, mode: ForceMode): void
        AddForce(force: Vector3): void
        AddRelativeForce(force: Vector3, mode: ForceMode): void
        AddRelativeForce(force: Vector3): void
        AddTorque(torque: Vector3, mode: ForceMode): void
        AddTorque(torque: Vector3): void
        AddRelativeTorque(torque: Vector3, mode: ForceMode): void
        AddRelativeTorque(torque: Vector3): void
        AddForceAtPosition(force: Vector3, position: Vector3, mode: ForceMode): void
        AddForceAtPosition(force: Vector3, position: Vector3): void
        ResetCenterOfMass(): void
        ResetInertiaTensor(): void
        Sleep(): void
        IsSleeping(): boolean
        WakeUp(): void
        TeleportRoot(position: Vector3, rotation: Quaternion): void
        GetClosestPoint(point: Vector3): Vector3
        GetRelativePointVelocity(relativePoint: Vector3): Vector3
        GetPointVelocity(worldPoint: Vector3): Vector3
        GetDenseJacobian(jacobian: ArticulationJacobian): number
        GetJointPositions(positions: List<number>): number
        SetJointPositions(positions: List<number>): void
        GetJointVelocities(velocities: List<number>): number
        SetJointVelocities(velocities: List<number>): void
        GetJointAccelerations(accelerations: List<number>): number
        SetJointAccelerations(accelerations: List<number>): void
        GetJointForces(forces: List<number>): number
        SetJointForces(forces: List<number>): void
        GetJointForcesForAcceleration(acceleration: ArticulationReducedSpace): ArticulationReducedSpace
        GetDriveForces(forces: List<number>): number
        GetJointGravityForces(forces: List<number>): number
        GetJointCoriolisCentrifugalForces(forces: List<number>): number
        GetDriveTargets(targets: List<number>): number
        SetDriveTargets(targets: List<number>): void
        GetDriveTargetVelocities(targetVelocities: List<number>): number
        SetDriveTargetVelocities(targetVelocities: List<number>): void
        GetDofStartIndices(dofStartIndices: List<number>): number
        SnapAnchorToClosestContact(): void
    }
}