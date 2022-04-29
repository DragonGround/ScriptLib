

declare module "UnityEngine/UIElements" {
    import { IDisposable } from "System"
    import { Rect } from "UnityEngine"

    export class TooltipEvent extends EventBase<TooltipEvent> implements IDisposable {
        tooltip: string
        rect: Rect
        constructor()
    }
}