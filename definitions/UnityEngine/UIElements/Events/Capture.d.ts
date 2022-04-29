

declare module "UnityEngine/UIElements" {
    import { IDisposable } from "System"

    export interface IPointerCaptureEventInternal {
        pointerId: number
    }

    export interface IPointerCaptureEvent {
    }

    export interface IMouseCaptureEvent {
    }

    export class PointerCaptureEventBase<T> extends EventBase<T> implements IPointerCaptureEvent, IPointerCaptureEventInternal, IDisposable {
        static GetPooled<T>(): T
        static GetPooled<T>(target: IEventHandler, relatedTarget: IEventHandler, pointerId: number): T
        relatedTarget: IEventHandler
        pointerId: number
        Dispose(): void
    }

    export class MouseCaptureEventBase<T> extends PointerCaptureEventBase<T> implements IPointerCaptureEvent, IPointerCaptureEventInternal, IDisposable, IMouseCaptureEvent {
        static GetPooled<T>(): T
        static GetPooled(target: IEventHandler, relatedTarget: IEventHandler): any
        relatedTarget: IEventHandler
    }

    export class MouseCaptureEvent extends MouseCaptureEventBase<MouseCaptureEvent> implements IPointerCaptureEvent, IPointerCaptureEventInternal, IDisposable, IMouseCaptureEvent {
        constructor()
    }

    export class MouseCaptureOutEvent extends MouseCaptureEventBase<MouseCaptureOutEvent> implements IPointerCaptureEvent, IPointerCaptureEventInternal, IDisposable, IMouseCaptureEvent {
        constructor()
    }

    export class PointerCaptureEvent extends PointerCaptureEventBase<PointerCaptureEvent> implements IPointerCaptureEvent, IPointerCaptureEventInternal, IDisposable {
        constructor()
    }

    export class PointerCaptureOutEvent extends PointerCaptureEventBase<PointerCaptureOutEvent> implements IPointerCaptureEvent, IPointerCaptureEventInternal, IDisposable {
        constructor()
    }
}