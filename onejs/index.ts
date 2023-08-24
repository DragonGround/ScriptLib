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
    [k in K | `add_${E}` | `remove_${E}`]: k extends `add_${E}` | `remove_${E}`
      ? (handler: (value: T[K]) => any) => void
      : any
  },
  K extends string & keyof T,
  E extends string = `On${K}Changed`
>(obj: T, propertyName: K, eventName?: E): [T[K], StateUpdater<T[K]>] {
  const [val, setVal] = useState<T[K]>(obj[propertyName])
  const [, updateState] = useState({})
  const forceUpdate = useCallback(() => updateState({}), [])

  eventName ||= `On${propertyName}Changed` as E
  const addEventFunc = obj[`add_${eventName}`]
  const removeEventFunc = obj[`remove_${eventName}`]

  if (!addEventFunc || !removeEventFunc)
    throw new Error(
      `[useEventfulState] The object does not have an event named ${eventName}`
    )

  function onValueChangedCallback(v: T[K]) {
    setVal(v)
    forceUpdate()
  }

  function removeHandler() {
    removeEventFunc.call(obj, onValueChangedCallback)
  }

  useEffect(() => {
    setVal(obj[propertyName])
    addEventFunc.call(obj, onValueChangedCallback)
    onEngineReload(removeHandler)
    return () => {
      removeHandler()
      unregisterOnEngineReload(removeHandler)
    }
  }, [obj])
  function setValWrapper(v: T[K]) {
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
export function useEvent<
  T extends {
    [k in `add_${E}` | `remove_${E}`]: (handler: (...args: any) => any) => void
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
    [k in `add_${E}` | `remove_${E}`]: (handler: (...args: any) => any) => void
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
