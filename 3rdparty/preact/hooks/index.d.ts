/**
 * @param {import('./index').StateUpdater<any>} [initialState]
 */
export declare function useState(initialState?: any): any;
/**
 * @param {import('./index').Reducer<any, any>} reducer
 * @param {import('./index').StateUpdater<any>} initialState
 * @param {(initialState: any) => void} [init]
 * @returns {[ any, (state: any) => void ]}
 */
export declare function useReducer(reducer: any, initialState: any, init?: any): any;
/**
 * @param {import('./internal').Effect} callback
 * @param {any[]} args
 */
export declare function useEffect(callback: any, args: any): void;
/**
 * @param {import('./internal').Effect} callback
 * @param {any[]} args
 */
export declare function useLayoutEffect(callback: any, args: any): void;
export declare function useRef(initialValue: any): any;
/**
 * @param {object} ref
 * @param {() => object} createHandle
 * @param {any[]} args
 */
export declare function useImperativeHandle(ref: any, createHandle: any, args: any): void;
/**
 * @param {() => any} factory
 * @param {any[]} args
 */
export declare function useMemo(factory: any, args: any): any;
/**
 * @param {() => void} callback
 * @param {any[]} args
 */
export declare function useCallback(callback: any, args: any): any;
/**
 * @param {import('./internal').PreactContext} context
 */
export declare function useContext(context: any): any;
/**
 * Display a custom label for a custom hook for the devtools panel
 * @type {<T>(value: T, cb?: (value: T) => string | number) => void}
 */
export declare function useDebugValue(value: any, formatter: any): void;
/**
 * @param {(error: any) => void} cb
 */
export declare function useErrorBoundary(cb: any): any[];
