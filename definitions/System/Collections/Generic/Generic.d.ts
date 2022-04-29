

declare module "System/Collections/Generic" {
    import { IEnumeratorAny } from "System/Collections"

    export interface IEnumerable<T> {
        GetEnumerator(): IEnumerator<T>
        GetEnumerator(): IEnumeratorAny
    }

    export interface IEnumerator<T> {
        Current: T
    }
}