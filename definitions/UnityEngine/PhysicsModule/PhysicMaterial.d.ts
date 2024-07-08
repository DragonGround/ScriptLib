
declare module "UnityEngine" {

    export enum PhysicMaterialCombine { // Obsolete in Unity 6000.x
        Average,
        Minimum,
        Multiply,
        Maximum,
    }

    export class PhysicMaterial extends Object { // Obsolete in Unity 6000.x
        bounciness: number
        dynamicFriction: number
        staticFriction: number
        frictionCombine: PhysicMaterialCombine
        bounceCombine: PhysicMaterialCombine
        constructor()
        constructor(name: string)
    }

    export enum PhysicsMaterialCombine {
        Average,
        Multiply,
        Minimum,
        Maximum,
    }

    export class PhysicsMaterial extends any {
        bounciness: number
        dynamicFriction: number
        staticFriction: number
        frictionCombine: PhysicsMaterialCombine
        bounceCombine: PhysicsMaterialCombine
        constructor()
        constructor(name: string)
    }
}