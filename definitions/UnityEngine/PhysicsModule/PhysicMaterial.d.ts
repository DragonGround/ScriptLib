
declare module "UnityEngine" {

    export enum PhysicMaterialCombine {
        Average,
        Minimum,
        Multiply,
        Maximum,
    }

    export class PhysicMaterial extends Object {
        bounciness: number
        dynamicFriction: number
        staticFriction: number
        frictionCombine: PhysicMaterialCombine
        bounceCombine: PhysicMaterialCombine
        constructor()
        constructor(name: string)
    }
}