

declare module "UnityEngine/UIElements" {
    import { List } from "System/Collections/Generic"
    import { ITransitionAnimations } from "UnityEngine.UIElements.Experimental"

    export class BasePopupField<TValueType, TValueChoice> extends BaseField<TValueType> {
        static ussClassName: string
        static textUssClassName: string
        static arrowUssClassName: string
        static labelUssClassName: string
        static inputUssClassName: string
        choices: List<TValueChoice>
        text: string
        SetValueWithoutNotify(newValue: TValueType): void
    }

    export class PopupField<T> extends BasePopupField<T, T> {
        static ussClassName: string
        static labelUssClassName: string
        static inputUssClassName: string
        formatSelectedValueCallback: (o: T) => string
        formatListItemCallback: (o: T) => string
        value: T
        index: number
        constructor()
        constructor(label: string)
        constructor(choices: List<T>, defaultValue: T, formatSelectedValueCallback: (o: T) => string, formatListItemCallback: (o: T) => string)
        constructor(label: string, choices: List<T>, defaultValue: T, formatSelectedValueCallback: (o: T) => string, formatListItemCallback: (o: T) => string)
        constructor(choices: List<T>, defaultIndex: number, formatSelectedValueCallback: (o: T) => string, formatListItemCallback: (o: T) => string)
        constructor(label: string, choices: List<T>, defaultIndex: number, formatSelectedValueCallback: (o: T) => string, formatListItemCallback: (o: T) => string)
        SetValueWithoutNotify(newValue: T): void
    }
}