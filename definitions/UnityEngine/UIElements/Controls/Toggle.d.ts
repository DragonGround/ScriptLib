declare module "UnityEngine/UIElements" {

    export class BaseBoolField extends BaseField<boolean> {
        text: string
        constructor(label: string)
        SetValueWithoutNotify(newValue: boolean): void
    }

    export class Toggle extends BaseBoolField {
        static ussClassName: string
        static labelUssClassName: string
        static inputUssClassName: string
        static noTextVariantUssClassName: string
        static checkmarkUssClassName: string
        static textUssClassName: string
        constructor()
        constructor(label: string)
    }
}