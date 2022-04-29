

declare module "UnityEngine/UIElements" {
    import { Char, IDisposable } from "System"
    import { KeyCode } from "UnityEngine"
    import { EventModifiers } from "IMGUI"

    export interface IKeyboardEvent {
        modifiers: EventModifiers
        character: Char
        keyCode: KeyCode
        shiftKey: boolean
        ctrlKey: boolean
        commandKey: boolean
        altKey: boolean
        actionKey: boolean
    }

    export class KeyboardEventBase<T> extends EventBase<T> implements IDisposable, IKeyboardEvent {
        static GetPooled<T>(): T
        static GetPooled<T>(c: Char, keyCode: KeyCode, modifiers: EventModifiers): T
        static GetPooled<T>(systemEvent: Event): T
        modifiers: EventModifiers
        character: Char
        keyCode: KeyCode
        shiftKey: boolean
        ctrlKey: boolean
        commandKey: boolean
        altKey: boolean
        actionKey: boolean
    }

    export class KeyDownEvent extends KeyboardEventBase<KeyDownEvent> implements IDisposable, IKeyboardEvent {
        constructor()
    }

    export class KeyUpEvent extends KeyboardEventBase<KeyUpEvent> implements IDisposable, IKeyboardEvent {
        constructor()
    }
}