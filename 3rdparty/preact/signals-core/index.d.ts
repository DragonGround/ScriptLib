declare type Node = {
    _flags: number;
    _source: Signal;
    _prevSource?: Node;
    _nextSource?: Node;
    _target: Computed | Effect;
    _prevTarget?: Node;
    _nextTarget?: Node;
    _version: number;
    _rollbackNode?: Node;
};
declare function batch<T>(callback: () => T): T;
declare class Signal<T = any> {
    _value: unknown;
    _version: number;
    _node?: Node;
    _targets?: Node;
    constructor(value?: T);
    _refresh(): boolean;
    _subscribe(node: Node): void;
    _unsubscribe(node: Node): void;
    subscribe(fn: (value: T) => void): () => void;
    valueOf(): T;
    toString(): string;
    peek(): T;
    get value(): T;
    set value(value: T);
}
declare function Signal(this: Signal, value?: unknown): void;
declare function signal<T>(value: T): Signal<T>;
declare class Computed<T = any> extends Signal<T> {
    _compute: () => T;
    _sources?: Node;
    _effects?: Effect;
    _globalVersion: number;
    _flags: number;
    constructor(compute: () => T);
    _notify(): void;
    get value(): T;
}
declare function Computed(this: Computed, compute: () => unknown): void;
declare namespace Computed {
    var prototype: Computed<any>;
}
interface ReadonlySignal<T = any> extends Signal<T> {
    readonly value: T;
}
declare function computed<T>(compute: () => T): ReadonlySignal<T>;
declare class Effect {
    _compute: () => unknown;
    _cleanup?: unknown;
    _sources?: Node;
    _effects?: Effect;
    _nextNestedEffect?: Effect;
    _nextBatchedEffect?: Effect;
    _flags: number;
    constructor(compute: () => void, flags: number);
    _callback(): void;
    _start(): () => void;
    _notify(): void;
    _dispose(): void;
}
declare function Effect(this: Effect, compute: () => void, flags: number): void;
declare function effect(compute: () => unknown): () => void;
export { signal, computed, effect, batch, Signal, ReadonlySignal };
