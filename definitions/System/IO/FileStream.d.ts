import { IntPtr, Byte, AsyncCallback, IAsyncResult, IDisposable } from "System"

declare module "System/IO" {
    export enum FileAccess {
        Read,
        Write,
        ReadWrite,
    }

    export enum FileMode {
        CreateNew,
        Create,
        Open,
        OpenOrCreate,
        Truncate,
        Append,
    }

    export enum FileShare {
        None,
        Read,
        Write,
        ReadWrite,
        Delete,
        Inheritable,
    }

    export enum FileOptions {
        None,
        WriteThrough,
        Asynchronous,
        RandomAccess,
        DeleteOnClose,
        SequentialScan,
        Encrypted,
    }

    export class FileStream extends Stream implements IDisposable {
        CanRead: boolean
        CanWrite: boolean
        CanSeek: boolean
        IsAsync: boolean
        Name: string
        Length: number
        Position: number
        Handle: IntPtr
        // SafeFileHandle: SafeFileHandle
        constructor(handle: IntPtr, access: FileAccess)
        constructor(handle: IntPtr, access: FileAccess, ownsHandle: boolean)
        constructor(handle: IntPtr, access: FileAccess, ownsHandle: boolean, bufferSize: number)
        constructor(handle: IntPtr, access: FileAccess, ownsHandle: boolean, bufferSize: number, isAsync: boolean)
        constructor(path: string, mode: FileMode)
        constructor(path: string, mode: FileMode, access: FileAccess)
        constructor(path: string, mode: FileMode, access: FileAccess, share: FileShare)
        constructor(path: string, mode: FileMode, access: FileAccess, share: FileShare, bufferSize: number)
        constructor(path: string, mode: FileMode, access: FileAccess, share: FileShare, bufferSize: number, useAsync: boolean)
        constructor(path: string, mode: FileMode, access: FileAccess, share: FileShare, bufferSize: number, options: FileOptions)
        // constructor(handle: SafeFileHandle, access: FileAccess)
        // constructor(handle: SafeFileHandle, access: FileAccess, bufferSize: number)
        // constructor(handle: SafeFileHandle, access: FileAccess, bufferSize: number, isAsync: boolean)
        // constructor(path: string, mode: FileMode, rights: FileSystemRights, share: FileShare, bufferSize: number, options: FileOptions)
        // constructor(path: string, mode: FileMode, rights: FileSystemRights, share: FileShare, bufferSize: number, options: FileOptions, fileSecurity: FileSecurity)
        ReadByte(): number
        WriteByte(value: Byte): void
        // Read(array: Byte[], offset: number, count: number): number
        BeginRead(array: Byte[], offset: number, numBytes: number, userCallback: AsyncCallback, stateObject: any): IAsyncResult
        EndRead(asyncResult: IAsyncResult): number
        // Write(array: Byte[], offset: number, count: number): void
        BeginWrite(array: Byte[], offset: number, numBytes: number, userCallback: AsyncCallback, stateObject: any): IAsyncResult
        EndWrite(asyncResult: IAsyncResult): void
        Seek(offset: number, origin: SeekOrigin): number
        SetLength(value: number): void
        Flush(): void
        Flush(flushToDisk: boolean): void
        Lock(position: number, length: number): void
        Unlock(position: number, length: number): void
        // GetAccessControl(): FileSecurity
        // SetAccessControl(fileSecurity: FileSecurity): void
        // FlushAsync(cancellationToken: CancellationToken): Task
        // ReadAsync(buffer: Byte[], offset: number, count: number, cancellationToken: CancellationToken): Task<number>
        // WriteAsync(buffer: Byte[], offset: number, count: number, cancellationToken: CancellationToken): Task
    }
}