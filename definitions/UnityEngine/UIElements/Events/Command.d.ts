

declare module "UnityEngine/UIElements" {
    import { IDisposable } from "System"
    
    export interface ICommandEvent {
        commandName: string
    }

    export class CommandEventBase<T> extends EventBase<T> implements ICommandEvent, IDisposable {
        static GetPooled<T>(): T
        static GetPooled(systemEvent: Event): any
        static GetPooled(commandName: string): any
        commandName: string
        Dispose(): void
    }

    export class ValidateCommandEvent extends CommandEventBase<ValidateCommandEvent> implements ICommandEvent, IDisposable {
        constructor()
    }

    export class ExecuteCommandEvent extends CommandEventBase<ExecuteCommandEvent> implements ICommandEvent, IDisposable {
        constructor()
    }
}