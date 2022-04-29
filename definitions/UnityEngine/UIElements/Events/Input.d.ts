

declare module "UnityEngine/UIElements" {
    import { IDisposable } from "System"

    export class InputEvent extends EventBase<InputEvent> implements IDisposable {
        static GetPooled<T>(): T
        static GetPooled(previousData: string, newData: string): InputEvent
        previousData: string
        newData: string
        constructor()
    }
}