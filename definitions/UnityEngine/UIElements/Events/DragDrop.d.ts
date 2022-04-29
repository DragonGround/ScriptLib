


declare module "UnityEngine/UIElements" {
    import { IDisposable } from "System"
    import { EventModifiers } from "IMGUI"
    import { Vector2 } from "UnityEngine"

    export interface IDragAndDropEvent {
    }

    export class DragAndDropEventBase<T> extends MouseEventBase<T> implements IDragAndDropEvent, IDisposable, IMouseEvent, IMouseEventInternal {
    }

    export class DragExitedEvent extends DragAndDropEventBase<DragExitedEvent> implements IDragAndDropEvent, IDisposable, IMouseEvent, IMouseEventInternal {
        static GetPooled<T>(): T
        static GetPooled(systemEvent: Event): DragExitedEvent
        static GetPooled(position: Vector2, button: number, clickCount: number, delta: Vector2, modifiers: EventModifiers): any
        static GetPooled(triggerEvent: IMouseEvent): any

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

        constructor()

        Dispose(): void
    }

    export class DragUpdatedEvent extends DragAndDropEventBase<DragUpdatedEvent> implements IDragAndDropEvent, IDisposable, IMouseEvent, IMouseEventInternal {
        static GetPooled<T>(): T
        static GetPooled(systemEvent: Event): DragUpdatedEvent
        static GetPooled(position: Vector2, button: number, clickCount: number, delta: Vector2, modifiers: EventModifiers): any
        static GetPooled(triggerEvent: IMouseEvent): any

        constructor()
    }

    export class DragPerformEvent extends DragAndDropEventBase<DragPerformEvent> implements IDragAndDropEvent, IDisposable, IMouseEvent, IMouseEventInternal {
        constructor()
    }

    export class DragEnterEvent extends DragAndDropEventBase<DragEnterEvent> implements IDragAndDropEvent, IDisposable, IMouseEvent, IMouseEventInternal {
        constructor()
    }

    export class DragLeaveEvent extends DragAndDropEventBase<DragLeaveEvent> implements IDragAndDropEvent, IDisposable, IMouseEvent, IMouseEventInternal {
        constructor()
    }
}