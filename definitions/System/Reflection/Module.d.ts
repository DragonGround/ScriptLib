import { Guid, ModuleHandle, Type, Byte } from "System"
import { IEnumerable, IList } from "System/Collections/Generic"
import { ISerializable, SerializationInfo, StreamingContext } from "System/Runtime/Serialization"

declare module "System/Reflection" {

    export enum PortableExecutableKinds {
        NotAPortableExecutableImage,
        ILOnly,
        Required32Bit,
        PE32Plus,
        Unmanaged32Bit,
        Preferred32Bit,
    }

    export enum ImageFileMachine {
        I386,
        IA64,
        AMD64,
        ARM,
    }

    export enum CallingConventions {
        Standard,
        VarArgs,
        Any,
        HasThis,
        ExplicitThis,
    }

    export class Module implements ISerializable {
        static FilterTypeName: TypeFilter
        static FilterTypeNameIgnoreCase: TypeFilter
        Assembly: Assembly
        FullyQualifiedName: string
        Name: string
        MDStreamVersion: number
        ModuleVersionId: Guid
        ScopeName: string
        ModuleHandle: ModuleHandle
        CustomAttributes: IEnumerable<CustomAttributeData>
        MetadataToken: number
        GetPEKind(peKind: PortableExecutableKinds, machine: ImageFileMachine): void
        IsResource(): boolean
        IsDefined(attributeType: Type, inherit: boolean): boolean
        GetCustomAttributesData(): IList<CustomAttributeData>
        GetCustomAttributes(inherit: boolean): Object[]
        GetCustomAttributes(attributeType: Type, inherit: boolean): Object[]
        GetMethod(name: string): MethodInfo
        GetMethod(name: string, types: Type[]): MethodInfo
        GetMethod(name: string, bindingAttr: BindingFlags, binder: Binder, callConvention: CallingConventions, types: Type[], modifiers: ParameterModifier[]): MethodInfo
        GetMethods(): MethodInfo[]
        GetMethods(bindingFlags: BindingFlags): MethodInfo[]
        GetField(name: string): FieldInfo
        GetField(name: string, bindingAttr: BindingFlags): FieldInfo
        GetFields(): FieldInfo[]
        GetFields(bindingFlags: BindingFlags): FieldInfo[]
        GetTypes(): Type[]
        GetType(className: string): Type
        GetType(className: string, ignoreCase: boolean): Type
        GetType(className: string, throwOnError: boolean, ignoreCase: boolean): Type
        FindTypes(filter: TypeFilter, filterCriteria: any): Type[]
        ResolveField(metadataToken: number): FieldInfo
        ResolveField(metadataToken: number, genericTypeArguments: Type[], genericMethodArguments: Type[]): FieldInfo
        ResolveMember(metadataToken: number): MemberInfo
        ResolveMember(metadataToken: number, genericTypeArguments: Type[], genericMethodArguments: Type[]): MemberInfo
        ResolveMethod(metadataToken: number): MethodBase
        ResolveMethod(metadataToken: number, genericTypeArguments: Type[], genericMethodArguments: Type[]): MethodBase
        ResolveSignature(metadataToken: number): Byte[]
        ResolveString(metadataToken: number): string
        ResolveType(metadataToken: number): Type
        ResolveType(metadataToken: number, genericTypeArguments: Type[], genericMethodArguments: Type[]): Type
        GetObjectData(info: SerializationInfo, context: StreamingContext): void
        Equals(o: any): boolean
        GetHashCode(): number
        ToString(): string
        GetSignerCertificate(): any // X509Certificate
    }
}