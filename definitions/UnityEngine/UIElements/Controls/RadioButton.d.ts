declare module "UnityEngine/UIElements" {

    export class RadioButton extends BaseBoolField {
        static ussClassName: string
        static labelUssClassName: string
        static inputUssClassName: string
        static checkmarkBackgroundUssClassName: string
        static checkmarkUssClassName: string
        static textUssClassName: string
        value: boolean
        constructor()
        constructor(label: string)
        SetSelected(selected: boolean): void
        SetValueWithoutNotify(newValue: boolean): void
    }
}