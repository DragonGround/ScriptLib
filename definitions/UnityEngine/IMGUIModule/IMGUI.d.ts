declare module "UnityEngine" {
    export enum ScaleMode {
        StretchToFill,
        ScaleAndCrop,
        ScaleToFit,
    }

    export enum EventModifiers {
        None,
        Shift,
        Control,
        Alt,
        Command,
        Numeric,
        CapsLock,
        FunctionKey,
    }

    export enum EventType {
        MouseDown,
        MouseUp,
        MouseMove,
        MouseDrag,
        KeyDown,
        KeyUp,
        ScrollWheel,
        Repaint,
        Layout,
        DragUpdated,
        DragPerform,
        DragExited,
        Ignore,
        Used,
        ValidateCommand,
        ExecuteCommand,
        ContextClick,
        MouseEnterWindow,
        MouseLeaveWindow,
        TouchDown,
        TouchUp,
        TouchMove,
        TouchEnter,
        TouchLeave,
        TouchStationary,
    }

    export enum PointerType {
        Mouse,
        Touch,
        Pen,
    }

    export class Event {
        static current: Event
        static PopEvent(outEvent: Event): boolean
        static GetEventCount(): number
        static KeyboardEvent(key: string): Event
        rawType: EventType
        mousePosition: Vector2
        delta: Vector2
        pointerType: PointerType
        button: number
        modifiers: EventModifiers
        pressure: number
        twist: number
        tilt: Vector2
        penStatus: PenStatus
        clickCount: number
        character: any
        keyCode: KeyCode
        displayIndex: number
        type: EventType
        commandName: string
        shift: boolean
        control: boolean
        alt: boolean
        command: boolean
        capsLock: boolean
        numeric: boolean
        functionKey: boolean
        isKey: boolean
        isMouse: boolean
        isScrollWheel: boolean
        constructor()
        constructor(displayIndex: number)
        constructor(other: Event)
        GetTypeForControl(controlID: number): EventType
        GetHashCode(): number
        Equals(obj: any): boolean
        ToString(): string
        Use(): void
    }
}