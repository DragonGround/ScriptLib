


declare module "UnityEngine/UIElements" {
    import { IEquatable } from "System"
    import { IEnumerable } from "System/Collections/Generic"

    export class UxmlTypeRestriction implements IEquatable<UxmlTypeRestriction> {
        Equals(other: UxmlTypeRestriction): boolean
    }

    export enum Use {
        None,
        Optional,
        Prohibited,
        Required,
    }

    export class UxmlAttributeDescription {
        name: string
        obsoleteNames: IEnumerable<string>
        type: string
        typeNamespace: string
        defaultValueAsString: string
        use: Use
        restriction: UxmlTypeRestriction
    }

    export interface IUxmlAttributes {
        TryGetAttributeValue(attributeName: string, value: string): boolean
    }

    export class CreationContext implements IEquatable<CreationContext> {
        static Default: CreationContext
        target: VisualElement
        visualTreeAsset: VisualTreeAsset
        slotInsertionPoints: Record<string, VisualElement>
        Equals(obj: any): boolean
        Equals(other: CreationContext): boolean
        GetHashCode(): number
    }

    export class TypedUxmlAttributeDescription<T> extends UxmlAttributeDescription {
        defaultValue: T
        defaultValueAsString: string
        GetValueFromBag(bag: IUxmlAttributes, cc: CreationContext): T
    }

    export class UxmlBoolAttributeDescription extends TypedUxmlAttributeDescription<boolean> {
        defaultValueAsString: string
        constructor()
        GetValueFromBag(bag: IUxmlAttributes, cc: CreationContext): boolean
        TryGetValueFromBag(bag: IUxmlAttributes, cc: CreationContext, value: boolean): boolean
    }

    export class UxmlFloatAttributeDescription extends TypedUxmlAttributeDescription<number> {
        defaultValueAsString: string
        constructor()
        GetValueFromBag(bag: IUxmlAttributes, cc: CreationContext): number
        TryGetValueFromBag(bag: IUxmlAttributes, cc: CreationContext, value: number): boolean
    }

    export class UxmlIntAttributeDescription extends TypedUxmlAttributeDescription<number> {
        defaultValueAsString: string
        constructor()
        GetValueFromBag(bag: IUxmlAttributes, cc: CreationContext): number
        TryGetValueFromBag(bag: IUxmlAttributes, cc: CreationContext, value: number): boolean
    }

    export class UxmlStringAttributeDescription extends TypedUxmlAttributeDescription<string> {
        defaultValueAsString: string
        constructor()
        GetValueFromBag(bag: IUxmlAttributes, cc: CreationContext): string
        TryGetValueFromBag(bag: IUxmlAttributes, cc: CreationContext, value: string): boolean
    }

    export class UxmlLongAttributeDescription extends TypedUxmlAttributeDescription<number> {
        defaultValueAsString: string
        constructor()
        GetValueFromBag(bag: IUxmlAttributes, cc: CreationContext): number
        TryGetValueFromBag(bag: IUxmlAttributes, cc: CreationContext, value: number): boolean
    }

    export class UxmlDoubleAttributeDescription extends TypedUxmlAttributeDescription<number> {
        defaultValueAsString: string
        constructor()
        GetValueFromBag(bag: IUxmlAttributes, cc: CreationContext): number
        TryGetValueFromBag(bag: IUxmlAttributes, cc: CreationContext, value: number): boolean
    }
}