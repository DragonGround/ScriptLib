import { IDisposable, IFormatProvider, Char, ReadOnlySpan, Decimal } from "System"
import { Encoding } from "System/Text"

declare module "System/IO" {
    export class TextWriter implements IDisposable {
        static Null: TextWriter
        static Synchronized(writer: TextWriter): TextWriter
        FormatProvider: IFormatProvider
        Encoding: Encoding
        NewLine: string
        Close(): void
        Dispose(): void
        // DisposeAsync(): ValueTask
        Flush(): void
        Write(value: Char): void
        Write(buffer: Char[]): void
        Write(buffer: Char[], index: number, count: number): void
        Write(buffer: ReadOnlySpan<Char>): void
        Write(value: boolean): void
        Write(value: number): void
        Write(value: number): void
        Write(value: number): void
        Write(value: number): void
        Write(value: number): void
        Write(value: number): void
        Write(value: Decimal): void
        Write(value: string): void
        Write(value: any): void
        Write(format: string, arg0: any): void
        Write(format: string, arg0: any, arg1: any): void
        Write(format: string, arg0: any, arg1: any, arg2: any): void
        Write(format: string, arg: Object[]): void
        WriteLine(): void
        WriteLine(value: Char): void
        WriteLine(buffer: Char[]): void
        WriteLine(buffer: Char[], index: number, count: number): void
        WriteLine(buffer: ReadOnlySpan<Char>): void
        WriteLine(value: boolean): void
        WriteLine(value: number): void
        WriteLine(value: number): void
        WriteLine(value: number): void
        WriteLine(value: number): void
        WriteLine(value: number): void
        WriteLine(value: number): void
        WriteLine(value: Decimal): void
        WriteLine(value: string): void
        WriteLine(value: any): void
        WriteLine(format: string, arg0: any): void
        WriteLine(format: string, arg0: any, arg1: any): void
        WriteLine(format: string, arg0: any, arg1: any, arg2: any): void
        WriteLine(format: string, arg: Object[]): void
        // WriteAsync(value: Char): Task
        // WriteAsync(value: string): Task
        // WriteAsync(buffer: Char[]): Task
        // WriteAsync(buffer: Char[], index: number, count: number): Task
        // WriteAsync(buffer: ReadOnlyMemory<Char>, cancellationToken: CancellationToken): Task
        // WriteLineAsync(value: Char): Task
        // WriteLineAsync(value: string): Task
        // WriteLineAsync(buffer: Char[]): Task
        // WriteLineAsync(buffer: Char[], index: number, count: number): Task
        // WriteLineAsync(buffer: ReadOnlyMemory<Char>, cancellationToken: CancellationToken): Task
        // WriteLineAsync(): Task
        // FlushAsync(): Task
    }
}