import { Dom } from "OneJS/Dom"
import { VisualElement } from "UnityEngine/UIElements"
import { MutableRef, StateUpdater, useCallback, useEffect, useState } from "preact/hooks"

/**
 * A convenience hook that, like useState(), returns a stateful value and a function to update it.
 * This one ties the value to a property on a C# object.
 * It takes care of setting up and cleaning up the C# value changed event automatically.
 * Refer here for more info: https://onejs.com/docs/uiworkflow#reducing-boilerplates
 *
 * @param obj The C# object containing the property to be observed
 * @param propertyName The name of the property to be observed
 * @param eventName The name of the event to be observed. If not specified, it defaults to "On{propertyName}Changed"
 * @returns
 */
export function useEventfulState<
    T extends { [k in `On${K}Changed`]: OneJS.Event<(value: T[K]) => void> },
    K extends string & keyof T
>(obj: T, propertyName: K): [T[K], StateUpdater<T[K]>]
export function useEventfulState<T, K extends string & keyof T, E extends OneJS.EventKeys<T>>(
    obj: T,
    propertyName: K,
    eventName: E
): [T[K], StateUpdater<T[K]>]
export function useEventfulState<
    T extends { [k in keyof T]: k extends E ? OneJS.Event<(value: T[K]) => void> : any },
    K extends string & keyof T,
    E extends OneJS.EventKeys<T>
>(obj: T, propertyName: K, eventName?: E): [T[K], StateUpdater<T[K]>] {
    // Guarantee the component is re-rendered on changed event,
    //  by ensuring that the state is always updated with a different identity
    //  to handle the case where the object property is an array
    //  and the changed event is raised with the same array instance.
    const [state, setState] = useState({ value: obj?.[propertyName] })
    const setValue = useCallback((value) => setState({ value }), [])

    useEffect(() => {
        if (obj == null) return

        eventName ??= `On${propertyName}Changed` as E
        setValue(obj[propertyName])
        return onejs.subscribe(obj, eventName, setValue as OneJS.EventGenericType<T[E]>)
    }, [obj])

    const setValWrapper = useCallback(
        (v: T[K]) => {
            if (obj == null) return

            obj[propertyName] = v
            // setVal(v) // No need to set the state here in JS. The event handling stuff above will do.
        },
        [obj]
    )

    return [state.value as T[K], setValWrapper]
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
export function useEvent<T, E extends OneJS.EventKeys<T>>(
    obj: T,
    eventName: E,
    callback: OneJS.EventGenericType<T[E]>,
    dependencies: any[] = []
) {
    useEffect(() => {
        if (obj == null) return

        return onejs.subscribe(obj, eventName, callback)
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
export function useRefEvent<T extends VisualElement, E extends OneJS.EventKeys<T>>(
    ref: MutableRef<Dom>,
    eventName: E,
    callback: OneJS.EventGenericType<T[E]>,
    dependencies: any[] = []
) {
    useEffect(() => {
        if (callback == null) return

        const obj = ref.current.ve as T
        return onejs.subscribe(obj, eventName, callback)
    }, dependencies)
}

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
export type HasCsharpEvent<EventName extends string, TVal> = HasCSharpEventBase<EventName, (val: TVal) => void>

export type HasCsharpEvent2<EventName extends string, TVal1, TVal2> = HasCSharpEventBase<
    EventName,
    (val1: TVal1, val2: TVal2) => void
>

export type HasCsharpEvent3<EventName extends string, TVal1, TVal2, TVal3> = HasCSharpEventBase<
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
export type HasEventfulProperty<PropName extends string, TVal> = Record<PropName, TVal> &
    HasCsharpEvent<`On${Capitalize<PropName>}Changed`, TVal>

type HasCSharpEventBase<EventName extends string, TCallback> = Record<
    `add_${EventName}` | `remove_${EventName}`,
    (handler: TCallback) => void
>
