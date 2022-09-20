import { signal, computed, batch, effect, Signal, type ReadonlySignal } from "preact/signals-core";
export { signal, computed, batch, effect, Signal, type ReadonlySignal };
export declare function useSignal<T>(value: T): Signal<T>;
export declare function useComputed<T>(compute: () => T): ReadonlySignal<T>;
