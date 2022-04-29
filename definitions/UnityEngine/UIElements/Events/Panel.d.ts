

declare module "UnityEngine/UIElements" {
    import { IDisposable } from "System"

    export interface IPanelChangedEvent {
    }

    export class PanelChangedEventBase<T> extends EventBase<T> implements IPanelChangedEvent, IDisposable {
        static GetPooled<T>(): T
        static GetPooled<T>(originPanel: IPanel, destinationPanel: IPanel): T
        originPanel: IPanel
        destinationPanel: IPanel
    }

    export class AttachToPanelEvent extends PanelChangedEventBase<AttachToPanelEvent> implements IPanelChangedEvent, IDisposable {
        constructor()
    }

    export class DetachFromPanelEvent extends PanelChangedEventBase<DetachFromPanelEvent> implements IPanelChangedEvent, IDisposable {
        constructor()
    }
}