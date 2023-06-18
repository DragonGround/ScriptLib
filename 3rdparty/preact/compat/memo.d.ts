import { FunctionComponent } from 'preact';
export declare function memo<P = {}>(c: FunctionComponent<P>, comparer?: (prev: P, next: P) => boolean): FunctionComponent<P>;
