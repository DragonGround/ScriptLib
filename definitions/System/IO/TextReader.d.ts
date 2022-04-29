import { IDisposable, Char, Span } from "System";

declare module "System/IO" {
    export class TextReader implements IDisposable {
        static Null: TextReader
        static Synchronized(reader: TextReader): TextReader
        Close(): void
        Dispose(): void
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