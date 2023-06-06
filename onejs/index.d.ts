import { StateUpdater } from "preact/hooks";
export declare function useEventfulState<T, K extends keyof T>(obj: T, propertyName: K, eventName?: string): [T[K], StateUpdater<T[K]>];
export declare function useEvent<TEventName extends string, TCallback>(obj: HasCSharpEventBase<TEventName, TCallback>, eventName: TEventName, callback: TCallback, dependencies?: any[]): void;
export declare type HasCsharpEvent<EventName extends string, TVal> = HasCSharpEventBase<EventName, (val: TVal) => void>;
export declare type HasCsharpEvent2<EventName extends string, TVal1, TVal2> = HasCSharpEventBase<EventName, (val1: TVal1, val2: TVal2) => void>;
export declare type HasCsharpEvent3<EventName extends string, TVal1, TVal2, TVal3> = HasCSharpEventBase<EventName, (val1: TVal1, val2: TVal2, val3: TVal3) => void>;
export declare type HasEventfulProperty<PropName extends string, TVal> = Record<PropName, TVal> & HasCsharpEvent<`On${Capitalize<PropName>}Changed`, TVal>;
declare type HasCSharpEventBase<EventName extends string, TCallback> = Record<`add_${EventName}` | `remove_${EventName}`, (handler: TCallback) => void>;
export {};
