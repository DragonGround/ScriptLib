

declare module "System/Text" {
    import { Byte, ReadOnlySpan, Char, Span } from "System"
    
    export class Decoder {
        Fallback: DecoderFallback
        FallbackBuffer: DecoderFallbackBuffer
        Reset(): void
        GetCharCount(bytes: Byte[], index: number, count: number): number
        GetCharCount(bytes: Byte[], index: number, count: number, flush: boolean): number
        GetCharCount(bytes: any, count: number, flush: boolean): number
        GetCharCount(bytes: ReadOnlySpan<Byte>, flush: boolean): number
        GetChars(bytes: Byte[], byteIndex: number, byteCount: number, chars: Char[], charIndex: number): number
        GetChars(bytes: Byte[], byteIndex: number, byteCount: number, chars: Char[], charIndex: number, flush: boolean): number
        GetChars(bytes: any, byteCount: number, chars: any, charCount: number, flush: boolean): number
        GetChars(bytes: ReadOnlySpan<Byte>, chars: Span<Char>, flush: boolean): number
        Convert(bytes: Byte[], byteIndex: number, byteCount: number, chars: Char[], charIndex: number, charCount: number, flush: boolean, bytesUsed: number, charsUsed: number, completed: boolean): void
        Convert(bytes: any, byteCount: number, chars: any, charCount: number, flush: boolean, bytesUsed: number, charsUsed: number, completed: boolean): void
        Convert(bytes: ReadOnlySpan<Byte>, chars: Span<Char>, flush: boolean, bytesUsed: number, charsUsed: number, completed: boolean): void
    }
}