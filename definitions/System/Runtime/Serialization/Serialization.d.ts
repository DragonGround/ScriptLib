


declare module "System/Runtime/Serialization" {
    import { Byte, Char, DateTime, Decimal, SByte, Type, TypeCode } from "System"
    import { IEnumeratorAny } from "System/Collections"

    export interface IFormatterConverter {
        Convert(value: any, type: Type): any
        Convert(value: any, typeCode: TypeCode): any
        ToBoolean(value: any): boolean
        ToChar(value: any): Char
        ToSByte(value: any): SByte
        ToByte(value: any): Byte
        ToInt16(value: any): number
        ToUInt16(value: any): number
        ToInt32(value: any): number
        ToUInt32(value: any): number
        ToInt64(value: any): number
        ToUInt64(value: any): number
        ToSingle(value: any): number
        ToDouble(value: any): number
        ToDecimal(value: any): Decimal
        ToDateTime(value: any): DateTime
        ToString(value: any): string
    }
    
    export interface IDeserializationCallback {
        OnDeserialization(sender: any): void
    }

    export class SerializationEntry {
        Value: any
        Name: string
        ObjectType: Type
    }

    export class SerializationInfoEnumerator implements IEnumeratorAny {
        Current: SerializationEntry
        Name: string
        Value: any
        ObjectType: Type
        MoveNext(): boolean
        Reset(): void
    }
    
    export class SerializationInfo {
        FullTypeName: string
        AssemblyName: string
        MemberCount: number
        ObjectType: Type
        IsFullTypeNameSetExplicit: boolean
        IsAssemblyNameSetExplicit: boolean
        constructor(type: Type, converter: IFormatterConverter)
        constructor(type: Type, converter: IFormatterConverter, requireSameTokenInPartialTrust: boolean)
        SetType(type: Type): void
        GetEnumerator(): SerializationInfoEnumerator
        AddValue(name: string, value: any, type: Type): void
        AddValue(name: string, value: any): void
        AddValue(name: string, value: boolean): void
        AddValue(name: string, value: Char): void
        AddValue(name: string, value: SByte): void
        AddValue(name: string, value: Byte): void
        AddValue(name: string, value: number): void
        AddValue(name: string, value: number): void
        AddValue(name: string, value: number): void
        AddValue(name: string, value: number): void
        AddValue(name: string, value: number): void
        AddValue(name: string, value: number): void
        AddValue(name: string, value: number): void
        AddValue(name: string, value: number): void
        AddValue(name: string, value: Decimal): void
        AddValue(name: string, value: DateTime): void
        GetValue(name: string, type: Type): any
        GetBoolean(name: string): boolean
        GetChar(name: string): Char
        GetSByte(name: string): SByte
        GetByte(name: string): Byte
        GetInt16(name: string): number
        GetUInt16(name: string): number
        GetInt32(name: string): number
        GetUInt32(name: string): number
        GetInt64(name: string): number
        GetUInt64(name: string): number
        GetSingle(name: string): number
        GetDouble(name: string): number
        GetDecimal(name: string): Decimal
        GetDateTime(name: string): DateTime
        GetString(name: string): string
    }

    export enum StreamingContextStates {
        CrossProcess,
        CrossMachine,
        File,
        Persistence,
        Remoting,
        Other,
        Clone,
        CrossAppDomain,
        All,
    }

    export class StreamingContext {
        Context: any
        State: StreamingContextStates
        constructor(state: StreamingContextStates)
        constructor(state: StreamingContextStates, additional: any)
        Equals(obj: any): boolean
        GetHashCode(): number
    }

    export interface ISerializable {
        GetObjectData(info: SerializationInfo, context: StreamingContext): void
    }

    export interface IObjectReference {
        GetRealObject(context: StreamingContext): any
    }
}