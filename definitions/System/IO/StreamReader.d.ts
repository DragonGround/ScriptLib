

declare module "System/IO" {
    import { IDisposable, Char, Span } from "System"
    import { Encoding } from "System/Text"

    export class StreamReader extends TextReader implements IDisposable {
        static Null: StreamReader
        CurrentEncoding: Encoding
        BaseStream: Stream
        EndOfStream: boolean
        constructor(stream: Stream)
        constructor(stream: Stream, detectEncodingFromByteOrderMarks: boolean)
        constructor(stream: Stream, encoding: Encoding)
        constructor(stream: Stream, encoding: Encoding, detectEncodingFromByteOrderMarks: boolean)
        constructor(stream: Stream, encoding: Encoding, detectEncodingFromByteOrderMarks: boolean, bufferSize: number)
        constructor(stream: Stream, encoding: Encoding, detectEncodingFromByteOrderMarks: boolean, bufferSize: number, leaveOpen: boolean)
        constructor(path: string)
        constructor(path: string, detectEncodingFromByteOrderMarks: boolean)
        constructor(path: string, encoding: Encoding)
        constructor(path: string, encoding: Encoding, detectEncodingFromByteOrderMarks: boolean)
        constructor(path: string, encoding: Encoding, detectEncodingFromByteOrderMarks: boolean, bufferSize: number)
        Close(): void
        DiscardBufferedData(): void
        Peek(): number
        Read(): number
        Read(buffer: Char[], index: number, count: number): number
        Read(buffer: Span<Char>): number
        ReadToEnd(): string
        ReadBlock(buffer: Char[], index: number, count: number): number
        ReadBlock(buffer: Span<Char>): number
        ReadLine(): string
        // ReadLineAsync(): Task<string>
        // ReadToEndAsync(): Task<string>
        // ReadAsync(buffer: Char[], index: number, count: number): Task<number>
        // ReadAsync(buffer: Memory<Char>, cancellationToken: CancellationToken): ValueTask<number>
        // ReadBlockAsync(buffer: Char[], index: number, count: number): Task<number>
        // ReadBlockAsync(buffer: Memory<Char>, cancellationToken: CancellationToken): ValueTask<number>
    }
}