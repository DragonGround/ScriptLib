declare module "UnityEngine" {
    export interface ISerializationCallbackReceiver {
        OnBeforeSerialize(): void
        OnAfterDeserialize(): void
    }
}