
declare module "UnityEngine/UIElements" {

    interface CallbackEventHandler {
        Register(eventType: { new(): EventBase }, handler: (e: EventBase) => void): void
        Register(eventType: { new(): EventBase }, handler: (e: EventBase) => void, useTrickleDown: TrickleDown): void
        Unregister(eventType: { new(): EventBase }, handler: (e: EventBase) => void): void
        Unregister(eventType: { new(): EventBase }, handler: (e: EventBase) => void, useTrickleDown: TrickleDown): void
    }
}