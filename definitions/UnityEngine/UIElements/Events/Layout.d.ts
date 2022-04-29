

declare module "UnityEngine/UIElements" {
    import { IDisposable } from "System"
    import { Rect } from "UnityEngine"

    export class GeometryChangedEvent extends EventBase<GeometryChangedEvent> implements IDisposable {
        static GetPooled<T>(): T
        static GetPooled(oldRect: Rect, newRect: Rect): GeometryChangedEvent
        oldRect: Rect
        newRect: Rect
        constructor()
    }
}