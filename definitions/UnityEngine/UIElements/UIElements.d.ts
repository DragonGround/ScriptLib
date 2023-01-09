

declare module "UnityEngine/UIElements" {

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