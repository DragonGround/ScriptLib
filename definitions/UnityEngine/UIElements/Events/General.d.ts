


declare module "UnityEngine/UIElements" {
    import { IDisposable } from "System"
    import { Vector2 } from "UnityEngine"
    import { EventModifiers } from "IMGUI"

    export class EventBaseAny implements IDisposable {
        eventTypeId: number
        timestamp: number
        bubbles: boolean
        tricklesDown: boolean
        target: IEventHandler
        isPropagationStopped: boolean
        isImmediatePropagationStopped: boolean
        isDefaultPrevented: boolean
        propagationPhase: PropagationPhase
        currentTarget: IEventHandler
        dispatch: boolean
        imguiEvent: Event
        originalMousePosition: Vector2
        StopPropagation(): void
        StopImmediatePropagation(): void
        PreventDefault(): void
        Dispose(): void
    }

    export class EventBase<T> extends EventBaseAny implements IDisposable {
        static TypeId(): number
        static GetPooled<T>(): T
        eventTypeId: number
        Dispose(): void
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

    export interface IMouseEventInternal {
        triggeredByOS: boolean
        recomputeTopElementUnderMouse: boolean
        sourcePointerEvent: IPointerEvent
    }

    export class MouseEventBase<T> extends EventBase<T> implements IDisposable, IMouseEvent, IMouseEventInternal {
        static GetPooled<T>(): T
        static GetPooled<T>(systemEvent: Event): T
        static GetPooled<T>(position: Vector2, button: number, clickCount: number, delta: Vector2, modifiers: EventModifiers): T
        static GetPooled<T>(triggerEvent: IMouseEvent): T
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
        currentTarget: IEventHandler
        triggeredByOS: boolean
        recomputeTopElementUnderMouse: boolean
        sourcePointerEvent: IPointerEvent
        Dispose(): void
    }
}