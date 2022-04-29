



declare module "System" {
    import { StructLayoutAttribute } from "System/Runtime/InteropServices"
    import { CultureInfo } from "System/Globalization"
    import { Assembly, AssemblyName, Binder, BindingFlags, ConstructorInfo, FieldInfo, GenericParameterAttributes, ICustomAttributeProvider, InterfaceMapping, IReflect, MemberFilter, MemberInfo, MemberTypes, MethodBase, MethodInfo, Module, TypeAttributes, TypeFilter, ParameterModifier, CallingConventions, EventInfo, PropertyInfo } from "System/Reflection"

    export class TypedReference {
        static MakeTypedReference(target: any, flds: FieldInfo[]): TypedReference
        static ToObject(value: TypedReference): any
        static GetTargetType(value: TypedReference): Type
        static TargetTypeToken(value: TypedReference): RuntimeTypeHandle
        static SetTypedReference(target: TypedReference, value: any): void
        GetHashCode(): number
        Equals(o: any): boolean
    }

    export class Type extends MemberInfo implements ICustomAttributeProvider, IReflect {
        static DefaultBinder: Binder
        static Delimiter: Char
        static EmptyTypes: Type[]
        static Missing: any
        static FilterAttribute: MemberFilter
        static FilterName: MemberFilter
        static FilterNameIgnoreCase: MemberFilter
        static GetTypeHandle(o: any): any // RuntimeTypeHandle
        static GetTypeArray(args: Object[]): Type[]
        static GetTypeCode(type: Type): TypeCode
        static GetTypeFromCLSID(clsid: Guid): Type
        static GetTypeFromCLSID(clsid: Guid, throwOnError: boolean): Type
        static GetTypeFromCLSID(clsid: Guid, server: string): Type
        static GetTypeFromProgID(progID: string): Type
        static GetTypeFromProgID(progID: string, throwOnError: boolean): Type
        static GetTypeFromProgID(progID: string, server: string): Type
        static MakeGenericSignatureType(genericTypeDefinition: Type, typeArguments: Type[]): Type
        static MakeGenericMethodParameter(position: number): Type
        static GetTypeFromHandle(handle: any /* RuntimeTypeHandle */): Type
        static GetType(typeName: string, throwOnError: boolean, ignoreCase: boolean): Type
        static GetType(typeName: string, throwOnError: boolean): Type
        static GetType(typeName: string): Type
        static GetType(typeName: string, assemblyResolver: (AssemblyName) => Assembly, typeResolver: (Assembly, string, boolean) => Type): Type
        static GetType(typeName: string, assemblyResolver: (AssemblyName) => Assembly, typeResolver: (Assembly, string, boolean) => Type, throwOnError: boolean): Type
        static GetType(typeName: string, assemblyResolver: (AssemblyName) => Assembly, typeResolver: (Assembly, string, boolean) => Type, throwOnError: boolean, ignoreCase: boolean): Type
        static ReflectionOnlyGetType(typeName: string, throwIfNotFound: boolean, ignoreCase: boolean): Type
        static GetTypeFromCLSID(clsid: Guid, server: string, throwOnError: boolean): Type
        static GetTypeFromProgID(progID: string, server: string, throwOnError: boolean): Type
        IsSerializable: boolean
        ContainsGenericParameters: boolean
        IsVisible: boolean
        MemberType: MemberTypes
        Namespace: string
        AssemblyQualifiedName: string
        FullName: string
        Assembly: Assembly
        Module: Module
        IsNested: boolean
        DeclaringType: Type
        DeclaringMethod: MethodBase
        ReflectedType: Type
        UnderlyingSystemType: Type
        IsTypeDefinition: boolean
        IsArray: boolean
        IsByRef: boolean
        IsPointer: boolean
        IsConstructedGenericType: boolean
        IsGenericParameter: boolean
        IsGenericTypeParameter: boolean
        IsGenericMethodParameter: boolean
        IsGenericType: boolean
        IsGenericTypeDefinition: boolean
        IsSZArray: boolean
        IsVariableBoundArray: boolean
        IsByRefLike: boolean
        HasElementType: boolean
        GenericTypeArguments: Type[]
        GenericParameterPosition: number
        GenericParameterAttributes: GenericParameterAttributes
        Attributes: TypeAttributes
        IsAbstract: boolean
        IsImport: boolean
        IsSealed: boolean
        IsSpecialName: boolean
        IsClass: boolean
        IsNestedAssembly: boolean
        IsNestedFamANDAssem: boolean
        IsNestedFamily: boolean
        IsNestedFamORAssem: boolean
        IsNestedPrivate: boolean
        IsNestedPublic: boolean
        IsNotPublic: boolean
        IsPublic: boolean
        IsAutoLayout: boolean
        IsExplicitLayout: boolean
        IsLayoutSequential: boolean
        IsAnsiClass: boolean
        IsAutoClass: boolean
        IsUnicodeClass: boolean
        IsCOMObject: boolean
        IsContextful: boolean
        IsCollectible: boolean
        IsEnum: boolean
        IsMarshalByRef: boolean
        IsPrimitive: boolean
        IsValueType: boolean
        IsSignatureType: boolean
        IsSecurityCritical: boolean
        IsSecuritySafeCritical: boolean
        IsSecurityTransparent: boolean
        StructLayoutAttribute: StructLayoutAttribute
        TypeInitializer: ConstructorInfo
        TypeHandle: RuntimeTypeHandle
        GUID: Guid
        BaseType: Type
        IsInterface: boolean
        IsEnumDefined(value: any): boolean
        GetEnumName(value: any): string
        GetEnumNames(): String[]
        FindInterfaces(filter: TypeFilter, filterCriteria: any): Type[]
        FindMembers(memberType: MemberTypes, bindingAttr: BindingFlags, filter: MemberFilter, filterCriteria: any): MemberInfo[]
        IsSubclassOf(c: Type): boolean
        IsAssignableFrom(c: Type): boolean
        GetType(): Type
        GetElementType(): Type
        GetArrayRank(): number
        GetGenericTypeDefinition(): Type
        GetGenericArguments(): Type[]
        GetGenericParameterConstraints(): Type[]
        GetConstructor(types: Type[]): ConstructorInfo
        GetConstructor(bindingAttr: BindingFlags, binder: Binder, types: Type[], modifiers: ParameterModifier[]): ConstructorInfo
        GetConstructor(bindingAttr: BindingFlags, binder: Binder, callConvention: CallingConventions, types: Type[], modifiers: ParameterModifier[]): ConstructorInfo
        GetConstructors(): ConstructorInfo[]
        GetConstructors(bindingAttr: BindingFlags): ConstructorInfo[]
        GetEvent(name: string): EventInfo
        GetEvent(name: string, bindingAttr: BindingFlags): EventInfo
        GetEvents(): EventInfo[]
        GetEvents(bindingAttr: BindingFlags): EventInfo[]
        GetField(name: string): FieldInfo
        GetField(name: string, bindingAttr: BindingFlags): FieldInfo
        GetFields(): FieldInfo[]
        GetFields(bindingAttr: BindingFlags): FieldInfo[]
        GetMember(name: string): MemberInfo[]
        GetMember(name: string, bindingAttr: BindingFlags): MemberInfo[]
        GetMember(name: string, type: MemberTypes, bindingAttr: BindingFlags): MemberInfo[]
        GetMembers(): MemberInfo[]
        GetMembers(bindingAttr: BindingFlags): MemberInfo[]
        GetMethod(name: string): MethodInfo
        GetMethod(name: string, bindingAttr: BindingFlags): MethodInfo
        GetMethod(name: string, types: Type[]): MethodInfo
        GetMethod(name: string, types: Type[], modifiers: ParameterModifier[]): MethodInfo
        GetMethod(name: string, bindingAttr: BindingFlags, binder: Binder, types: Type[], modifiers: ParameterModifier[]): MethodInfo
        GetMethod(name: string, bindingAttr: BindingFlags, binder: Binder, callConvention: CallingConventions, types: Type[], modifiers: ParameterModifier[]): MethodInfo
        GetMethod(name: string, genericParameterCount: number, types: Type[]): MethodInfo
        GetMethod(name: string, genericParameterCount: number, types: Type[], modifiers: ParameterModifier[]): MethodInfo
        GetMethod(name: string, genericParameterCount: number, bindingAttr: BindingFlags, binder: Binder, types: Type[], modifiers: ParameterModifier[]): MethodInfo
        GetMethod(name: string, genericParameterCount: number, bindingAttr: BindingFlags, binder: Binder, callConvention: CallingConventions, types: Type[], modifiers: ParameterModifier[]): MethodInfo
        GetMethods(): MethodInfo[]
        GetMethods(bindingAttr: BindingFlags): MethodInfo[]
        GetNestedType(name: string): Type
        GetNestedType(name: string, bindingAttr: BindingFlags): Type
        GetNestedTypes(): Type[]
        GetNestedTypes(bindingAttr: BindingFlags): Type[]
        GetProperty(name: string): PropertyInfo
        GetProperty(name: string, bindingAttr: BindingFlags): PropertyInfo
        GetProperty(name: string, returnType: Type): PropertyInfo
        GetProperty(name: string, types: Type[]): PropertyInfo
        GetProperty(name: string, returnType: Type, types: Type[]): PropertyInfo
        GetProperty(name: string, returnType: Type, types: Type[], modifiers: ParameterModifier[]): PropertyInfo
        GetProperty(name: string, bindingAttr: BindingFlags, binder: Binder, returnType: Type, types: Type[], modifiers: ParameterModifier[]): PropertyInfo
        GetProperties(): PropertyInfo[]
        GetProperties(bindingAttr: BindingFlags): PropertyInfo[]
        GetDefaultMembers(): MemberInfo[]
        InvokeMember(name: string, invokeAttr: BindingFlags, binder: Binder, target: any, args: Object[]): any
        InvokeMember(name: string, invokeAttr: BindingFlags, binder: Binder, target: any, args: Object[], culture: CultureInfo): any
        InvokeMember(name: string, invokeAttr: BindingFlags, binder: Binder, target: any, args: Object[], modifiers: ParameterModifier[], culture: CultureInfo, namedParameters: String[]): any
        GetInterface(name: string): Type
        GetInterface(name: string, ignoreCase: boolean): Type
        GetInterfaces(): Type[]
        GetInterfaceMap(interfaceType: Type): InterfaceMapping
        IsInstanceOfType(o: any): boolean
        IsEquivalentTo(other: Type): boolean
        GetEnumUnderlyingType(): Type
        GetEnumValues(): any[]
        MakeArrayType(): Type
        MakeArrayType(rank: number): Type
        MakeByRefType(): Type
        MakeGenericType(typeArguments: Type[]): Type
        MakePointerType(): Type
        ToString(): string
        Equals(o: any): boolean
        GetHashCode(): number
        Equals(o: Type): boolean
    }
}