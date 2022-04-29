declare module "EventMaster" {
    import { Delegate, Type } from "System"

    interface DelegateWrapper {
        GetWrapped(): Delegate
    }

    export function Add(type: { new(): any }, name: string, handler: Function): DelegateWrapper
    export function Add(obj: any, name: string, handler: Function): DelegateWrapper
    export function Remove(type: { new(): any }, name: string, wrapper: DelegateWrapper): void
    export function Remove(obj: any, name: string, wrapper: DelegateWrapper): void

}