declare module "UnityEngine" {

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

    type LogCallback = (logString: string, stackTrace: string, type: LogType) => void

    export class Application {
        static isLoadingLevel: boolean
        static streamedBytes: number
        static webSecurityEnabled: boolean
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
        static stackTraceLogType: StackTraceLogType
        static consoleLogPath: string
        static backgroundLoadingPriority: ThreadPriority
        static genuine: boolean
        static genuineCheckAvailable: boolean
        static isShowingSplashScreen: boolean
        static platform: RuntimePlatform
        static isMobilePlatform: boolean
        static isConsolePlatform: boolean
        static systemLanguage: SystemLanguage
        static internetReachability: NetworkReachability
        static isPlayer: boolean
        static levelCount: number
        static loadedLevel: number
        static loadedLevelName: string
        static isEditor: boolean
        static Quit(exitCode: number): void
        static Quit(): void
        static CancelQuit(): void
        static Unload(): void
        static GetStreamProgressForLevel(levelIndex: number): number
        static GetStreamProgressForLevel(levelName: string): number
        static CanStreamedLevelBeLoaded(levelIndex: number): boolean
        static CanStreamedLevelBeLoaded(levelName: string): boolean
        static IsPlaying(obj: any): boolean
        static GetBuildTags(): String[]
        static SetBuildTags(buildTags: String[]): void
        static HasProLicense(): boolean
        static ExternalEval(script: string): void
        static RequestAdvertisingIdentifierAsync(delegateMethod: any /* AdvertisingIdentifierCallback */): boolean
        static OpenURL(url: string): void
        static ForceCrash(mode: number): void
        static GetStackTraceLogType(logType: LogType): StackTraceLogType
        static SetStackTraceLogType(logType: LogType, stackTraceType: StackTraceLogType): void
        static RequestUserAuthorization(mode: UserAuthorization): AsyncOperation
        static HasUserAuthorization(mode: UserAuthorization): boolean
        static ExternalCall(functionName: string, args: Object[]): void
        static DontDestroyOnLoad(o: any): void
        static CaptureScreenshot(filename: string, superSize: number): void
        static CaptureScreenshot(filename: string): void
        static RegisterLogCallback(handler: (a: string, b: string, c: LogType) => void): void
        static RegisterLogCallbackThreaded(handler: (a: string, b: string, c: LogType) => void): void
        static LoadLevel(index: number): void
        static LoadLevel(name: string): void
        static LoadLevelAdditive(index: number): void
        static LoadLevelAdditive(name: string): void
        static LoadLevelAsync(index: number): AsyncOperation
        static LoadLevelAsync(levelName: string): AsyncOperation
        static LoadLevelAdditiveAsync(index: number): AsyncOperation
        static LoadLevelAdditiveAsync(levelName: string): AsyncOperation
        static UnloadLevel(index: number): boolean
        static UnloadLevel(scenePath: string): boolean

        static add_logMessageReceived(callback: LogCallback): void
        static remove_logMessageReceived(callback: LogCallback): void
        static add_logMessageReceivedThreaded(callback: LogCallback): void
        static remove_logMessageReceivedThreaded(callback: LogCallback): void
        
        constructor()
    }
}