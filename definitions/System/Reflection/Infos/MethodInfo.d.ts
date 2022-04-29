import { CultureInfo } from "System/Globalization"
import { Byte, Delegate, RuntimeMethodHandle, RuntimeTypeHandle, Type } from "System"
import { IList } from "System/Collections/Generic"

declare module "System/Reflection" {

    export enum MethodAttributes {
        MemberAccessMask,
        PrivateScope,
        Private,
        FamANDAssem,
        Assembly,
        Family,
        FamORAssem,
        Public,
        Static,
        Final,
        Virtual,
        HideBySig,
        CheckAccessOnOverride,
        VtableLayoutMask,
        ReuseSlot,
        NewSlot,
        Abstract,
        SpecialName,
        PinvokeImpl,
        UnmanagedExport,
        RTSpecialName,
        HasSecurity,
        RequireSecObject,
        ReservedMask,
    }

    export enum MethodImplAttributes {
        CodeTypeMask,
        IL,
        Native,
        OPTIL,
        Runtime,
        ManagedMask,
        Unmanaged,
        Managed,
        ForwardRef,
        PreserveSig,
        InternalCall,
        Synchronized,
        NoInlining,
        AggressiveInlining,
        NoOptimization,
        MaxMethodImplVal,
        SecurityMitigations,
    }

    export class LocalVariableInfo {
        IsPinned: boolean
        LocalIndex: number
        LocalType: Type
        ToString(): string
    }

    export class MethodBody {
        ExceptionHandlingClauses: IList<any /* ExceptionHandlingClause */>
        LocalVariables: IList<LocalVariableInfo>
        InitLocals: boolean
        LocalSignatureMetadataToken: number
        MaxStackSize: number
        GetILAsByteArray(): Byte[]
    }

    export class MethodBase extends MemberInfo {
        static GetMethodFromHandle(handle: RuntimeMethodHandle): MethodBase
        static GetMethodFromHandle(handle: RuntimeMethodHandle, declaringType: RuntimeTypeHandle): MethodBase
        static GetCurrentMethod(): MethodBase
        Attributes: MethodAttributes
        MethodImplementationFlags: MethodImplAttributes
        CallingConvention: CallingConventions
        IsAbstract: boolean
        IsConstructor: boolean
        IsFinal: boolean
        IsHideBySig: boolean
        IsSpecialName: boolean
        IsStatic: boolean
        IsVirtual: boolean
        IsAssembly: boolean
        IsFamily: boolean
        IsFamilyAndAssembly: boolean
        IsFamilyOrAssembly: boolean
        IsPrivate: boolean
        IsPublic: boolean
        IsConstructedGenericMethod: boolean
        IsGenericMethod: boolean
        IsGenericMethodDefinition: boolean
        ContainsGenericParameters: boolean
        MethodHandle: RuntimeMethodHandle
        IsSecurityCritical: boolean
        IsSecuritySafeCritical: boolean
        IsSecurityTransparent: boolean
        GetParameters(): ParameterInfo[]
        GetMethodImplementationFlags(): MethodImplAttributes
        GetMethodBody(): MethodBody
        GetGenericArguments(): Type[]
        Invoke(obj: any, parameters: Object[]): any
        Invoke(obj: any, invokeAttr: BindingFlags, binder: Binder, parameters: Object[], culture: CultureInfo): any
        Equals(obj: any): boolean
        GetHashCode(): number
    }

    export class MethodInfo extends MethodBase {
        MemberType: MemberTypes
        ReturnParameter: ParameterInfo
        ReturnType: Type
        ReturnTypeCustomAttributes: ICustomAttributeProvider
        GetGenericArguments(): Type[]
        GetGenericMethodDefinition(): MethodInfo
        MakeGenericMethod(typeArguments: Type[]): MethodInfo
        GetBaseDefinition(): MethodInfo
        CreateDelegate(delegateType: Type): Delegate
        CreateDelegate(delegateType: Type, target: any): Delegate
        Equals(obj: any): boolean
        GetHashCode(): number
    }
}