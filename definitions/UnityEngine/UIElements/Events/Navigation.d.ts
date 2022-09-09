declare module "UnityEngine/UIElements" {
    import { IDisposable } from "System"
    import { Vector2 } from "UnityEngine"

    export class NavigationEventBase<T> extends EventBase<T>  {
    }

    export enum Direction {
        None,
        Left,
        Up,
        Right,
        Down,
    }

    export class NavigationMoveEvent extends NavigationEventBase<NavigationMoveEvent> {
        direction: Direction
        move: Vector2
    }

    export class NavigationTabEvent extends NavigationEventBase<NavigationTabEvent>  {
        direction: Direction
    }

    export class NavigationCancelEvent extends NavigationEventBase<NavigationCancelEvent> {
    }

    export class NavigationSubmitEvent extends NavigationEventBase<NavigationCancelEvent> {
    }
}