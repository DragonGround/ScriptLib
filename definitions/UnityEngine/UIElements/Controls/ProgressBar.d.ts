declare module "UnityEngine/UIElements" {

    export class AbstractProgressBar extends BindableElement implements INotifyValueChanged<number> {
        static ussClassName: string
        static containerUssClassName: string
        static titleUssClassName: string
        static titleContainerUssClassName: string
        static progressUssClassName: string
        static backgroundUssClassName: string
        title: string
        lowValue: number
        highValue: number
        value: number
        constructor()
        SetValueWithoutNotify(newValue: number): void
    }

    export class ProgressBar extends AbstractProgressBar {
        constructor()
    }
}