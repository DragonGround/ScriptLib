declare module "UnityEngine" {
    export class ScriptableObject extends Object {
        static CreateInstance(className: string): ScriptableObject
        // static CreateInstance(type: Type): ScriptableObject
        static CreateInstance<T extends ScriptableObject>(type: { new(): T }): T
    }
}