declare module "System/Collections/Generic" {
    export interface IEnumerable<T = void> {
        GetEnumerator(): IEnumerator<T>
    }

    export interface IEnumerator<T = void> {
        Current: T
        MoveNext(): boolean
        Reset(): void
    }
}