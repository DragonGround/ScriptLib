

declare module "UnityEngine/UIElements" {
    import { Vector2 } from "UnityEngine"

    export class MinMaxSlider extends BaseField<Vector2> {
        static ussClassName: string
        static labelUssClassName: string
        static inputUssClassName: string
        static trackerUssClassName: string
        static draggerUssClassName: string
        static minThumbUssClassName: string
        static maxThumbUssClassName: string
        minValue: number
        maxValue: number
        value: Vector2
        range: number
        lowLimit: number
        highLimit: number
        constructor()
        constructor(minValue: number, maxValue: number, minLimit: number, maxLimit: number)
        constructor(label: string, minValue: number, maxValue: number, minLimit: number, maxLimit: number)
        SetValueWithoutNotify(newValue: Vector2): void
    }
}