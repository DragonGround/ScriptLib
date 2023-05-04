import { StateUpdater, useCallback, useEffect, useState } from "preact/hooks"
import { computed, effect, Signal, signal } from "preact/signals"

/**
 * A convenience hook that, like useState(), returns a stateful value and a function to update it. This one ties the value to a property on a C# object. It takes care of setting up and cleaning up the C# value changed event automatically. Refer here for more info: https://onejs.com/dataflow#reducing-boilerplates
 * 
 * @param obj The C# object containing the property to be observed
 * @param propertyName The name of the property to be observed
 * @param eventName The name of the event to be observed. If not specified, it defaults to "On{propertyName}Changed"
 * @returns 
 */
export function useEventfulState<T, K extends keyof T>(obj: T, propertyName: K, eventName?: string): [T[K], StateUpdater<T[K]>] {
    const [val, setVal] = useState(obj[propertyName] as unknown as T[K])
    const [, updateState] = useState({})
    const forceUpdate = useCallback(() => updateState({}), [])

    eventName = eventName || "On" + String(propertyName) + "Changed"
    let addEventFunc = obj[`add_${eventName}`] as Function
    let removeEventFunc = obj[`remove_${eventName}`] as Function

    if (!addEventFunc || !removeEventFunc)
        throw new Error(`[useEventfulState] The object does not have an event named ${eventName}`)

    let onValueChangedCallback = function (v) {
        setVal(v)
        forceUpdate()
    }

    function removeHandler() {
        removeEventFunc.call(obj, onValueChangedCallback)
    }

    useEffect(() => {
        addEventFunc.call(obj, onValueChangedCallback)
        onEngineReload(removeHandler)
        return () => {
            removeHandler()
            unregisterOnEngineReload(removeHandler)
        }
    }, [])
    const setValWrapper = (v) => {
        obj[propertyName] = v
        // setVal(v) // No need to set the state here in JS. The event handling stuff above will do.
    }
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
export function useEvent<TEventName extends string, TCallback>(
    obj: Record<
        `add_${TEventName}` | `remove_${TEventName}`,
        (callback: TCallback) => void
    >,
    eventName: TEventName,
    callback: TCallback,
    dependencies: any[] = []
) {
    const remove = obj[`remove_${eventName}`].bind(obj)
    function removeHandler() {
        remove(callback)
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