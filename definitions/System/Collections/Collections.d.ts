
declare module "System/Collections" {
    export interface IEnumerableAny {
        GetEnumerator(): IEnumeratorAny
    }

    export interface IEnumeratorAny {
        get_Current(): any
        MoveNext(): boolean
        Reset(): void
    }
}