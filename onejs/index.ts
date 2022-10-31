import { StateUpdater, useEffect, useState } from "preact/hooks"


export function useEventfulState<T, K extends keyof T>(obj: T, key: K): [T[K], StateUpdater<T[K]>] {
    const [val, setVal] = useState(obj[key] as unknown as T[K])

    let addEventFunc = obj[`add_On${String(key)}Changed`] as Function
    let removeEventFunc = obj[`remove_On${String(key)}Changed`] as Function
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
    return [val, setVal]
}