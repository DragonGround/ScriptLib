


declare module "OneJS/Utils" {
    import { IEnumeratorAny } from "System/Collections"
    import { MonoBehaviour } from "UnityEngine"

    export class CoroutineUtil extends MonoBehaviour {
        static Start(routine: IEnumeratorAny): void
        static Chain(...actions: IEnumeratorAny[]): IEnumeratorAny
        static WaitForSeconds(delay: number): IEnumeratorAny
        static WaitForFrames(delay: number): IEnumeratorAny
        static DelaySeconds(action: Function, delay: number): IEnumeratorAny
        static DelayFrames(action: Function, delay: number): IEnumeratorAny
        static Do(action: Function): IEnumeratorAny
    }
}