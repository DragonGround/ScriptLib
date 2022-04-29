
declare module "System/Collections/Generic" {
    export interface IListAny {
    }
    
    export interface IList<T> {
        Item: T
        IndexOf(item: T): number
        Insert(index: number, item: T): void
        RemoveAt(index: number): void
    }
}