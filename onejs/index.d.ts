import { StateUpdater } from "preact/hooks";
import { Signal } from "preact/signals";
export declare function useEventfulState<T, K extends keyof T>(obj: T, propertyName: K, eventName?: string): [T[K], StateUpdater<T[K]>];
export declare function eventfulSignal<T, K extends keyof T>(obj: T, propertyName: K, eventName?: string): Signal<T[K]>;
