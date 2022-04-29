

declare module "UnityEngine.UIElements.Experimental" {
    import { Rect, Color, Vector3, Vector2, Quaternion } from "UnityEngine"
    import { VisualElement } from "UnityEngine/UIElements"

    export interface IValueAnimation {
        isRunning: boolean
        durationMs: number
        Start(): void
        Stop(): void
        Recycle(): void
    }

    export class ValueAnimation<T> implements IValueAnimation {
        static Create(e: VisualElement, interpolator: Function): IValueAnimation
        durationMs: number
        easingCurve: (n: number) => number
        isRunning: boolean
        onAnimationCompleted: Function
        autoRecycle: boolean
        valueUpdated: (ve: VisualElement, t: T) => void
        initialValue: (ve: VisualElement) => T
        interpolator: (a: T, b: T, c: number) => T
        from: T
        to: T
        constructor()
        Start(): void
        Stop(): void
        Recycle(): void
        Ease(easing: (n: number) => number): ValueAnimation<T>
        OnCompleted(callback: Function): ValueAnimation<T>
        KeepAlive(): ValueAnimation<T>
    }

    export class StyleValues {
        top: number
        left: number
        width: number
        height: number
        right: number
        bottom: number
        color: Color
        backgroundColor: Color
        unityBackgroundImageTintColor: Color
        borderColor: Color
        marginLeft: number
        marginTop: number
        marginRight: number
        marginBottom: number
        paddingLeft: number
        paddingTop: number
        paddingRight: number
        paddingBottom: number
        borderLeftWidth: number
        borderRightWidth: number
        borderTopWidth: number
        borderBottomWidth: number
        borderTopLeftRadius: number
        borderTopRightRadius: number
        borderBottomLeftRadius: number
        borderBottomRightRadius: number
        opacity: number
        flexGrow: number
        flexShrink: number
    }

    export interface ITransitionAnimations {
        Start(from: number, to: number, durationMs: number, onValueChanged: (ve: VisualElement, v: number) => void): ValueAnimation<number>
        Start(from: Rect, to: Rect, durationMs: number, onValueChanged: (ve: VisualElement, v: Rect) => void): ValueAnimation<Rect>
        Start(from: Color, to: Color, durationMs: number, onValueChanged: (ve: VisualElement, v: Color) => void): ValueAnimation<Color>
        Start(from: Vector3, to: Vector3, durationMs: number, onValueChanged: (ve: VisualElement, v: Vector3) => void): ValueAnimation<Vector3>
        Start(from: Vector2, to: Vector2, durationMs: number, onValueChanged: (ve: VisualElement, v: Vector2) => void): ValueAnimation<Vector2>
        Start(from: Quaternion, to: Quaternion, durationMs: number, onValueChanged: (ve: VisualElement, v: Quaternion) => void): ValueAnimation<Quaternion>
        Start(from: StyleValues, to: StyleValues, durationMs: number): ValueAnimation<StyleValues>
        Start(to: StyleValues, durationMs: number): ValueAnimation<StyleValues>
        Start(fromValueGetter: (ve: VisualElement) => number, to: number, durationMs: number, onValueChanged: (ve: VisualElement, v: number) => void): ValueAnimation<number>
        Start(fromValueGetter: (ve: VisualElement) => Rect, to: Rect, durationMs: number, onValueChanged: (ve: VisualElement, v: Rect) => void): ValueAnimation<Rect>
        Start(fromValueGetter: (ve: VisualElement) => Color, to: Color, durationMs: number, onValueChanged: (ve: VisualElement, v: Color) => void): ValueAnimation<Color>
        Start(fromValueGetter: (ve: VisualElement) => Vector3, to: Vector3, durationMs: number, onValueChanged: (ve: VisualElement, v: Vector3) => void): ValueAnimation<Vector3>
        Start(fromValueGetter: (ve: VisualElement) => Vector2, to: Vector2, durationMs: number, onValueChanged: (ve: VisualElement, v: Vector2) => void): ValueAnimation<Vector2>
        Start(fromValueGetter: (ve: VisualElement) => Quaternion, to: Quaternion, durationMs: number, onValueChanged: (ve: VisualElement, v: Quaternion) => void): ValueAnimation<Quaternion>
        Layout(to: Rect, durationMs: number): ValueAnimation<Rect>
        TopLeft(to: Vector2, durationMs: number): ValueAnimation<Vector2>
        Size(to: Vector2, durationMs: number): ValueAnimation<Vector2>
        Scale(to: number, duration: number): ValueAnimation<number>
        Position(to: Vector3, duration: number): ValueAnimation<Vector3>
        Rotation(to: Quaternion, duration: number): ValueAnimation<Quaternion>
    }
}