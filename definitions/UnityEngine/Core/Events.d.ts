

declare module "UnityEngine/Events" {
    import { AsyncCallback, IAsyncResult, ICloneable, IntPtr, MulticastDelegate, Type } from "System"
    import { MethodInfo } from "System/Reflection"
    import { ISerializable } from "System/Runtime/Serialization"

    export enum UnityEventCallState {
        Off,
        EditorAndRuntime,
        RuntimeOnly,
    }

    export class UnityEventBase {
        static GetValidMethodInfo(obj: any, functionName: string, argumentTypes: Type[]): MethodInfo
        static GetValidMethodInfo(objectType: Type, functionName: string, argumentTypes: Type[]): MethodInfo
        GetPersistentEventCount(): number
        GetPersistentTarget(index: number): any
        GetPersistentMethodName(index: number): string
        SetPersistentListenerState(index: number, state: UnityEventCallState): void
        GetPersistentListenerState(index: number): UnityEventCallState
        RemoveAllListeners(): void
        ToString(): string
    }

    export class UnityAction extends MulticastDelegate implements ISerializable, ICloneable {
        constructor(object: any, method: IntPtr)
        Invoke(): void
        BeginInvoke(callback: AsyncCallback, object: any): IAsyncResult
        EndInvoke(result: IAsyncResult): void
    }
    
    export class UnityEvent extends UnityEventBase {
        constructor()
        AddListener(call: UnityAction): void
        RemoveListener(call: UnityAction): void
        Invoke(): void
    }
}