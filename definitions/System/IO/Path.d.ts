import { Char, ReadOnlySpan, Span } from "System"

declare module "System/IO" {
    export class Path {
        static InvalidPathChars: Char[]
        static AltDirectorySeparatorChar: Char
        static DirectorySeparatorChar: Char
        static PathSeparator: Char
        static VolumeSeparatorChar: Char
        static ChangeExtension(path: string, extension: string): string
        static Combine(path1: string, path2: string): string
        static GetDirectoryName(path: string): string
        static GetDirectoryName(path: ReadOnlySpan<Char>): ReadOnlySpan<Char>
        static GetExtension(path: string): string
        static GetFileName(path: string): string
        static GetFileNameWithoutExtension(path: string): string
        static GetFullPath(path: string): string
        static GetPathRoot(path: string): string
        static GetTempFileName(): string
        static GetTempPath(): string
        static HasExtension(path: string): boolean
        static IsPathRooted(path: ReadOnlySpan<Char>): boolean
        static IsPathRooted(path: string): boolean
        static GetInvalidFileNameChars(): Char[]
        static GetInvalidPathChars(): Char[]
        static GetRandomFileName(): string
        static Combine(paths: String[]): string
        static Combine(path1: string, path2: string, path3: string): string
        static Combine(path1: string, path2: string, path3: string, path4: string): string
        static GetFileName(path: ReadOnlySpan<Char>): ReadOnlySpan<Char>
        static Join(path1: ReadOnlySpan<Char>, path2: ReadOnlySpan<Char>): string
        static Join(path1: ReadOnlySpan<Char>, path2: ReadOnlySpan<Char>, path3: ReadOnlySpan<Char>): string
        static TryJoin(path1: ReadOnlySpan<Char>, path2: ReadOnlySpan<Char>, destination: Span<Char>, charsWritten: number): boolean
        static TryJoin(path1: ReadOnlySpan<Char>, path2: ReadOnlySpan<Char>, path3: ReadOnlySpan<Char>, destination: Span<Char>, charsWritten: number): boolean
        static GetExtension(path: ReadOnlySpan<Char>): ReadOnlySpan<Char>
        static GetFileNameWithoutExtension(path: ReadOnlySpan<Char>): ReadOnlySpan<Char>
        static GetPathRoot(path: ReadOnlySpan<Char>): ReadOnlySpan<Char>
        static HasExtension(path: ReadOnlySpan<Char>): boolean
        static GetRelativePath(relativeTo: string, path: string): string
        static IsPathFullyQualified(path: string): boolean
        static IsPathFullyQualified(path: ReadOnlySpan<Char>): boolean
        static GetFullPath(path: string, basePath: string): string
    }
}