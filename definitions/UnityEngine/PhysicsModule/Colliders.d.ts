declare module "UnityEngine" {

    export class Collider extends Component {
        enabled: boolean
        attachedRigidbody: Rigidbody
        attachedArticulationBody: ArticulationBody
        isTrigger: boolean
        contactOffset: number
        bounds: Bounds
        hasModifiableContacts: boolean
        sharedMaterial: PhysicMaterial
        material: PhysicMaterial
        constructor()
        ClosestPoint(position: Vector3): Vector3
        Raycast(ray: Ray, hitInfo: RaycastHit, maxDistance: number): boolean
        ClosestPointOnBounds(position: Vector3): Vector3
    }

    export class SphereCollider extends Collider {
        center: Vector3
        radius: number
        constructor()
    }

    export class BoxCollider extends Collider {
        center: Vector3
        size: Vector3
        constructor()
    }

    export class CapsuleCollider extends Collider {
        center: Vector3
        radius: number
        height: number
        direction: number
        constructor()
    }

    export enum MeshColliderCookingOptions {
        None,
        CookForFasterSimulation,
        EnableMeshCleaning,
        WeldColocatedVertices,
        UseFastMidphase,
    }

    export class MeshCollider extends Collider {
        sharedMesh: Mesh
        convex: boolean
        cookingOptions: MeshColliderCookingOptions
        constructor()
    }
}