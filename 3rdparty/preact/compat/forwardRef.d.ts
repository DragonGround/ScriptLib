import { ComponentChild, FunctionalComponent, Ref } from 'preact';
export declare const REACT_FORWARD_SYMBOL: number | symbol;
interface ForwardFn<P = {}, T = any> {
    (props: P, ref: Ref<T>): ComponentChild;
    displayName?: string;
}
export declare function forwardRef<R, P = {}>(fn: ForwardFn<P, R>): FunctionalComponent<Omit<P, 'ref'> & {
    ref?: Ref<R>;
}>;
export {};
