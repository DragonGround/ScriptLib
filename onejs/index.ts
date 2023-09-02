import {
    MutableRef,
    StateUpdater,
    useCallback,
    useEffect,
    useState,
} from "preact/hooks"

/**
 * A convenience hook that, like useState(), returns a stateful value and a function to update it.
 * This one ties the value to a property on a C# object.
 * It takes care of setting up and cleaning up the C# value changed event automatically.
 * Refer here for more info: https://onejs.com/dataflow#reducing-boilerplates
 *
 * @param obj The C# object containing the property to be observed
 * @param propertyName The name of the property to be observed
 * @param eventName The name of the event to be observed. If not specified, it defaults to "On{propertyName}Changed"
 * @returns
 */
export function useEventfulState<
    T extends {
        [k in K | `add_${E}` | `remove_${E}`]: k extends
            | `add_${E}`
            | `remove_${E}`
            ? (handler: (value: T[K]) => any) => void
            : any
    },
    K extends string & keyof T,
    E extends string = `On${K}Changed`
>(obj: T, propertyName: K, eventName?: E): [T[K], StateUpdater<T[K]>] {
    const [val, setVal] = useState<T[K]>(obj[propertyName])

    eventName ||= `On${propertyName}Changed` as E
    const addEventFunc = obj[`add_${eventName}`]
    const removeEventFunc = obj[`remove_${eventName}`]

    if (!addEventFunc || !removeEventFunc)
        throw new Error(
            `[useEventfulState] The object does not have an event named ${eventName}`
        )

    function removeHandler() {
        removeEventFunc.call(obj, setVal)
    }

    useEffect(() => {
        setVal(obj[propertyName])
        addEventFunc.call(obj, setVal)
        onEngineReload(removeHandler)
        return () => {
            removeHandler()
            unregisterOnEngineReload(removeHandler)
        }
    }, [obj])

    const setValWrapper = useCallback(
        (v: T[K]) => {
            obj[propertyName] = v
            // setVal(v) // No need to set the state here in JS. The event handling stuff above will do.
        },
        [obj]
    )

    return [val, setValWrapper]
}

/**
 * Run a callback when a C# event fires. The callback will be cleaned up on
 * unmount and when the OneJS engine reloads.
 * @param obj The object that the C# event is attached to.
 * @param eventName The variable name of the C# event.
 * @param callback The callback to run when the event fires.
 * @param dependencies: The dependencies to pass to useEffect. Previous versions
 * of the callback will be cleaned up any dependency changes.
 */
export function useEvent<
    T extends {
        [k in `add_${E}` | `remove_${E}`]: (
            handler: (...args: any) => any
        ) => void
    },
    E extends string
>(
    obj: T,
    eventName: E,
    callback: InferEventHandler<T[`add_${E}`]> &
        InferEventHandler<T[`remove_${E}`]>,
    dependencies: any[] = []
) {
    function removeHandler() {
        obj[`remove_${eventName}`](callback)
    }

    useEffect(() => {
        obj[`add_${eventName}`](callback)
        onEngineReload(removeHandler)
        return () => {
            removeHandler()
            unregisterOnEngineReload(removeHandler)
        }
    }, dependencies)
}

/**
 * Similar to useEvent() but accepts a ref that references the C# object instead.
 * Run a callback when a C# event fires. The callback will be cleaned up on
 * unmount and when the OneJS engine reloads.
 * @param ref The ref that contains the C# object.
 * @param eventName The variable name of the C# event.
 * @param callback The callback to run when the event fires.
 * @param dependencies: The dependencies to pass to useEffect. Previous versions
 * of the callback will be cleaned up any dependency changes.
 */
export function useRefEvent<
    T extends {
        [k in `add_${E}` | `remove_${E}`]: (
            handler: (...args: any) => any
        ) => void
    },
    E extends string
>(
    ref: MutableRef<Dom>,
    eventName: E,
    callback: InferEventHandler<T[`add_${E}`]> &
        InferEventHandler<T[`remove_${E}`]>,
    dependencies: any[] = []
) {
    function removeHandler() {
        const obj = ref.current.ve as T
        obj[`remove_${eventName}`](callback)
    }

    useEffect(() => {
        const obj = ref.current.ve as T
        obj[`add_${eventName}`](callback)
        onEngineReload(removeHandler)

        return () => {
            removeHandler()
            unregisterOnEngineReload(removeHandler)
        }
    }, dependencies)
}

type InferEventHandler<T> = T extends (
    handler: (...args: infer P) => infer R
) => void
    ? (...args: P) => R
    : never

/**
 * Describes a C# class or struct that contains a property that is a C# event.
 * For example, given a C# class that declares an event called `OnValueChanged`
 * whose delegates accept a single parameter of type `int`, you can declare the
 * type as follows:
 *
 *   type MyType = HasCsharpEvent<"OnValueChanged", number> & {
 *     // other properties...
 *   }
 *
 * For event delegates that take more than one value, see related types
 * `HasCsharpEvent2` and `HasCsharpEvent3`.
 */
export type HasCsharpEvent<EventName extends string, TVal> = HasCSharpEventBase<
    EventName,
    (val: TVal) => void
>

export type HasCsharpEvent2<
    EventName extends string,
    TVal1,
    TVal2
> = HasCSharpEventBase<EventName, (val1: TVal1, val2: TVal2) => void>

export type HasCsharpEvent3<
    EventName extends string,
    TVal1,
    TVal2,
    TVal3
> = HasCSharpEventBase<
    EventName,
    (val1: TVal1, val2: TVal2, val3: TVal3) => void
>

/**
 * A type that describes a C# class or struct that contains the following
 * properties/fields that conform to the useEventfulState() protocol:
 *
 * - a property with an arbitrary name and type
 * - a C# event named `On{PropertyName}Changed`, whose delegate accepts a single
 *   parameter of the same type as the property
 */
export type HasEventfulProperty<PropName extends string, TVal> = Record<
    PropName,
    TVal
> &
    HasCsharpEvent<`On${Capitalize<PropName>}Changed`, TVal>

type HasCSharpEventBase<EventName extends string, TCallback> = Record<
    `add_${EventName}` | `remove_${EventName}`,
    (handler: TCallback) => void
>
