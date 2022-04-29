

declare module "System/Text" {
    import { Char, ReadOnlySpan, Byte, Span } from "System"

    export class Encoder {
        Fallback: EncoderFallback
        FallbackBuffer: EncoderFallbackBuffer
        Reset(): void
        GetByteCount(chars: Char[], index: number, count: number, flush: boolean): number
        GetByteCount(chars: any, count: number, flush: boolean): number
        GetByteCount(chars: ReadOnlySpan<Char>, flush: boolean): number
        GetBytes(chars: Char[], charIndex: number, charCount: number, bytes: Byte[], byteIndex: number, flush: boolean): number
        GetBytes(chars: any, charCount: number, bytes: any, byteCount: number, flush: boolean): number
        GetBytes(chars: ReadOnlySpan<Char>, bytes: Span<Byte>, flush: boolean): number
        Convert(chars: Char[], charIndex: number, charCount: number, bytes: Byte[], byteIndex: number, byteCount: number, flush: boolean, charsUsed: number, bytesUsed: number, completed: boolean): void
        Convert(chars: any, charCount: number, bytes: any, byteCount: number, flush: boolean, charsUsed: number, bytesUsed: number, completed: boolean): void
        Convert(chars: ReadOnlySpan<Char>, bytes: Span<Byte>, flush: boolean, charsUsed: number, bytesUsed: number, completed: boolean): void
    }
}