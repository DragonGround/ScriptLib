

declare module "UnityEngine/UIElements" {
    import { Vector4 } from "UnityEngine"

    export class Vector4Field extends BaseCompositeField<Vector4, FloatField, number> {
        static ussClassName: string
        static labelUssClassName: string
        static inputUssClassName: string
        constructor()
        constructor(label: string)
    }
}