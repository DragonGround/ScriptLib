


declare module "System/Reflection" {
    import { Type, ICloneable, MulticastDelegate, IntPtr, IAsyncResult, Byte, Delegate } from "System"
    import { CultureInfo } from "System/Globalization"
    import { ISerializable, IObjectReference, StreamingContext, IDeserializationCallback, SerializationInfo } from "System/Runtime/Serialization"
    import { IEnumerable, IList } from "System/Collections/Generic"

    export enum BindingFlags {
        Default,
        IgnoreCase,
        DeclaredOnly,
        Instance,
        Static,
        Public,
        NonPublic,
        FlattenHierarchy,
        InvokeMethod,
        CreateInstance,
        GetField,
        SetField,
        GetProperty,
        SetProperty,
        PutDispProperty,
        PutRefDispProperty,
        ExactBinding,
        SuppressChangeType,
        OptionalParamBinding,
        IgnoreReturn,
        DoNotWrapExceptions,
    }

    export enum MemberTypes {
        Constructor,
        Event,
        Field,
        Method,
        Property,
        TypeInfo,
        Custom,
        NestedType,
        All,
    }

    export interface ICustomAttributeProvider {
        GetCustomAttributes(inherit: boolean): Object[]
        GetCustomAttributes(attributeType: Type, inherit: boolean): Object[]
        IsDefined(attributeType: Type, inherit: boolean): boolean
    }

    export class ParameterModifier {
        Item: boolean
        constructor(parameterCount: number)
    }

    export interface IReflect {
        UnderlyingSystemType: Type
        GetMethod(name: string, bindingAttr: BindingFlags, binder: Binder, types: Type[], modifiers: ParameterModifier[]): MethodInfo
        GetMethod(name: string, bindingAttr: BindingFlags): MethodInfo
        GetMethods(bindingAttr: BindingFlags): MethodInfo[]
        GetField(name: string, bindingAttr: BindingFlags): FieldInfo
        GetFields(bindingAttr: BindingFlags): FieldInfo[]
        GetProperty(name: string, bindingAttr: BindingFlags): PropertyInfo
        GetProperty(name: string, bindingAttr: BindingFlags, binder: Binder, returnType: Type, types: Type[], modifiers: ParameterModifier[]): PropertyInfo
        GetProperties(bindingAttr: BindingFlags): PropertyInfo[]
        GetMember(name: string, bindingAttr: BindingFlags): MemberInfo[]
        GetMembers(bindingAttr: BindingFlags): MemberInfo[]
        InvokeMember(name: string, invokeAttr: BindingFlags, binder: Binder, target: any, args: Object[], modifiers: ParameterModifier[], culture: CultureInfo, namedParameters: String[]): any
    }

    export enum ParameterAttributes {
        None,
        In,
        Out,
        Lcid,
        Retval,
        Optional,
        HasDefault,
        HasFieldMarshal,
        Reserved3,
        Reserved4,
        ReservedMask,
    }

    export class ParameterInfo implements IObjectReference {
        Attributes: ParameterAttributes
        Member: MemberInfo
        Name: string
        ParameterType: Type
        Position: number
        IsIn: boolean
        IsLcid: boolean
        IsOptional: boolean
        IsOut: boolean
        IsRetval: boolean
        DefaultValue: any
        RawDefaultValue: any
        HasDefaultValue: boolean
        CustomAttributes: IEnumerable<CustomAttributeData>
        MetadataToken: number
        IsDefined(attributeType: Type, inherit: boolean): boolean
        GetCustomAttributesData(): IList<CustomAttributeData>
        GetCustomAttributes(inherit: boolean): Object[]
        GetCustomAttributes(attributeType: Type, inherit: boolean): Object[]
        GetOptionalCustomModifiers(): Type[]
        GetRequiredCustomModifiers(): Type[]
        GetRealObject(context: StreamingContext): any
        ToString(): string
    }

    export class Binder {
        BindToField(bindingAttr: BindingFlags, match: FieldInfo[], value: any, culture: CultureInfo): FieldInfo
        BindToMethod(bindingAttr: BindingFlags, match: MethodBase[], args: Object[], modifiers: ParameterModifier[], culture: CultureInfo, names: String[], state: any): MethodBase
        ChangeType(value: any, type: Type, culture: CultureInfo): any
        ReorderArgumentArray(args: Object[], state: any): void
        SelectMethod(bindingAttr: BindingFlags, match: MethodBase[], types: Type[], modifiers: ParameterModifier[]): MethodBase
        SelectProperty(bindingAttr: BindingFlags, match: PropertyInfo[], returnType: Type, indexes: Type[], modifiers: ParameterModifier[]): PropertyInfo
        CanChangeType(value: any, type: Type, culture: CultureInfo): boolean
    }

    export class CustomAttributeTypedArgument {
        ArgumentType: Type
        Value: any
        constructor(value: any)
        constructor(argumentType: Type, value: any)
        Equals(obj: any): boolean
        GetHashCode(): number
        ToString(): string
    }

    export class CustomAttributeNamedArgument {
        TypedValue: CustomAttributeTypedArgument
        IsField: boolean
        MemberName: string
        MemberInfo: MemberInfo
        constructor(memberInfo: MemberInfo, value: any)
        constructor(memberInfo: MemberInfo, typedArgument: CustomAttributeTypedArgument)
        Equals(obj: any): boolean
        GetHashCode(): number
        ToString(): string
    }

    export class CustomAttributeData {
        static GetCustomAttributes(target: Assembly): IList<CustomAttributeData>
        static GetCustomAttributes(target: MemberInfo): IList<CustomAttributeData>
        static GetCustomAttributes(target: Module): IList<CustomAttributeData>
        static GetCustomAttributes(target: ParameterInfo): IList<CustomAttributeData>
        Constructor: ConstructorInfo
        ConstructorArguments: IList<CustomAttributeTypedArgument>
        NamedArguments: IList<CustomAttributeNamedArgument>
        AttributeType: Type
        ToString(): string
        Equals(obj: any): boolean
        GetHashCode(): number
    }

    export class MemberInfo {
        MemberType: MemberTypes
        Name: string
        DeclaringType: Type
        ReflectedType: Type
        Module: Module
        CustomAttributes: IEnumerable<CustomAttributeData>
        MetadataToken: number
        HasSameMetadataDefinitionAs(other: MemberInfo): boolean
        IsDefined(attributeType: Type, inherit: boolean): boolean
        GetCustomAttributes(inherit: boolean): Object[]
        GetCustomAttributes(attributeType: Type, inherit: boolean): Object[]
        GetCustomAttributesData(): IList<CustomAttributeData>
        Equals(obj: any): boolean
        GetHashCode(): number
    }


    export class InterfaceMapping {
        TargetType: Type
        InterfaceType: Type
        TargetMethods: MethodInfo[]
        InterfaceMethods: MethodInfo[]
    }

    export class MemberFilter extends MulticastDelegate implements ISerializable, ICloneable {
        constructor(object: any, method: IntPtr)
        Invoke(m: MemberInfo, filterCriteria: any): boolean
        BeginInvoke(m: MemberInfo, filterCriteria: any, callback: any /* AsyncCallback */, object: any): IAsyncResult
        EndInvoke(result: IAsyncResult): boolean
    }

    export class TypeFilter extends MulticastDelegate implements ISerializable, ICloneable {
        constructor(object: any, method: IntPtr)
        Invoke(m: Type, filterCriteria: any): boolean
        BeginInvoke(m: Type, filterCriteria: any, callback: any /* AsyncCallback */, object: any): IAsyncResult
        EndInvoke(result: IAsyncResult): boolean
    }

    export class StrongNameKeyPair implements IDeserializationCallback, ISerializable {
        PublicKey: Byte[]
        constructor(keyPairArray: Byte[])
        constructor(keyPairFile: any /* FileStream */)
        constructor(keyPairContainer: string)

        OnDeserialization(sender: any): void
        GetObjectData(info: SerializationInfo, context: StreamingContext): void
    }

    export enum GenericParameterAttributes {
        None,
        VarianceMask,
        Covariant,
        Contravariant,
        SpecialConstraintMask,
        ReferenceTypeConstraint,
        NotNullableValueTypeConstraint,
        DefaultConstructorConstraint,
    }

    export enum TypeAttributes {
        VisibilityMask,
        NotPublic,
        Public,
        NestedPublic,
        NestedPrivate,
        NestedFamily,
        NestedAssembly,
        NestedFamANDAssem,
        NestedFamORAssem,
        LayoutMask,
        AutoLayout,
        SequentialLayout,
        ExplicitLayout,
        ClassSemanticsMask,
        Class,
        Interface,
        Abstract,
        Sealed,
        SpecialName,
        Import,
        Serializable,
        WindowsRuntime,
        StringFormatMask,
        AnsiClass,
        UnicodeClass,
        AutoClass,
        CustomFormatClass,
        CustomFormatMask,
        BeforeFieldInit,
        RTSpecialName,
        HasSecurity,
        ReservedMask,
    }

    export interface IReflectableType {
        GetTypeInfo(): TypeInfo
    }

    export enum EventAttributes {
        None,
        SpecialName,
        RTSpecialName,
        ReservedMask,
    }

    export class EventInfo extends MemberInfo implements ICustomAttributeProvider {
        MemberType: MemberTypes
        Attributes: EventAttributes
        IsSpecialName: boolean
        AddMethod: MethodInfo
        RemoveMethod: MethodInfo
        RaiseMethod: MethodInfo
        IsMulticast: boolean
        EventHandlerType: Type
        GetOtherMethods(): MethodInfo[]
        GetOtherMethods(nonPublic: boolean): MethodInfo[]
        GetAddMethod(): MethodInfo
        GetRemoveMethod(): MethodInfo
        GetRaiseMethod(): MethodInfo
        GetAddMethod(nonPublic: boolean): MethodInfo
        GetRemoveMethod(nonPublic: boolean): MethodInfo
        GetRaiseMethod(nonPublic: boolean): MethodInfo
        RemoveEventHandler(target: any, handler: Delegate): void
        Equals(obj: any): boolean
        GetHashCode(): number
        AddEventHandler(target: any, handler: Delegate): void
    }

}