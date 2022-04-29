

declare module "UnityEngine/UIElements" {
    import { EventModifiers } from "IMGUI"
    import { PenStatus } from "InputLegacy"
    import { IEquatable } from "System"
    import { List } from "System/Collections/Generic"
    import { Vector2, Vector3 } from "UnityEngine"

    export enum MouseButton {
        LeftMouse,
        RightMouse,
        MiddleMouse,
    }
    export interface IMouseEvent {
        modifiers: EventModifiers
        mousePosition: Vector2
        localMousePosition: Vector2
        mouseDelta: Vector2
        clickCount: number
        button: number
        pressedButtons: number
        shiftKey: boolean
        ctrlKey: boolean
        commandKey: boolean
        altKey: boolean
        actionKey: boolean
    }
    export interface IPointerEvent {
        pointerId: number
        pointerType: string
        isPrimary: boolean
        button: number
        pressedButtons: number
        position: Vector3
        localPosition: Vector3
        deltaPosition: Vector3
        deltaTime: number
        clickCount: number
        pressure: number
        tangentialPressure: number
        altitudeAngle: number
        azimuthAngle: number
        twist: number
        tilt: Vector2
        penStatus: PenStatus
        radius: Vector2
        radiusVariance: Vector2
        modifiers: EventModifiers
        shiftKey: boolean
        ctrlKey: boolean
        commandKey: boolean
        altKey: boolean
        actionKey: boolean
    }
    export class ManipulatorActivationFilter implements IEquatable<ManipulatorActivationFilter> {
        button: MouseButton
        modifiers: EventModifiers
        clickCount: number
        Equals(obj: any): boolean
        Equals(other: ManipulatorActivationFilter): boolean
        GetHashCode(): number
        Matches(e: IMouseEvent): boolean
        Matches(e: IPointerEvent): boolean
    }
    export interface IManipulator {
        target: VisualElement
    }
    export class Manipulator implements IManipulator {
        target: VisualElement
    }
    export class MouseManipulator extends Manipulator implements IManipulator {
        activators: List<ManipulatorActivationFilter>
    }
    export class PointerManipulator extends MouseManipulator implements IManipulator {
    }
    export class Clickable extends PointerManipulator implements IManipulator {
        lastMousePosition: Vector2
        constructor(handler: Function, delay: number, interval: number)
        constructor(handler: Function)
    }
    export class Button extends TextElement {
        static ussClassName: string
        clickable: Clickable
        constructor()
        constructor(clickEvent: Function)
    }
}