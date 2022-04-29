

declare module "UnityEngine" {
    import { Type } from "System"

    export enum HideFlags {
        None = 0,
        HideInHierarchy = 1,
        HideInInspector = 2,
        DontSaveInEditor = 4,
        NotEditable = 8,
        DontSaveInBuild = 16, // 0x00000010
        DontUnloadUnusedAsset = 32, // 0x00000020
        DontSave = DontUnloadUnusedAsset | DontSaveInBuild | DontSaveInEditor, // 0x00000034
        HideAndDontSave = DontSave | NotEditable | HideInHierarchy, // 0x0000003D
    }

    export class Object {
        static Instantiate(original: any, position: Vector3, rotation: Quaternion): any
        static Instantiate(original: any, position: Vector3, rotation: Quaternion, parent: Transform): any
        static Instantiate(original: any): any
        static Instantiate(original: any, parent: Transform): any
        static Instantiate(original: any, parent: Transform, instantiateInWorldSpace: boolean): any
        static Destroy(obj: any, t: number): void
        static Destroy(obj: any): void
        static DestroyImmediate(obj: any, allowDestroyingAssets: boolean): void
        static DestroyImmediate(obj: any): void
        static FindObjectsOfType(type: Type): Object[]
        static FindObjectsOfType(type: Type, includeInactive: boolean): Object[]
        static DontDestroyOnLoad(target: any): void
        static DestroyObject(obj: any, t: number): void
        static DestroyObject(obj: any): void
        static FindSceneObjectsOfType(type: Type): Object[]
        static FindObjectsOfTypeIncludingAssets(type: Type): Object[]
        static FindObjectsOfTypeAll(type: Type): Object[]
        static FindObjectOfType(type: Type): any
        static FindObjectOfType(type: Type, includeInactive: boolean): any
        name: string
        hideFlags: HideFlags
        constructor()
        GetInstanceID(): number
        GetHashCode(): number
        Equals(other: any): boolean
        ToString(): string
    }
}