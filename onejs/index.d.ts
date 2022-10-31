import { StateUpdater } from "preact/hooks";
export declare function useEventfulState<T, K extends keyof T>(obj: T, key: K): [T[K], StateUpdater<T[K]>];
