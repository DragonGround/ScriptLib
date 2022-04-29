

declare module "UnityEngine/UIElements" {
    import { Vector3 } from "UnityEngine"

    export class IntegerField extends TextValueField<number> {
        static ussClassName: string
        static labelUssClassName: string
        static inputUssClassName: string
        constructor()
        constructor(maxLength: number)
        constructor(label: string, maxLength: number)
        ApplyInputDeviceDelta(delta: Vector3, speed: DeltaSpeed, startValue: number): void
    }
}