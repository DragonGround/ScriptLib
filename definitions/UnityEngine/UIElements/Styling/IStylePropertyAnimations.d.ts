

declare module "UnityEngine/UIElements" {
    import { List } from "System/Collections/Generic"
    import { Color, Font } from "UnityEngine"
    import { StylePropertyId } from "UnityEngine/UIElements/StyleSheets"

    export interface IStylePropertyAnimations {
        runningAnimationCount: number
        completedAnimationCount: number
        Start(id: StylePropertyId, from: number, to: number, durationMs: number, delayMs: number, easingCurve: (n: number) => number): boolean
        Start(id: StylePropertyId, from: number, to: number, durationMs: number, delayMs: number, easingCurve: (n: number) => number): boolean
        Start(id: StylePropertyId, from: Length, to: Length, durationMs: number, delayMs: number, easingCurve: (n: number) => number): boolean
        Start(id: StylePropertyId, from: Color, to: Color, durationMs: number, delayMs: number, easingCurve: (n: number) => number): boolean
        StartEnum(id: StylePropertyId, from: number, to: number, durationMs: number, delayMs: number, easingCurve: (n: number) => number): boolean
        Start(id: StylePropertyId, from: Background, to: Background, durationMs: number, delayMs: number, easingCurve: (n: number) => number): boolean
        Start(id: StylePropertyId, from: FontDefinition, to: FontDefinition, durationMs: number, delayMs: number, easingCurve: (n: number) => number): boolean
        Start(id: StylePropertyId, from: Font, to: Font, durationMs: number, delayMs: number, easingCurve: (n: number) => number): boolean
        Start(id: StylePropertyId, from: TextShadow, to: TextShadow, durationMs: number, delayMs: number, easingCurve: (n: number) => number): boolean
        Start(id: StylePropertyId, from: Scale, to: Scale, durationMs: number, delayMs: number, easingCurve: (n: number) => number): boolean
        Start(id: StylePropertyId, from: Translate, to: Translate, durationMs: number, delayMs: number, easingCurve: (n: number) => number): boolean
        Start(id: StylePropertyId, from: Rotate, to: Rotate, durationMs: number, delayMs: number, easingCurve: (n: number) => number): boolean
        Start(id: StylePropertyId, from: TransformOrigin, to: TransformOrigin, durationMs: number, delayMs: number, easingCurve: (n: number) => number): boolean
        HasRunningAnimation(id: StylePropertyId): boolean
        UpdateAnimation(id: StylePropertyId): void
        GetAllAnimations(outPropertyIds: List<StylePropertyId>): void
        CancelAnimation(id: StylePropertyId): void
        CancelAllAnimations(): void
    }
}