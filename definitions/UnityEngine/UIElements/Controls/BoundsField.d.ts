

declare module "UnityEngine/UIElements" {
    import { Bounds } from "UnityEngine"

    export class BoundsField extends BaseField<Bounds> {
        static ussClassName: string
        static labelUssClassName: string
        static inputUssClassName: string
        static centerFieldUssClassName: string
        static extentsFieldUssClassName: string
        constructor()
        constructor(label: string)
        SetValueWithoutNotify(newValue: Bounds): void
    }
}