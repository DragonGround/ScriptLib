declare module "UnityEngine/SceneManagement" {
    import { GameObject, AsyncOperation } from "UnityEngine"

    export enum LocalPhysicsMode {
        None,
        Physics2D,
        Physics3D,
    }

    export class CreateSceneParameters {
        localPhysicsMode: LocalPhysicsMode
        constructor(physicsMode: LocalPhysicsMode)
    }

    export enum LoadSceneMode {
        Single,
        Additive,
    }

    export class LoadSceneParameters {
        loadSceneMode: LoadSceneMode
        localPhysicsMode: LocalPhysicsMode
        constructor(mode: LoadSceneMode)
        constructor(mode: LoadSceneMode, physicsMode: LocalPhysicsMode)
    }

    export enum UnloadSceneOptions {
        None,
        UnloadAllEmbeddedSceneObjects,
    }

    export class SceneManager {
        static sceneCount: number
        static loadedSceneCount: number
        static sceneCountInBuildSettings: number
        static GetActiveScene(): Scene
        static SetActiveScene(scene: Scene): boolean
        static GetSceneByPath(scenePath: string): Scene
        static GetSceneByName(name: string): Scene
        static GetSceneByBuildIndex(buildIndex: number): Scene
        static GetSceneAt(index: number): Scene
        static CreateScene(sceneName: string, parameters: CreateSceneParameters): Scene
        static MergeScenes(sourceScene: Scene, destinationScene: Scene): void
        static MoveGameObjectToScene(go: GameObject, scene: Scene): void
        static CreateScene(sceneName: string): Scene
        static LoadScene(sceneName: string, mode: LoadSceneMode): void
        static LoadScene(sceneName: string): void
        static LoadScene(sceneName: string, parameters: LoadSceneParameters): Scene
        static LoadScene(sceneBuildIndex: number, mode: LoadSceneMode): void
        static LoadScene(sceneBuildIndex: number): void
        static LoadScene(sceneBuildIndex: number, parameters: LoadSceneParameters): Scene
        static LoadSceneAsync(sceneBuildIndex: number, mode: LoadSceneMode): AsyncOperation
        static LoadSceneAsync(sceneBuildIndex: number): AsyncOperation
        static LoadSceneAsync(sceneBuildIndex: number, parameters: LoadSceneParameters): AsyncOperation
        static LoadSceneAsync(sceneName: string, mode: LoadSceneMode): AsyncOperation
        static LoadSceneAsync(sceneName: string): AsyncOperation
        static LoadSceneAsync(sceneName: string, parameters: LoadSceneParameters): AsyncOperation
        static UnloadSceneAsync(sceneBuildIndex: number): AsyncOperation
        static UnloadSceneAsync(sceneName: string): AsyncOperation
        static UnloadSceneAsync(scene: Scene): AsyncOperation
        static UnloadSceneAsync(sceneBuildIndex: number, options: UnloadSceneOptions): AsyncOperation
        static UnloadSceneAsync(sceneName: string, options: UnloadSceneOptions): AsyncOperation
        static UnloadSceneAsync(scene: Scene, options: UnloadSceneOptions): AsyncOperation
        constructor()
    }
}