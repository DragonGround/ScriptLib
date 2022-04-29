

declare module "UnityEngine/UIElements" {
    import { IDisposable } from "System"
    import { EventModifiers } from "IMGUI"
    import { PenStatus, PenData } from "InputLegacy"
    import { Vector3, Vector2 } from "UnityEngine"

    export interface IPointerEventInternal {
        triggeredByOS: boolean
        recomputeTopElementUnderPointer: boolean
    }

    export class PointerEventBase<T> extends EventBase<T> implements IDisposable, IPointerEvent, IPointerEventInternal {
        static GetPooled<T>(): T
        static GetPooled<T>(systemEvent: Event): T
        static GetPooled<T>(touch: Touch, modifiers: EventModifiers): T
        static GetPooled<T>(pen: PenData, modifiers: EventModifiers): T
        static GetPooled<T>(triggerEvent: IPointerEvent): T
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
        currentTarget: IEventHandler

        triggeredByOS: boolean
        recomputeTopElementUnderPointer: boolean
    }

    export class PointerDownEvent extends PointerEventBase<PointerDownEvent> implements IDisposable, IPointerEvent, IPointerEventInternal {
        constructor()
    }

    export class PointerUpEvent extends PointerEventBase<PointerUpEvent> implements IDisposable, IPointerEvent, IPointerEventInternal {
        constructor()
    }

    export class PointerMoveEvent extends PointerEventBase<PointerMoveEvent> implements IDisposable, IPointerEvent, IPointerEventInternal {
        constructor()
    }

    export class PointerEnterEvent extends PointerEventBase<PointerEnterEvent> implements IDisposable, IPointerEvent, IPointerEventInternal {
        constructor()
    }

    export class PointerLeaveEvent extends PointerEventBase<PointerLeaveEvent> implements IDisposable, IPointerEvent, IPointerEventInternal {
        constructor()
    }

    export class PointerOverEvent extends PointerEventBase<PointerOverEvent> implements IDisposable, IPointerEvent, IPointerEventInternal {
        constructor()
    }

    export class PointerOutEvent extends PointerEventBase<PointerOutEvent> implements IDisposable, IPointerEvent, IPointerEventInternal {
        constructor()
    }

    export class PointerStationaryEvent extends PointerEventBase<PointerStationaryEvent> implements IDisposable, IPointerEvent, IPointerEventInternal {
        constructor()
    }

    export class PointerCancelEvent extends PointerEventBase<PointerCancelEvent> implements IDisposable, IPointerEvent, IPointerEventInternal {
        constructor()
    }
}