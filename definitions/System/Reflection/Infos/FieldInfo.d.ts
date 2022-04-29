import { CultureInfo } from "System/Globalization"
import { RuntimeFieldHandle, RuntimeTypeHandle, Type, TypedReference } from "System"


declare module "System/Reflection" {

    export enum FieldAttributes {
        FieldAccessMask,
        PrivateScope,
        Private,
        FamANDAssem,
        Assembly,
        Family,
        FamORAssem,
        Public,
        Static,
        InitOnly,
        Literal,
        NotSerialized,
        SpecialName,
        PinvokeImpl,
        RTSpecialName,
        HasFieldMarshal,
        HasDefault,
        HasFieldRVA,
        ReservedMask,
    }
    
    export class FieldInfo extends MemberInfo {
        static GetFieldFromHandle(handle: RuntimeFieldHandle): FieldInfo
        static GetFieldFromHandle(handle: RuntimeFieldHandle, declaringType: RuntimeTypeHandle): FieldInfo
        MemberType: MemberTypes
        Attributes: FieldAttributes
        FieldType: Type
        IsInitOnly: boolean
        IsLiteral: boolean
        IsNotSerialized: boolean
        IsPinvokeImpl: boolean
        IsSpecialName: boolean
        IsStatic: boolean
        IsAssembly: boolean
        IsFamily: boolean
        IsFamilyAndAssembly: boolean
        IsFamilyOrAssembly: boolean
        IsPrivate: boolean
        IsPublic: boolean
        IsSecurityCritical: boolean
        IsSecuritySafeCritical: boolean
        IsSecurityTransparent: boolean
        FieldHandle: RuntimeFieldHandle
        Equals(obj: any): boolean
        GetHashCode(): number
        GetValue(obj: any): any
        SetValue(obj: any, value: any): void
        SetValue(obj: any, value: any, invokeAttr: BindingFlags, binder: Binder, culture: CultureInfo): void
        SetValueDirect(obj: TypedReference, value: any): void
        GetValueDirect(obj: TypedReference): any
        GetRawConstantValue(): any
        GetOptionalCustomModifiers(): Type[]
        GetRequiredCustomModifiers(): Type[]
    }
}