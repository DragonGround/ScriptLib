declare module "System/Diagnostics" {
    import { DateTime, IDisposable, IntPtr, TimeSpan } from "System"
    import { StreamReader } from "System/IO"
    
    export enum ProcessPriorityClass {
        AboveNormal,
        BelowNormal,
        High,
        Idle,
        Normal,
        RealTime,
    }

    export class ProcessStartInfo {
        ArgumentList: any//Collection<string>
        Verb: string
        Arguments: string
        CreateNoWindow: boolean
        EnvironmentVariables: any//StringDictionary
        Environment: any//IDictionary<string,string>
        RedirectStandardInput: boolean
        RedirectStandardOutput: boolean
        RedirectStandardError: boolean
        StandardErrorEncoding: any//Encoding
        StandardOutputEncoding: any//Encoding
        UseShellExecute: boolean
        UserName: string
        Password: any
        PasswordInClearText: string
        Domain: string
        LoadUserProfile: boolean
        FileName: string
        WorkingDirectory: string
        ErrorDialog: boolean
        ErrorDialogParentHandle: IntPtr
        WindowStyle: any//ProcessWindowStyle
        StandardInputEncoding: any//Encoding
        Verbs: String[]
        constructor()
        constructor(fileName: string)
        constructor(fileName: string, arguments: string)
    }

    export class Process implements IDisposable {
        ExitCode: number
        HasExited: boolean
        ExitTime: DateTime
        Handle: IntPtr
        //SafeHandle: SafeProcessHandle
        Id: number
        MachineName: string
        MaxWorkingSet: IntPtr
        MinWorkingSet: IntPtr
        PriorityClass: ProcessPriorityClass
        PrivilegedProcessorTime: TimeSpan
        StartInfo: ProcessStartInfo
        StartTime: DateTime
        //SynchronizingObject: ISynchronizeInvoke
        TotalProcessorTime: TimeSpan
        UserProcessorTime: TimeSpan
        EnableRaisingEvents: boolean
        //StandardInput: StreamWriter
        StandardOutput: StreamReader
        StandardError: StreamReader
        BasePriority: number
        HandleCount: number
        MainModule: any//ProcessModule
        MainWindowHandle: IntPtr
        MainWindowTitle: string
        //Modules: ProcessModuleCollection
        NonpagedSystemMemorySize64: number
        PagedMemorySize64: number
        PagedSystemMemorySize64: number
        PeakPagedMemorySize64: number
        PeakVirtualMemorySize64: number
        PeakWorkingSet64: number
        PriorityBoostEnabled: boolean
        SessionId: number
        ProcessName: string
        ProcessorAffinity: IntPtr
        Responding: boolean
        //Threads: ProcessThreadCollection
        PrivateMemorySize64: number
        VirtualMemorySize64: number
        WorkingSet64: number
        constructor()
        Close(): void
        Refresh(): void
        Start(): boolean
        Kill(): void
        ToString(): string
        WaitForExit(milliseconds: number): boolean
        WaitForExit(): void
        WaitForInputIdle(milliseconds: number): boolean
        WaitForInputIdle(): boolean
        BeginOutputReadLine(): void
        BeginErrorReadLine(): void
        CancelOutputRead(): void
        CancelErrorRead(): void
        CloseMainWindow(): boolean
        Dispose(): void;
    }
}


declare module "Process" {
    import { Process, ProcessStartInfo } from "System/Diagnostics"

    export function EnterDebugMode(): void
    export function LeaveDebugMode(): void
    export function GetProcessById(processId: number): Process
    export function GetProcessesByName(processName: string): Process[]
    export function GetProcesses(): Process[]
    export function GetCurrentProcess(): Process
    export function Start(fileName: string, userName: string, password: any, domain: string): Process
    export function Start(fileName: string, arguments: string, userName: string, password: any, domain: string): Process
    export function Start(fileName: string): Process
    export function Start(fileName: string, arguments: string): Process
    export function Start(startInfo: ProcessStartInfo): Process
    export function GetProcessById(processId: number, machineName: string): Process
    export function GetProcessesByName(processName: string, machineName: string): Process[]
    export function GetProcesses(machineName: string): Process[]
}