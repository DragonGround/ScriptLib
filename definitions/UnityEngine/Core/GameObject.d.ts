import { Type } from "System"
import { List } from "System/Collections/Generic"
import { Scene } from "UnityEngine/SceneManagement"

declare module "UnityEngine" {
    enum SendMessageOptions {
        RequireReceiver,
        DontRequireReceiver,
    }

    export class GameObject extends Object {
        static CreatePrimitive(type: PrimitiveType): GameObject
        static FindWithTag(tag: string): GameObject
        static FindGameObjectWithTag(tag: string): GameObject
        static FindGameObjectsWithTag(tag: string): GameObject[]
        static Find(name: string): GameObject
        transform: Transform
        layer: number
        active: boolean
        activeSelf: boolean
        activeInHierarchy: boolean
        isStatic: boolean
        tag: string
        scene: Scene
        sceneCullingMask: number
        gameObject: GameObject
        rigidbody: Component
        rigidbody2D: Component
        camera: Component
        light: Component
        animation: Component
        constantForce: Component
        renderer: Component
        audio: Component
        networkView: Component
        collider: Component
        collider2D: Component
        hingeJoint: Component
        particleSystem: Component
        constructor(name: string)
        constructor()
        constructor(name: string, components: Type[])
        GetComponent(type: Type): Component
        GetComponent(type: string): Component
        GetComponentInChildren(type: Type, includeInactive: boolean): Component
        GetComponentInChildren(type: Type): Component
        GetComponentInParent(type: Type, includeInactive: boolean): Component
        GetComponentInParent(type: Type): Component
        GetComponents(type: Type): Component[]
        GetComponents(type: Type, results: List<Component>): void
        GetComponentsInChildren(type: Type): Component[]
        GetComponentsInChildren(type: Type, includeInactive: boolean): Component[]
        GetComponentsInParent(type: Type): Component[]
        GetComponentsInParent(type: Type, includeInactive: boolean): Component[]
        TryGetComponent(type: Type, component: Component): boolean
        SendMessageUpwards(methodName: string, options: SendMessageOptions): void
        SendMessage(methodName: string, options: SendMessageOptions): void
        BroadcastMessage(methodName: string, options: SendMessageOptions): void
        AddComponent(componentType: Type): Component
        SetActive(value: boolean): void
        SetActiveRecursively(state: boolean): void
        CompareTag(tag: string): boolean
        SendMessageUpwards(methodName: string, value: any, options: SendMessageOptions): void
        SendMessageUpwards(methodName: string, value: any): void
        SendMessageUpwards(methodName: string): void
        SendMessage(methodName: string, value: any, options: SendMessageOptions): void
        SendMessage(methodName: string, value: any): void
        SendMessage(methodName: string): void
        BroadcastMessage(methodName: string, parameter: any, options: SendMessageOptions): void
        BroadcastMessage(methodName: string, parameter: any): void
        BroadcastMessage(methodName: string): void
        SampleAnimation(clip: any, time: number): void
        AddComponent(className: string): Component
        PlayAnimation(animation: any): void
        StopAnimation(): void

        /**
         * For Convenience
         */
        constructor(name: string, components: { new(): Component }[])
        GetComponent<T extends Component>(type: { new(): T }): T
        GetComponentInChildren<T extends Component>(type: { new(): T }, includeInactive: boolean): T
        GetComponentInChildren<T extends Component>(type: { new(): T }): T
        GetComponentInParent<T extends Component>(type: { new(): T }, includeInactive: boolean): T
        GetComponentInParent<T extends Component>(type: { new(): T }): T
        GetComponents<T extends Component>(type: { new(): T }): T[]
        GetComponents<T extends Component>(type: { new(): T }, results: List<T>): void
        GetComponentsInChildren<T extends Component>(type: { new(): T }): T[]
        GetComponentsInChildren<T extends Component>(type: { new(): T }, includeInactive: boolean): T[]
        GetComponentsInParent<T extends Component>(type: { new(): T }): T[]
        GetComponentsInParent<T extends Component>(type: { new(): T }, includeInactive: boolean): T[]
        TryGetComponent<T extends Component>(type: { new(): T }, component: T): boolean
        AddComponent<T extends Component>(c: { new(): T }): T
    }
}