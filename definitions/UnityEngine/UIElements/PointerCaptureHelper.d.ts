

declare module "UnityEngine/UIElements" {


    export interface IEventHandler {
        HasPointerCapture(pointerId: number): boolean
        CapturePointer(pointerId: number): void
        ReleasePointer(pointerId: number): void
    }

    export interface IPanel {
        GetCapturingElement(pointerId: number): IEventHandler
        ReleasePointer(pointerId: number): void
    }
}