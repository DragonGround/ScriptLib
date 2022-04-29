import { IDisposable, Char, ReadOnlySpan } from "System"
import { Encoding } from "System/Text"

declare module "System/IO" {
    export class StreamWriter extends TextWriter implements IDisposable {
        static Null: StreamWriter
        AutoFlush: boolean
        BaseStream: Stream
        Encoding: Encoding
        constructor(stream: Stream)
        constructor(stream: Stream, encoding: Encoding)
        constructor(stream: Stream, encoding: Encoding, bufferSize: number)
        constructor(stream: Stream, encoding: Encoding, bufferSize: number, leaveOpen: boolean)
        constructor(path: string)
        constructor(path: string, append: boolean)
        constructor(path: string, append: boolean, encoding: Encoding)
        constructor(path: string, append: boolean, encoding: Encoding, bufferSize: number)
        Close(): void
        // DisposeAsync(): ValueTask
        Flush(): void
        // Write(value: Char): void
        // Write(buffer: Char[]): void
        // Write(buffer: Char[], index: number, count: number): void
        // Write(buffer: ReadOnlySpan<Char>): void
        // Write(value: string): void
        // WriteLine(value: string): void
        // WriteLine(value: ReadOnlySpan<Char>): void
        // WriteAsync(value: Char): Task
        // WriteAsync(value: string): Task
        // WriteAsync(buffer: Char[], index: number, count: number): Task
        // WriteAsync(buffer: ReadOnlyMemory<Char>, cancellationToken: CancellationToken): Task
        // WriteLineAsync(): Task
        // WriteLineAsync(value: Char): Task
        // WriteLineAsync(value: string): Task
        // WriteLineAsync(buffer: Char[], index: number, count: number): Task
        // WriteLineAsync(buffer: ReadOnlyMemory<Char>, cancellationToken: CancellationToken): Task
        // FlushAsync(): Task
    }
}