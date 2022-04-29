

declare module "UnityEngine/UIElements" {
    import { Vector2, Vector2Int } from "UnityEngine"

    export class Vector2Field extends BaseCompositeField<Vector2,FloatField,number> {
        static ussClassName: string
        static labelUssClassName: string
        static inputUssClassName: string
        constructor()
        constructor(label: string)
    }

    export class Vector2IntField extends BaseCompositeField<Vector2Int,IntegerField,number> {
        static ussClassName: string
        static labelUssClassName: string
        static inputUssClassName: string
        constructor()
        constructor(label: string)
    }
}