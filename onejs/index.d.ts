import { StateUpdater } from "preact/hooks";
export declare function useEventfulState<T, K extends keyof T>(obj: T, propertyName: K, eventName?: string): [T[K], StateUpdater<T[K]>];
export declare function useEvent<TEventName extends string, TCallback>(obj: Record<`add_${TEventName}` | `remove_${TEventName}`, (callback: TCallback) => void>, eventName: TEventName, callback: TCallback, dependencies?: any[]): void;
