

declare module "UnityEngine/UIElements" {
    import { IDisposable } from "System"
    import { Vector3 } from "UnityEngine"

    export class MouseDownEvent extends MouseEventBase<MouseDownEvent> implements IDisposable, IMouseEvent, IMouseEventInternal {
        static GetPooled<T>(): T
        static GetPooled(systemEvent: Event): MouseDownEvent
        constructor()
    }

    export class MouseUpEvent extends MouseEventBase<MouseUpEvent> implements IDisposable, IMouseEvent, IMouseEventInternal {
        static GetPooled<T>(): T
        static GetPooled(systemEvent: Event): MouseUpEvent
        constructor()
    }

    export class MouseMoveEvent extends MouseEventBase<MouseMoveEvent> implements IDisposable, IMouseEvent, IMouseEventInternal {
        static GetPooled<T>(): T
        static GetPooled(systemEvent: Event): MouseMoveEvent
        constructor()
    }

    export class WheelEvent extends MouseEventBase<WheelEvent> implements IDisposable, IMouseEvent, IMouseEventInternal {
        static GetPooled<T>(): T
        static GetPooled(systemEvent: Event): WheelEvent
        delta: Vector3
        constructor()
    }

    export class MouseEnterWindowEvent extends MouseEventBase<MouseEnterWindowEvent> implements IDisposable, IMouseEvent, IMouseEventInternal {
        constructor()
    }

    export class MouseLeaveWindowEvent extends MouseEventBase<MouseLeaveWindowEvent> implements IDisposable, IMouseEvent, IMouseEventInternal {
        static GetPooled<T>(): T
        static GetPooled(systemEvent: Event): MouseLeaveWindowEvent
        constructor()
    }

    export class MouseEnterEvent extends MouseEventBase<MouseEnterEvent> implements IDisposable, IMouseEvent, IMouseEventInternal {
        constructor()
    }

    export class MouseLeaveEvent extends MouseEventBase<MouseLeaveEvent> implements IDisposable, IMouseEvent, IMouseEventInternal {
        constructor()
    }

    export class MouseOverEvent extends MouseEventBase<MouseOverEvent> implements IDisposable, IMouseEvent, IMouseEventInternal {
        constructor()
    }

    export class MouseOutEvent extends MouseEventBase<MouseOutEvent> implements IDisposable, IMouseEvent, IMouseEventInternal {
        constructor()
    }
}