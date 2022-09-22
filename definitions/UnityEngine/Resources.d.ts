declare module "UnityEngine" {
    import { Type } from "System"
    import { List } from "System/Collections/Generic"
    import { NativeArray } from "Unity/Collections"

    export class ResourceRequest extends AsyncOperation {
        asset: any
        constructor()
    }

    export class Resources {
        static FindObjectsOfTypeAll(type: Type): Object[]
        static FindObjectsOfTypeAll<T>(): T[]
        static Load(path: string): any
        static Load<T>(path: string): T
        static Load(path: string, systemTypeInstance: Type): any
        static LoadAsync(path: string): ResourceRequest
        static LoadAsync<T>(path: string): ResourceRequest
        static LoadAsync(path: string, type: Type): ResourceRequest
        static LoadAll(path: string, systemTypeInstance: Type): Object[]
        static LoadAll(path: string): Object[]
        static LoadAll<T>(path: string): T[]
        static GetBuiltinResource(type: Type, path: string): any
        static GetBuiltinResource<T>(path: string): T
        static UnloadAsset(assetToUnload: any): void
        static UnloadUnusedAssets(): AsyncOperation
        static InstanceIDToObject(instanceID: number): any
        static InstanceIDToObjectList(instanceIDs: NativeArray<number>, objects: List<any>): void
        constructor()
    }
}