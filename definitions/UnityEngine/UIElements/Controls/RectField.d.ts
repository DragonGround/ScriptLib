

declare module "UnityEngine/UIElements" {
    import { Rect, RectInt } from "UnityEngine"

    export class BaseCompositeField<TValueType,TField,TFieldValue> extends BaseField<TValueType> {
        static ussClassName: string
        static labelUssClassName: string
        static inputUssClassName: string
        static spacerUssClassName: string
        static multilineVariantUssClassName: string
        static fieldGroupUssClassName: string
        static fieldUssClassName: string
        static firstFieldVariantUssClassName: string
        static twoLinesVariantUssClassName: string
        SetValueWithoutNotify(newValue: TValueType): void
    }

    export class RectField extends BaseCompositeField<Rect,FloatField,number> {
        static ussClassName: string
        static labelUssClassName: string
        static inputUssClassName: string
        constructor()
        constructor(label: string)
    }

    export class RectIntField extends BaseCompositeField<RectInt,IntegerField,number> {
        static ussClassName: string
        static labelUssClassName: string
        static inputUssClassName: string
        constructor()
        constructor(label: string)
    }
}