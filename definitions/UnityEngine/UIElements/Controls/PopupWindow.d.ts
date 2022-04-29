declare module "UnityEngine/UIElements" {

    export class PopupWindow extends TextElement {
        static ussClassName: string
        static contentUssClassName: string
        contentContainer: VisualElement
        constructor()
    }
}