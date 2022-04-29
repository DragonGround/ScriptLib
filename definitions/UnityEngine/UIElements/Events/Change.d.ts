

declare module "UnityEngine/UIElements" {
    import { IDisposable } from "System"

    export interface IChangeEvent {
    }

    export class ChangeEvent<T> extends EventBase<T> implements IChangeEvent, IDisposable {
        static GetPooled<T>(): T
        static GetPooled<T>(previousValue: any, newValue: any): ChangeEvent<T>
        previousValue: T
        newValue: T
        constructor()
        Dispose(): void
    }
}