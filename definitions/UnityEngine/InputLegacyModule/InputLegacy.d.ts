// InputLegacy.d.ts
declare module "UnityEngine" {

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

    export class Touch {
        fingerId: number
        position: Vector2
        rawPosition: Vector2
        deltaPosition: Vector2
        deltaTime: number
        tapCount: number
        phase: TouchPhase
        pressure: number
        maximumPossiblePressure: number
        type: TouchType
        altitudeAngle: number
        azimuthAngle: number
        radius: number
        radiusVariance: number
    }

    export class AccelerationEvent {
        acceleration: Vector3
        deltaTime: number
    }

    export enum IMECompositionMode {
        Auto,
        On,
        Off,
    }

    export enum DeviceOrientation {
        Unknown,
        Portrait,
        PortraitUpsideDown,
        LandscapeLeft,
        LandscapeRight,
        FaceUp,
        FaceDown,
    }

    export class Input {
        static simulateMouseWithTouches: boolean
        static anyKey: boolean
        static anyKeyDown: boolean
        static inputString: string
        static mousePosition: Vector3
        static mouseScrollDelta: Vector2
        static imeCompositionMode: IMECompositionMode
        static compositionString: string
        static imeIsSelected: boolean
        static compositionCursorPos: Vector2
        static mousePresent: boolean
        static penEventCount: number
        static touchCount: number
        static touchPressureSupported: boolean
        static stylusTouchSupported: boolean
        static touchSupported: boolean
        static multiTouchEnabled: boolean
        static deviceOrientation: DeviceOrientation
        static acceleration: Vector3
        static compensateSensors: boolean
        static accelerationEventCount: number
        static backButtonLeavesApp: boolean
        static location: LocationService
        static compass: Compass
        static gyro: Gyroscope
        static touches: Touch[]
        static accelerationEvents: AccelerationEvent[]
        static GetAxis(axisName: string): number
        static GetAxisRaw(axisName: string): number
        static GetButton(buttonName: string): boolean
        static GetButtonDown(buttonName: string): boolean
        static GetButtonUp(buttonName: string): boolean
        static GetMouseButton(button: number): boolean
        static GetMouseButtonDown(button: number): boolean
        static GetMouseButtonUp(button: number): boolean
        static ResetInputAxes(): void
        static IsJoystickPreconfigured(joystickName: string): boolean
        static GetJoystickNames(): String[]
        static GetTouch(index: number): Touch
        static GetPenEvent(index: number): PenData
        static GetLastPenContactEvent(): PenData
        static ResetPenEvents(): void
        static ClearLastPenContactEvent(): void
        static GetAccelerationEvent(index: number): AccelerationEvent
        static GetKey(key: KeyCode): boolean
        static GetKey(name: string): boolean
        static GetKeyUp(key: KeyCode): boolean
        static GetKeyUp(name: string): boolean
        static GetKeyDown(key: KeyCode): boolean
        static GetKeyDown(name: string): boolean
        constructor()
    }
}