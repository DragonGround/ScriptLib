


declare module "UnityEngine/SceneManagement" {
    import { GameObject } from "UnityEngine"
    import { List } from "System/Collections/Generic"

    export class Scene {
        handle: number
        path: string
        name: string
        isLoaded: boolean
        buildIndex: number
        isDirty: boolean
        rootCount: number
        isSubScene: boolean
        IsValid(): boolean
        GetRootGameObjects(): GameObject[]
        GetRootGameObjects(rootGameObjects: List<GameObject>): void
        GetHashCode(): number
        Equals(other: any): boolean
    }
}