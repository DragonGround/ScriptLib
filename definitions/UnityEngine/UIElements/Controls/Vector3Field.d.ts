

declare module "UnityEngine/UIElements" {
    import { Vector3, Vector3Int } from "UnityEngine"

    export class Vector3Field extends BaseCompositeField<Vector3,FloatField,number> {
        static ussClassName: string
        static labelUssClassName: string
        static inputUssClassName: string
        constructor()
        constructor(label: string)
    }

    export class Vector3IntField extends BaseCompositeField<Vector3Int,IntegerField,number> {
        static ussClassName: string
        static labelUssClassName: string
        static inputUssClassName: string
        constructor()
        constructor(label: string)
    }
}