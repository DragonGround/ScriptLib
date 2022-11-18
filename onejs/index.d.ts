import { StateUpdater } from "preact/hooks";
export declare function useEventfulState<T, K extends keyof T>(obj: T, propertyName: K, eventName?: string): [T[K], StateUpdater<T[K]>];
