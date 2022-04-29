import { Byte, IAsyncResult, Span, ReadOnlySpan, AsyncCallback } from "System"

declare module "System/IO" {

    export enum SeekOrigin {
        Begin,
        Current,
        End,
    }
    
    export class Stream {
        static Null: Stream
        static Synchronized(stream: Stream): Stream
        CanRead: boolean
        CanSeek: boolean
        CanTimeout: boolean
        CanWrite: boolean
        Length: number
        Position: number
        ReadTimeout: number
        WriteTimeout: number
        // CopyToAsync(destination: Stream): Task
        // CopyToAsync(destination: Stream, bufferSize: number): Task
        // CopyToAsync(destination: Stream, cancellationToken: CancellationToken): Task
        // CopyToAsync(destination: Stream, bufferSize: number, cancellationToken: CancellationToken): Task
        CopyTo(destination: Stream): void
        CopyTo(destination: Stream, bufferSize: number): void
        Close(): void
        Dispose(): void
        Flush(): void
        // FlushAsync(): Task
        // FlushAsync(cancellationToken: CancellationToken): Task
        BeginRead(buffer: Byte[], offset: number, count: number, callback: AsyncCallback, state: any): IAsyncResult
        EndRead(asyncResult: IAsyncResult): number
        // ReadAsync(buffer: Byte[], offset: number, count: number): Task<number>
        // ReadAsync(buffer: Byte[], offset: number, count: number, cancellationToken: CancellationToken): Task<number>
        // ReadAsync(buffer: Memory<Byte>, cancellationToken: CancellationToken): ValueTask<number>
        BeginWrite(buffer: Byte[], offset: number, count: number, callback: AsyncCallback, state: any): IAsyncResult
        EndWrite(asyncResult: IAsyncResult): void
        // WriteAsync(buffer: Byte[], offset: number, count: number): Task
        // WriteAsync(buffer: Byte[], offset: number, count: number, cancellationToken: CancellationToken): Task
        // WriteAsync(buffer: ReadOnlyMemory<Byte>, cancellationToken: CancellationToken): ValueTask
        Seek(offset: number, origin: SeekOrigin): number
        SetLength(value: number): void
        Read(buffer: Byte[], offset: number, count: number): number
        Read(buffer: Span<Byte>): number
        ReadByte(): number
        Write(buffer: Byte[], offset: number, count: number): void
        Write(buffer: ReadOnlySpan<Byte>): void
        WriteByte(value: Byte): void
        // DisposeAsync(): ValueTask
    }
}