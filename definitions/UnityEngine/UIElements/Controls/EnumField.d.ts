

declare module "UnityEngine/UIElements" {
    import { Enum } from "System"

    export class EnumField extends BaseField<Enum> {
        static ussClassName: string
        static textUssClassName: string
        static arrowUssClassName: string
        static labelUssClassName: string
        static inputUssClassName: string
        text: string
        constructor()
        constructor(defaultValue: Enum)
        constructor(label: string, defaultValue: Enum)
        Init(defaultValue: Enum): void
        Init(defaultValue: Enum, includeObsoleteValues: boolean): void
        SetValueWithoutNotify(newValue: Enum): void
    }
}