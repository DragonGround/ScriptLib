import { Vector3 } from "UnityEngine"

declare module "UnityEngine/UIElements" {

    export enum DeltaSpeed {
        Fast,
        Normal,
        Slow,
    }

    export interface IValueField<T> {
        value: T
        ApplyInputDeviceDelta(delta: Vector3, speed: DeltaSpeed, startValue: T): void
        StartDragging(): void
        StopDragging(): void
    }

    export class TextValueField<TValueType> extends TextInputBaseField<TValueType> implements IValueField<TValueType> {
        formatString: string
        value: TValueType
        ApplyInputDeviceDelta(delta: Vector3, speed: DeltaSpeed, startValue: TValueType): void
        StartDragging(): void
        StopDragging(): void
        SetValueWithoutNotify(newValue: TValueType): void
    }

    export class DoubleField extends TextValueField<number> {
        static ussClassName: string
        static labelUssClassName: string
        static inputUssClassName: string
        constructor()
        constructor(maxLength: number)
        constructor(label: string, maxLength: number)
        ApplyInputDeviceDelta(delta: Vector3, speed: DeltaSpeed, startValue: number): void
    }
}