

declare module "InputLegacy" {
    import { Vector2 } from "UnityEngine"

    export enum PenStatus {
        None,
        Contact,
        Barrel,
        Inverted,
        Eraser,
    }

    export enum PenEventType {
        NoContact,
        PenDown,
        PenUp,
    }

    export class PenData {
        position: Vector2
        tilt: Vector2
        penStatus: PenStatus
        twist: number
        pressure: number
        contactType: PenEventType
        deltaPos: Vector2
    }
}