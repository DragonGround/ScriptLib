

declare module "UnityEngine/UIElements" {
    import { IDisposable } from "System"

    export class ClickEvent extends PointerEventBase<ClickEvent> implements IDisposable, IPointerEvent, IPointerEventInternal {
        constructor()
    }
}