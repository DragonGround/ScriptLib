
declare module "UnityEngine" {

    export interface ILogHandler {
        LogFormat(logType: LogType, context: any, format: string, args: Object[]): void
        LogException(exception: any, context: any): void
    }

    export interface ILogger {
        logHandler: ILogHandler
        logEnabled: boolean
        filterLogType: LogType
        IsLogTypeAllowed(logType: LogType): boolean
        Log(logType: LogType, message: any): void
        Log(logType: LogType, message: any, context: any): void
        Log(logType: LogType, tag: string, message: any): void
        Log(logType: LogType, tag: string, message: any, context: any): void
        Log(message: any): void
        Log(tag: string, message: any): void
        Log(tag: string, message: any, context: any): void
        LogWarning(tag: string, message: any): void
        LogWarning(tag: string, message: any, context: any): void
        LogError(tag: string, message: any): void
        LogError(tag: string, message: any, context: any): void
        LogFormat(logType: LogType, format: string, args: Object[]): void
        LogException(exception: any): void
    }

    export enum LogOption {
        None,
        NoStacktrace,
    }

    export class Debug {
        static unityLogger: ILogger
        static developerConsoleVisible: boolean
        static isDebugBuild: boolean
        static DrawLine(start: Vector3, end: Vector3, color: Color, duration: number): void
        static DrawLine(start: Vector3, end: Vector3, color: Color): void
        static DrawLine(start: Vector3, end: Vector3): void
        static DrawLine(start: Vector3, end: Vector3, color: Color, duration: number, depthTest: boolean): void
        static DrawRay(start: Vector3, dir: Vector3, color: Color, duration: number): void
        static DrawRay(start: Vector3, dir: Vector3, color: Color): void
        static DrawRay(start: Vector3, dir: Vector3): void
        static DrawRay(start: Vector3, dir: Vector3, color: Color, duration: number, depthTest: boolean): void
        static Break(): void
        static DebugBreak(): void
        static Log(message: any): void
        static Log(message: any, context: any): void
        static LogFormat(format: string, args: Object[]): void
        static LogFormat(context: any, format: string, args: Object[]): void
        static LogFormat(logType: LogType, logOptions: LogOption, context: any, format: string, args: Object[]): void
        static LogError(message: any): void
        static LogError(message: any, context: any): void
        static LogErrorFormat(format: string, args: Object[]): void
        static LogErrorFormat(context: any, format: string, args: Object[]): void
        static ClearDeveloperConsole(): void
        static LogException(exception: any): void
        static LogException(exception: any, context: any): void
        static LogWarning(message: any): void
        static LogWarning(message: any, context: any): void
        static LogWarningFormat(format: string, args: Object[]): void
        static LogWarningFormat(context: any, format: string, args: Object[]): void
        static Assert(condition: boolean): void
        static Assert(condition: boolean, context: any): void
        static Assert(condition: boolean, message: any): void
        static Assert(condition: boolean, message: string): void
        static Assert(condition: boolean, message: any, context: any): void
        static Assert(condition: boolean, message: string, context: any): void
        static AssertFormat(condition: boolean, format: string, args: Object[]): void
        static AssertFormat(condition: boolean, context: any, format: string, args: Object[]): void
        static LogAssertion(message: any): void
        static LogAssertion(message: any, context: any): void
        static LogAssertionFormat(format: string, args: Object[]): void
        static LogAssertionFormat(context: any, format: string, args: Object[]): void
        constructor()
    }
}