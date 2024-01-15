

declare module "UnityEngine/UIElements" {

    export class TransitionEventBase extends EventBase {
        stylePropertyNames: StylePropertyNameCollection
        elapsedTime: number
    }

    export class TransitionRunEvent extends TransitionEventBase {
        constructor()
    }

    export class TransitionStartEvent extends TransitionEventBase {
        constructor()
    }

    export class TransitionEndEvent extends TransitionEventBase {
        constructor()
    }

    export class TransitionCancelEvent extends TransitionEventBase {
        constructor()
    }


}