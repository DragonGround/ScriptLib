import { ICloneable, Byte, ReadOnlySpan, Char, Span } from "System"

declare module "System/Text" {

    export class EncoderFallbackBuffer {
        Remaining: number
        Fallback(charUnknown: Char, index: number): boolean
        Fallback(charUnknownHigh: Char, charUnknownLow: Char, index: number): boolean
        GetNextChar(): Char
        MovePrevious(): boolean
        Reset(): void
    }

    export class EncoderFallback {
        static ReplacementFallback: EncoderFallback
        static ExceptionFallback: EncoderFallback
        MaxCharCount: number
        CreateFallbackBuffer(): EncoderFallbackBuffer
    }

    export class DecoderFallbackBuffer {
        Remaining: number
        Fallback(bytesUnknown: Byte[], index: number): boolean
        GetNextChar(): Char
        MovePrevious(): boolean
        Reset(): void
    }

    export class DecoderFallback {
        static ReplacementFallback: DecoderFallback
        static ExceptionFallback: DecoderFallback
        MaxCharCount: number
        CreateFallbackBuffer(): DecoderFallbackBuffer
    }

    export class EncodingProvider {
        constructor()
        GetEncoding(name: string): Encoding
        GetEncoding(codepage: number): Encoding
        GetEncoding(name: string, encoderFallback: EncoderFallback, decoderFallback: DecoderFallback): Encoding
        GetEncoding(codepage: number, encoderFallback: EncoderFallback, decoderFallback: DecoderFallback): Encoding
    }

    export class EncodingInfo {
        CodePage: number
        Name: string
        DisplayName: string
        GetEncoding(): Encoding
        Equals(value: any): boolean
        GetHashCode(): number
    }

    export enum NormalizationForm {
        FormC,
        FormD,
        FormKC,
        FormKD,
    }

    export class Encoding implements ICloneable {
        static ASCII: Encoding
        static Default: Encoding
        static Unicode: Encoding
        static BigEndianUnicode: Encoding
        static UTF7: Encoding
        static UTF8: Encoding
        static UTF32: Encoding
        static Convert(srcEncoding: Encoding, dstEncoding: Encoding, bytes: Byte[]): Byte[]
        static Convert(srcEncoding: Encoding, dstEncoding: Encoding, bytes: Byte[], index: number, count: number): Byte[]
        static RegisterProvider(provider: EncodingProvider): void
        static GetEncoding(codepage: number): Encoding
        static GetEncoding(codepage: number, encoderFallback: EncoderFallback, decoderFallback: DecoderFallback): Encoding
        static GetEncoding(name: string): Encoding
        static GetEncoding(name: string, encoderFallback: EncoderFallback, decoderFallback: DecoderFallback): Encoding
        static GetEncodings(): EncodingInfo[]
        Preamble: ReadOnlySpan<Byte>
        BodyName: string
        EncodingName: string
        HeaderName: string
        WebName: string
        WindowsCodePage: number
        IsBrowserDisplay: boolean
        IsBrowserSave: boolean
        IsMailNewsDisplay: boolean
        IsMailNewsSave: boolean
        IsSingleByte: boolean
        EncoderFallback: EncoderFallback
        DecoderFallback: DecoderFallback
        IsReadOnly: boolean
        CodePage: number
        GetPreamble(): Byte[]
        Clone(): any
        GetByteCount(chars: Char[]): number
        GetByteCount(s: string): number
        GetByteCount(chars: Char[], index: number, count: number): number
        GetByteCount(str: string, index: number, count: number): number
        GetByteCount(chars: any, count: number): number
        GetBytes(chars: Char[]): Byte[]
        GetBytes(chars: Char[], index: number, count: number): Byte[]
        GetBytes(chars: Char[], charIndex: number, charCount: number, bytes: Byte[], byteIndex: number): number
        GetBytes(s: string): Byte[]
        GetBytes(s: string, charIndex: number, charCount: number, bytes: Byte[], byteIndex: number): number
        GetBytes(chars: any, charCount: number, bytes: any, byteCount: number): number
        GetCharCount(bytes: Byte[]): number
        GetCharCount(bytes: Byte[], index: number, count: number): number
        GetCharCount(bytes: any, count: number): number
        GetChars(bytes: Byte[]): Char[]
        GetChars(bytes: Byte[], index: number, count: number): Char[]
        GetChars(bytes: Byte[], byteIndex: number, byteCount: number, chars: Char[], charIndex: number): number
        GetChars(bytes: any, byteCount: number, chars: any, charCount: number): number
        GetString(bytes: any, byteCount: number): string
        GetChars(bytes: ReadOnlySpan<Byte>, chars: Span<Char>): number
        GetString(bytes: ReadOnlySpan<Byte>): string
        IsAlwaysNormalized(): boolean
        IsAlwaysNormalized(form: NormalizationForm): boolean
        GetDecoder(): Decoder
        GetEncoder(): Encoder
        GetMaxByteCount(charCount: number): number
        GetMaxCharCount(byteCount: number): number
        GetString(bytes: Byte[]): string
        GetString(bytes: Byte[], index: number, count: number): string
        Equals(value: any): boolean
        GetHashCode(): number
        GetCharCount(bytes: ReadOnlySpan<Byte>): number
        GetByteCount(chars: ReadOnlySpan<Char>): number
        GetBytes(chars: ReadOnlySpan<Char>, bytes: Span<Byte>): number
        GetBytes(s: string, index: number, count: number): Byte[]
    }
}