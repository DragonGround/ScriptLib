
declare module "System/Collections" {
    export interface IEnumerableAny {
        GetEnumerator(): IEnumeratorAny
    }

    export interface IEnumeratorAny {
        Current: any
        MoveNext(): boolean
        Reset(): void
    }
}