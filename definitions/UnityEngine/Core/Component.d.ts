

declare module "UnityEngine" {
    import { Type } from "System"
    import { List } from "System/Collections/Generic"

    export class Component extends Object {
        transform: Transform
        gameObject: GameObject
        tag: string
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
        constructor()
        GetComponent(type: Type): Component
        TryGetComponent(type: Type, component: Component): boolean
        GetComponent(type: string): Component
        GetComponentInChildren(t: Type, includeInactive: boolean): Component
        GetComponentInChildren(t: Type): Component
        GetComponentsInChildren(t: Type, includeInactive: boolean): Component[]
        GetComponentsInChildren(t: Type): Component[]
        GetComponentInParent(t: Type, includeInactive: boolean): Component
        GetComponentInParent(t: Type): Component
        GetComponentsInParent(t: Type, includeInactive: boolean): Component[]
        GetComponentsInParent(t: Type): Component[]
        GetComponents(type: Type): Component[]
        GetComponents(type: Type, results: List<Component>): void
        CompareTag(tag: string): boolean
        SendMessageUpwards(methodName: string, value: any, options: SendMessageOptions): void
        SendMessageUpwards(methodName: string, value: any): void
        SendMessageUpwards(methodName: string): void
        SendMessageUpwards(methodName: string, options: SendMessageOptions): void
        SendMessage(methodName: string, value: any): void
        SendMessage(methodName: string): void
        SendMessage(methodName: string, value: any, options: SendMessageOptions): void
        SendMessage(methodName: string, options: SendMessageOptions): void
        BroadcastMessage(methodName: string, parameter: any, options: SendMessageOptions): void
        BroadcastMessage(methodName: string, parameter: any): void
        BroadcastMessage(methodName: string): void
        BroadcastMessage(methodName: string, options: SendMessageOptions): void
    }
}