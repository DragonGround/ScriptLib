

declare module "System/Collections/Generic" {

    export interface ListEnumerator<T> extends IEnumerator<T> {
        Current: T
        Dispose(): void
    }

    export class List<T> {
        [index: number]: T
        Count: number

        constructor(items: T[])
        constructor(capacity: number)
        constructor(collection: IEnumerable<T>)

        Add(item: T): void
        AddRange(collection: IEnumerable<T>): void
        // AsReadOnly(): ReadOnlyCollection<T>
        // BinarySearch(index: number, count: number, item: T, comparer: IComparer<T>): number
        BinarySearch(item: T): number
        // BinarySearch(item: T, comparer: IComparer<T>): number
        Clear(): void
        Contains(item: T): boolean
        CopyTo(array: T[]): void
        CopyTo(index: number, array: T[], arrayIndex: number, count: number): void
        CopyTo(array: T[], arrayIndex: number): void
        // Exists(match: Predicate<T>): boolean
        // Find(match: Predicate<T>): T
        // FindAll(match: Predicate<T>): List<T>
        // FindIndex(match: Predicate<T>): number
        // FindIndex(startIndex: number, match: Predicate<T>): number
        // FindIndex(startIndex: number, count: number, match: Predicate<T>): number
        // FindLast(match: Predicate<T>): T
        // FindLastIndex(match: Predicate<T>): number
        // FindLastIndex(startIndex: number, match: Predicate<T>): number
        // FindLastIndex(startIndex: number, count: number, match: Predicate<T>): number
        ForEach(action: Function): void
        GetEnumerator(): ListEnumerator<T>
        GetRange(index: number, count: number): List<T>
        IndexOf(item: T): number
        IndexOf(item: T, index: number): number
        IndexOf(item: T, index: number, count: number): number
        Insert(index: number, item: T): void
        InsertRange(index: number, collection: IEnumerable<T>): void
        LastIndexOf(item: T): number
        LastIndexOf(item: T, index: number): number
        LastIndexOf(item: T, index: number, count: number): number
        Remove(item: T): boolean
        // RemoveAll(match: Predicate<T>): number
        RemoveAt(index: number): void
        RemoveRange(index: number, count: number): void
        Reverse(): void
        Reverse(index: number, count: number): void
        Sort(): void
        // Sort(comparer: IComparer<T>): void
        // Sort(index: number, count: number, comparer: IComparer<T>): void
        // Sort(comparison: Comparison<T>): void
        ToArray(): T[]
        TrimExcess(): void
        // TrueForAll(match: Predicate<T>): boolean
    }
}