import { DateTime, Byte } from "System";
import { IEnumerable } from "System/Collections/Generic";
import { Encoding } from "System/Text";

declare module "System/IO" {
    export enum FileAttributes {
        ReadOnly,
        Hidden,
        System,
        Directory,
        Archive,
        Device,
        Normal,
        Temporary,
        SparseFile,
        ReparsePoint,
        Compressed,
        Offline,
        NotContentIndexed,
        Encrypted,
        IntegrityStream,
        NoScrubData,
    }
    
    export class File {
        static OpenText(path: string): StreamReader
        static CreateText(path: string): StreamWriter
        static AppendText(path: string): StreamWriter
        static Copy(sourceFileName: string, destFileName: string): void
        static Copy(sourceFileName: string, destFileName: string, overwrite: boolean): void
        static Create(path: string): FileStream
        static Create(path: string, bufferSize: number): FileStream
        static Create(path: string, bufferSize: number, options: FileOptions): FileStream
        static Delete(path: string): void
        static Exists(path: string): boolean
        static Open(path: string, mode: FileMode): FileStream
        static Open(path: string, mode: FileMode, access: FileAccess): FileStream
        static Open(path: string, mode: FileMode, access: FileAccess, share: FileShare): FileStream
        static SetCreationTime(path: string, creationTime: DateTime): void
        static SetCreationTimeUtc(path: string, creationTimeUtc: DateTime): void
        static GetCreationTime(path: string): DateTime
        static GetCreationTimeUtc(path: string): DateTime
        static SetLastAccessTime(path: string, lastAccessTime: DateTime): void
        static SetLastAccessTimeUtc(path: string, lastAccessTimeUtc: DateTime): void
        static GetLastAccessTime(path: string): DateTime
        static GetLastAccessTimeUtc(path: string): DateTime
        static SetLastWriteTime(path: string, lastWriteTime: DateTime): void
        static SetLastWriteTimeUtc(path: string, lastWriteTimeUtc: DateTime): void
        static GetLastWriteTime(path: string): DateTime
        static GetLastWriteTimeUtc(path: string): DateTime
        static GetAttributes(path: string): FileAttributes
        static SetAttributes(path: string, fileAttributes: FileAttributes): void
        static OpenRead(path: string): FileStream
        static OpenWrite(path: string): FileStream
        static ReadAllText(path: string): string
        static ReadAllText(path: string, encoding: Encoding): string
        static WriteAllText(path: string, contents: string): void
        static WriteAllText(path: string, contents: string, encoding: Encoding): void
        static ReadAllBytes(path: string): Byte[]
        static WriteAllBytes(path: string, bytes: Byte[]): void
        static ReadAllLines(path: string): String[]
        static ReadAllLines(path: string, encoding: Encoding): String[]
        static ReadLines(path: string): IEnumerable<string>
        static ReadLines(path: string, encoding: Encoding): IEnumerable<string>
        static WriteAllLines(path: string, contents: String[]): void
        static WriteAllLines(path: string, contents: IEnumerable<string>): void
        static WriteAllLines(path: string, contents: String[], encoding: Encoding): void
        static WriteAllLines(path: string, contents: IEnumerable<string>, encoding: Encoding): void
        static AppendAllText(path: string, contents: string): void
        static AppendAllText(path: string, contents: string, encoding: Encoding): void
        static AppendAllLines(path: string, contents: IEnumerable<string>): void
        static AppendAllLines(path: string, contents: IEnumerable<string>, encoding: Encoding): void
        static Replace(sourceFileName: string, destinationFileName: string, destinationBackupFileName: string): void
        static Replace(sourceFileName: string, destinationFileName: string, destinationBackupFileName: string, ignoreMetadataErrors: boolean): void
        static Move(sourceFileName: string, destFileName: string): void
        static Encrypt(path: string): void
        static Decrypt(path: string): void
        // static ReadAllTextAsync(path: string, cancellationToken: CancellationToken): Task<string>
        // static ReadAllTextAsync(path: string, encoding: Encoding, cancellationToken: CancellationToken): Task<string>
        // static WriteAllTextAsync(path: string, contents: string, cancellationToken: CancellationToken): Task
        // static WriteAllTextAsync(path: string, contents: string, encoding: Encoding, cancellationToken: CancellationToken): Task
        // static ReadAllBytesAsync(path: string, cancellationToken: CancellationToken): Task<Byte[]>
        // static WriteAllBytesAsync(path: string, bytes: Byte[], cancellationToken: CancellationToken): Task
        // static ReadAllLinesAsync(path: string, cancellationToken: CancellationToken): Task<String[]>
        // static ReadAllLinesAsync(path: string, encoding: Encoding, cancellationToken: CancellationToken): Task<String[]>
        // static WriteAllLinesAsync(path: string, contents: IEnumerable<string>, cancellationToken: CancellationToken): Task
        // static WriteAllLinesAsync(path: string, contents: IEnumerable<string>, encoding: Encoding, cancellationToken: CancellationToken): Task
        // static AppendAllTextAsync(path: string, contents: string, cancellationToken: CancellationToken): Task
        // static AppendAllTextAsync(path: string, contents: string, encoding: Encoding, cancellationToken: CancellationToken): Task
        // static AppendAllLinesAsync(path: string, contents: IEnumerable<string>, cancellationToken: CancellationToken): Task
        // static AppendAllLinesAsync(path: string, contents: IEnumerable<string>, encoding: Encoding, cancellationToken: CancellationToken): Task
        // static Create(path: string, bufferSize: number, options: FileOptions, fileSecurity: FileSecurity): FileStream
        // static GetAccessControl(path: string): FileSecurity
        // static GetAccessControl(path: string, includeSections: AccessControlSections): FileSecurity
        // static SetAccessControl(path: string, fileSecurity: FileSecurity): void
    }
}