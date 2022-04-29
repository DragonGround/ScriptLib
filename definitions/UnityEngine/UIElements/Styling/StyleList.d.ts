

declare module "UnityEngine/UIElements" {
    import { List } from "System/Collections/Generic"
    import { Color } from "UnityEngine"

    export class StyleList<T> implements IStyleValue<List<T>> {
        value: List<T>
        keyword: StyleKeyword

        constructor(v: List<T>)
        constructor(k: StyleKeyword)
    }

    export enum TimeUnit {
        Second,
        Millisecond,
    }

    export class TimeValue {
        value: float
        unit: TimeUnit

        constructor(value: number)
        constructor(value: number, unit: TimeUnit)
    }

    export class StylePropertyName {
        static IsNullOrEmpty(propertyName: StylePropertyName): boolean

        constructor(name: string)
    }

    export enum EasingMode {
        Ease,
        EaseIn,
        EaseOut,
        EaseInOut,
        Linear,
        EaseInSine,
        EaseOutSine,
        EaseInOutSine,
        EaseInCubic,
        EaseOutCubic,
        EaseInOutCubic,
        EaseInCirc,
        EaseOutCirc,
        EaseInOutCirc,
        EaseInElastic,
        EaseOutElastic,
        EaseInOutElastic,
        EaseInBack,
        EaseOutBack,
        EaseInOutBack,
        EaseInBounce,
        EaseOutBounce,
        EaseInOutBounce,
    }

    export class EasingFunction {
        mode: EasingMode

        constructor(mode: EasingMode)
    }
}