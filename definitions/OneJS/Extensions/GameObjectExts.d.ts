declare module "UnityEngine" {

    interface GameObject {
        TryAddComp(type: string): boolean
        TryAddComp(type: string, comp: Component): boolean

        TryGetComp<T extends Component>(c: { new(): T }, comp: T): boolean
        GetComp<T extends Component>(c: { new(): T }): T
        AddComp<T extends Component>(c: { new(): T }): T

        TryGetComp(name: string, comp: Component): boolean
        GetComp(name: string): Component
        AddComp(type: string): Component
    }
}