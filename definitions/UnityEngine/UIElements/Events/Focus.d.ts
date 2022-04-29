

declare module "UnityEngine/UIElements" {
    import { IDisposable } from "System"

    export interface IFocusEvent {
        relatedTarget: Focusable
        direction: FocusChangeDirection
    }

    export class FocusEventBase<T> extends EventBase<T> implements IFocusEvent, IDisposable {
        static GetPooled<T>(): T
        static GetPooled<T>(target: IEventHandler, relatedTarget: Focusable, direction: FocusChangeDirection, focusController: FocusController, bIsFocusDelegated: boolean): T
        relatedTarget: Focusable
        direction: FocusChangeDirection
    }

    export class FocusOutEvent extends FocusEventBase<FocusOutEvent> implements IFocusEvent, IDisposable {
        constructor()
    }

    export class FocusInEvent extends FocusEventBase<FocusInEvent> implements IFocusEvent, IDisposable {
        constructor()
    }

    export class BlurEvent extends FocusEventBase<BlurEvent> implements IFocusEvent, IDisposable {
        constructor()
    }

    export class FocusEvent extends FocusEventBase<FocusEvent> implements IFocusEvent, IDisposable {
        constructor()
    }
}