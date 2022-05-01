

declare module "System/Collections/Generic" {
    import { IEnumeratorAny } from "System/Collections"

    export interface IEnumerable<T = void> {
        GetEnumerator(): IEnumerator<T>
    }

    export interface IEnumerator<T = void> {
        Current: T
    }
}