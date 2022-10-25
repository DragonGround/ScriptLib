declare module "System/Environment"  {
    import { Char, ICloneable, IComparable, IEquatable, ISpanFormattable, ReadOnlySpan, Span } from "System"
    import { ISerializable, SerializationInfo, StreamingContext } from "System/Runtime/Serialization"
    
    export enum EnvironmentVariableTarget {
        Process,
        User,
        Machine,
    }

    export enum PlatformID {
        Win32S,
        Win32Windows,
        Win32NT,
        WinCE,
        Unix,
        Xbox,
        MacOSX,
    }

    export class Version implements ICloneable, ISpanFormattable, IComparable<Version>, IEquatable<Version> {
        static Parse(input: string): Version
        static Parse(input: ReadOnlySpan<Char>): Version
        static TryParse(input: string, result: Version): boolean
        static TryParse(input: ReadOnlySpan<Char>, result: Version): boolean
        Major: number
        Minor: number
        Build: number
        Revision: number
        MajorRevision: number
        MinorRevision: number
        constructor(major: number, minor: number, build: number, revision: number)
        constructor(major: number, minor: number, build: number)
        constructor(major: number, minor: number)
        constructor(version: string)
        constructor()
        Clone(): any
        CompareTo(version: any): number
        CompareTo(value: Version): number
        Equals(obj: any): boolean
        Equals(obj: Version): boolean
        GetHashCode(): number
        ToString(): string
        ToString(fieldCount: number): string
        TryFormat(destination: Span<Char>, charsWritten: number): boolean
        TryFormat(destination: Span<Char>, fieldCount: number, charsWritten: number): boolean
    }

    export class OperatingSystem implements ICloneable, ISerializable {
        Platform: PlatformID
        ServicePack: string
        Version: Version
        VersionString: string
        constructor(platform: PlatformID, version: Version)
        GetObjectData(info: SerializationInfo, context: StreamingContext): void
        Clone(): any
        ToString(): string
    }

}
declare module "Environment" {
    import { OperatingSystem, EnvironmentVariableTarget, Version as VersionS } from "System/Environment"


    export var CommandLine: string
    export var CurrentDirectory: string
    export var CurrentManagedThreadId: number
    export var ExitCode: number
    export var HasShutdownStarted: boolean
    export var MachineName: string
    export var NewLine: string
    export var OSVersion: OperatingSystem
    export var StackTrace: string
    export var SystemDirectory: string
    export var TickCount: number
    export var UserDomainName: string
    export var UserInteractive: boolean
    export var UserName: string
    export var Version: VersionS
    export var WorkingSet: number
    export var Is64BitOperatingSystem: boolean
    export var SystemPageSize: number
    export var Is64BitProcess: boolean
    export var ProcessorCount: number
    export function Exit(exitCode: number): void
    export function ExpandEnvironmentVariables(name: string): string
    export function GetCommandLineArgs(): String[]
    export function GetEnvironmentVariable(variable: string): string
    export function GetEnvironmentVariables(): any
    export function GetFolderPath(folder: any): string
    export function GetFolderPath(folder: any, option: any): string
    export function GetLogicalDrives(): String[]
    export function GetEnvironmentVariable(variable: string, target: EnvironmentVariableTarget): string
    export function GetEnvironmentVariables(target: EnvironmentVariableTarget): any
    export function SetEnvironmentVariable(variable: string, value: string): void
    export function SetEnvironmentVariable(variable: string, value: string, target: EnvironmentVariableTarget): void
    export function FailFast(message: string): void
    export function FailFast(message: string, exception: any): void
}