declare module "UnityEngine" {
    interface Component extends Object {
        TryGetComp<T extends Component>(c: { new(): T }, comp: T): boolean
        GetComp<T extends Component>(c: { new(): T }): T
        AddComp<T extends Component>(c: { new(): T }): T

        TryGetComp(name: string, comp: Component): boolean
        GetComp(name: string): Component
        AddComp(name: string): Component
    }
}