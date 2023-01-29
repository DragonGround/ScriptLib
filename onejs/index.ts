import { StateUpdater, useEffect, useState } from "preact/hooks"
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

    eventName = eventName || "On" + String(propertyName) + "Changed"
    let addEventFunc = obj[`add_${eventName}`] as Function
    let removeEventFunc = obj[`remove_${eventName}`] as Function

    if (!addEventFunc || !removeEventFunc)
        throw new Error(`[useEventfulState] The object does not have an event named ${eventName}`)

    let onValueChangedCallback = function (v) {
        setVal(v)
    }

    useEffect(() => {
        addEventFunc.call(obj, onValueChangedCallback)
        onEngineReload(() => {
            removeEventFunc.call(obj, onValueChangedCallback)
        })
        return () => {
            removeEventFunc.call(obj, onValueChangedCallback)
        }
    }, [])
    const setValWrapper = (v) => {
        obj[propertyName] = v
        // setVal(v) // No need to set the state here in JS. The event handling stuff above will do.
    }
    return [val, setValWrapper]
}

export function eventfulSignal<T, K extends keyof T>(obj: T, propertyName: K, eventName?: string): Signal<T[K]> {
    const sig = signal(obj[propertyName] as unknown as T[K])

    eventName = eventName || "On" + String(propertyName) + "Changed"
    let addEventFunc = obj[`add_${eventName}`] as Function
    let removeEventFunc = obj[`remove_${eventName}`] as Function

    if (!addEventFunc || !removeEventFunc)
        throw new Error(`[eventfulSignal] The object does not have an event named ${eventName}`)

    let onValueChangedCallback = function (v) {
        sig.value = v
    }

    addEventFunc.call(obj, onValueChangedCallback)
    onEngineReload(() => {
        removeEventFunc.call(obj, onValueChangedCallback)
    })
    return sig
}