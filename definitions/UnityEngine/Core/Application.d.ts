

declare module "UnityEngine" {
    import { UnityAction } from "UnityEngine/Events"

    export enum ApplicationInstallMode {
        Unknown,
        Store,
        DeveloperBuild,
        Adhoc,
        Enterprise,
        Editor,
    }

    export enum ApplicationSandboxType {
        Unknown,
        NotSandboxed,
        Sandboxed,
        SandboxBroken,
    }

    export enum StackTraceLogType {
        None,
        ScriptOnly,
        Full,
    }

    export enum ThreadPriority {
        Low,
        BelowNormal,
        Normal,
        High,
    }

    export enum RuntimePlatform {
        OSXEditor,
        OSXPlayer,
        WindowsPlayer,
        OSXWebPlayer,
        OSXDashboardPlayer,
        WindowsWebPlayer,
        WindowsEditor,
        IPhonePlayer,
        XBOX360,
        PS3,
        Android,
        NaCl,
        FlashPlayer,
        LinuxPlayer,
        LinuxEditor,
        WebGLPlayer,
        MetroPlayerX86,
        WSAPlayerX86,
        MetroPlayerX64,
        WSAPlayerX64,
        MetroPlayerARM,
        WSAPlayerARM,
        WP8Player,
        BB10Player,
        BlackBerryPlayer,
        TizenPlayer,
        PSP2,
        PS4,
        PSM,
        XboxOne,
        SamsungTVPlayer,
        WiiU,
        tvOS,
        Switch,
        Lumin,
        Stadia,
        CloudRendering,
        GameCoreXboxSeries,
        GameCoreScarlett,
        GameCoreXboxOne,
        PS5,
        EmbeddedLinuxArm64,
        EmbeddedLinuxArm32,
        EmbeddedLinuxX64,
        EmbeddedLinuxX86,
        LinuxServer,
        WindowsServer,
        OSXServer,
        QNXArm32,
        QNXArm64,
        QNXX64,
        QNXX86,
    }

    export enum SystemLanguage {
        Afrikaans,
        Arabic,
        Basque,
        Belarusian,
        Bulgarian,
        Catalan,
        Chinese,
        Czech,
        Danish,
        Dutch,
        English,
        Estonian,
        Faroese,
        Finnish,
        French,
        German,
        Greek,
        Hebrew,
        Hugarian,
        Icelandic,
        Indonesian,
        Italian,
        Japanese,
        Korean,
        Latvian,
        Lithuanian,
        Norwegian,
        Polish,
        Portuguese,
        Romanian,
        Russian,
        SerboCroatian,
        Slovak,
        Slovenian,
        Spanish,
        Swedish,
        Thai,
        Turkish,
        Ukrainian,
        Vietnamese,
        ChineseSimplified,
        ChineseTraditional,
        Unknown,
        Hungarian,
    }

    export enum NetworkReachability {
        NotReachable,
        ReachableViaCarrierDataNetwork,
        ReachableViaLocalAreaNetwork,
    }

    export enum LogType {
        Error,
        Assert,
        Warning,
        Log,
        Exception,
    }

    export enum UserAuthorization {
        WebCam,
        Microphone,
    }

    export enum ApplicationMemoryUsage {
        Unknown,
        Low,
        Medium,
        High,
        Critical,
    }

    export class YieldInstruction {
        constructor()
    }

    export class AsyncOperation extends YieldInstruction {
        isDone: boolean
        progress: number
        priority: number
        allowSceneActivation: boolean
        constructor()
    }

    export class ApplicationMemoryUsageChange {
        memoryUsage: ApplicationMemoryUsage
        constructor(usage: ApplicationMemoryUsage)
    }

    type LogCallback = (logString: string, stackTrace: string, type: LogType) => void
    type LowMemoryCallback = () => void
    type MemoryUsageChangedCallback = (usage: ApplicationMemoryUsageChange) => void
    type AdvertisingIdentifierCallback = (advertisingId: string, trackingEnabled: boolean, errorMsg: string) => void

    export class Application {
        static isPlaying: boolean
        static isFocused: boolean
        static buildGUID: string
        static runInBackground: boolean
        static isBatchMode: boolean
        static dataPath: string
        static streamingAssetsPath: string
        static persistentDataPath: string
        static temporaryCachePath: string
        static absoluteURL: string
        static unityVersion: string
        static version: string
        static installerName: string
        static identifier: string
        static installMode: ApplicationInstallMode
        static sandboxType: ApplicationSandboxType
        static productName: string
        static companyName: string
        static cloudProjectId: string
        static targetFrameRate: number
        static consoleLogPath: string
        static backgroundLoadingPriority: ThreadPriority
        static genuine: boolean
        static genuineCheckAvailable: boolean
        static platform: RuntimePlatform
        static isMobilePlatform: boolean
        static isConsolePlatform: boolean
        static systemLanguage: SystemLanguage
        static internetReachability: NetworkReachability
        static exitCancellationToken: any // System.Threading.CancellationToken
        static isEditor: boolean
        static add_lowMemory(handler: LowMemoryCallback): void
        static remove_lowMemory(handler: LowMemoryCallback): void
        static add_memoryUsageChanged(handler: MemoryUsageChangedCallback): void
        static remove_memoryUsageChanged(handler: MemoryUsageChangedCallback): void
        static add_logMessageReceived(handler: LogCallback): void
        static remove_logMessageReceived(handler: LogCallback): void
        static add_logMessageReceivedThreaded(handler: LogCallback): void
        static remove_logMessageReceivedThreaded(handler: LogCallback): void
        static add_onBeforeRender(handler: UnityAction): void
        static remove_onBeforeRender(handler: UnityAction): void
        static add_focusChanged(handler: (a: boolean) => void): void
        static remove_focusChanged(handler: (a: boolean) => void): void
        static add_deepLinkActivated(handler: (a: string) => void): void
        static remove_deepLinkActivated(handler: (a: string) => void): void
        static add_wantsToQuit(handler: () => boolean): void
        static remove_wantsToQuit(handler: () => boolean): void
        static add_quitting(handler: () => void): void
        static remove_quitting(handler: () => void): void
        static add_unloading(handler: () => void): void
        static remove_unloading(handler: () => void): void
        static Quit(exitCode: number): void
        static Quit(): void
        static Unload(): void
        static CanStreamedLevelBeLoaded(levelIndex: number): boolean
        static CanStreamedLevelBeLoaded(levelName: string): boolean
        static IsPlaying(obj: any): boolean
        static GetBuildTags(): String[]
        static SetBuildTags(buildTags: String[]): void
        static HasProLicense(): boolean
        static RequestAdvertisingIdentifierAsync(delegateMethod: AdvertisingIdentifierCallback): boolean
        static OpenURL(url: string): void
        static GetStackTraceLogType(logType: LogType): StackTraceLogType
        static SetStackTraceLogType(logType: LogType, stackTraceType: StackTraceLogType): void
        static RequestUserAuthorization(mode: UserAuthorization): AsyncOperation
        static HasUserAuthorization(mode: UserAuthorization): boolean
        constructor()
    }
}