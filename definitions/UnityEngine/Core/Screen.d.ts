import { IEquatable } from "System"
import { List } from "System/Collections/Generic"

declare module "UnityEngine" {

    export class Resolution {
        width: number
        height: number
        refreshRate: number
        refreshRateRatio: RefreshRate
        ToString(): string
    }

    export enum FullScreenMode {
        ExclusiveFullScreen,
        FullScreenWindow,
        MaximizedWindow,
        Windowed,
    }

    export class RefreshRate implements IEquatable<RefreshRate> {
        value: number
        numerator: number
        denominator: number
        Equals(other: RefreshRate): boolean
    }

    export class DisplayInfo implements IEquatable<DisplayInfo> {
        width: number
        height: number
        refreshRate: RefreshRate
        workArea: RectInt
        name: string
        Equals(other: DisplayInfo): boolean
    }

    export class Screen {
        static width: number
        static height: number
        static dpi: number
        static currentResolution: Resolution
        static resolutions: Resolution[]
        static fullScreen: boolean
        static fullScreenMode: FullScreenMode
        static safeArea: Rect
        static cutouts: Rect[]
        static autorotateToPortrait: boolean
        static autorotateToPortraitUpsideDown: boolean
        static autorotateToLandscapeLeft: boolean
        static autorotateToLandscapeRight: boolean
        static orientation: ScreenOrientation
        static sleepTimeout: number
        static brightness: number
        static mainWindowPosition: Vector2Int
        static mainWindowDisplayInfo: DisplayInfo
        static GetResolution: Resolution[]
        static showCursor: boolean
        static lockCursor: boolean
        static SetResolution(width: number, height: number, fullscreenMode: FullScreenMode, preferredRefreshRate: number): void
        static SetResolution(width: number, height: number, fullscreenMode: FullScreenMode): void
        static SetResolution(width: number, height: number, fullscreen: boolean, preferredRefreshRate: number): void
        static SetResolution(width: number, height: number, fullscreen: boolean): void
        static GetDisplayLayout(displayLayout: List<DisplayInfo>): void
        static MoveMainWindowTo(display: DisplayInfo, position: Vector2Int): AsyncOperation
        constructor()
    }
}