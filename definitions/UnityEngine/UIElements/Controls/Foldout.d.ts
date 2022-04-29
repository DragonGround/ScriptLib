declare module "UnityEngine/UIElements" {

    export class Foldout extends BindableElement implements INotifyValueChanged<boolean> {
        static ussClassName: string
        static toggleUssClassName: string
        static contentUssClassName: string
        static inputUssClassName: string
        static checkmarkUssClassName: string
        static textUssClassName: string
        contentContainer: VisualElement
        text: string
        value: boolean
        constructor()
        SetValueWithoutNotify(newValue: boolean): void
    }
}