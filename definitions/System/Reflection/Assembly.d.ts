


declare module "System/Reflection" {
    import { Byte, Type, ICloneable, Version } from "System"
    import { IEnumerable, IList } from "System/Collections/Generic"
    import { CultureInfo } from "System/Globalization"
    import { IDeserializationCallback, ISerializable, SerializationInfo, StreamingContext } from "System/Runtime/Serialization"
    import { AssemblyHashAlgorithm, AssemblyVersionCompatibility } from "System/Configuration/Assemblies"
    import { FileStream, Stream } from "System/IO"

    export enum ProcessorArchitecture {
        None,
        MSIL,
        X86,
        IA64,
        Amd64,
        Arm,
    }

    export enum AssemblyNameFlags {
        None,
        PublicKey,
        EnableJITcompileOptimizer,
        EnableJITcompileTracking,
        Retargetable,
    }

    export enum AssemblyContentType {
        Default,
        WindowsRuntime,
    }

    export class AssemblyName implements IDeserializationCallback, ISerializable, ICloneable {
        static ReferenceMatchesDefinition(reference: AssemblyName, definition: AssemblyName): boolean
        static GetAssemblyName(assemblyFile: string): AssemblyName
        ProcessorArchitecture: ProcessorArchitecture
        Name: string
        CodeBase: string
        EscapedCodeBase: string
        CultureInfo: CultureInfo
        Flags: AssemblyNameFlags
        FullName: string
        HashAlgorithm: AssemblyHashAlgorithm
        KeyPair: StrongNameKeyPair
        Version: Version
        VersionCompatibility: AssemblyVersionCompatibility
        CultureName: string
        ContentType: AssemblyContentType
        constructor()
        constructor(assemblyName: string)
        ToString(): string
        GetPublicKey(): Byte[]
        GetPublicKeyToken(): Byte[]
        SetPublicKey(publicKey: Byte[]): void
        SetPublicKeyToken(publicKeyToken: Byte[]): void
        GetObjectData(info: SerializationInfo, context: StreamingContext): void
        Clone(): any
        OnDeserialization(sender: any): void
    }

    export enum ResourceLocation {
        ContainedInAnotherAssembly,
        ContainedInManifestFile,
        Embedded,
    }

    export class ManifestResourceInfo {
        ReferencedAssembly: Assembly
        FileName: string
        ResourceLocation: ResourceLocation
        constructor(containingAssembly: Assembly, containingFileName: string, resourceLocation: ResourceLocation)
    }

    export class Assembly implements ISerializable, ICustomAttributeProvider {
        static CreateQualifiedName(assemblyName: string, typeName: string): string
        static GetAssembly(type: Type): Assembly
        static GetEntryAssembly(): Assembly
        static LoadFrom(assemblyFile: string): Assembly
        static LoadFrom(assemblyFile: string, securityEvidence: any /* Evidence */): Assembly
        static LoadFrom(assemblyFile: string, securityEvidence: any /* Evidence */, hashValue: Byte[], hashAlgorithm: AssemblyHashAlgorithm): Assembly
        static LoadFrom(assemblyFile: string, hashValue: Byte[], hashAlgorithm: AssemblyHashAlgorithm): Assembly
        static UnsafeLoadFrom(assemblyFile: string): Assembly
        static LoadFile(path: string, securityEvidence: any /* Evidence */): Assembly
        static LoadFile(path: string): Assembly
        static Load(assemblyString: string): Assembly
        static Load(assemblyString: string, assemblySecurity: any /* Evidence */): Assembly
        static Load(assemblyRef: AssemblyName): Assembly
        static Load(assemblyRef: AssemblyName, assemblySecurity: any /* Evidence */): Assembly
        static Load(rawAssembly: Byte[]): Assembly
        static Load(rawAssembly: Byte[], rawSymbolStore: Byte[]): Assembly
        static Load(rawAssembly: Byte[], rawSymbolStore: Byte[], securityEvidence: any /* Evidence */): Assembly
        static Load(rawAssembly: Byte[], rawSymbolStore: Byte[], securityContextSource: any /* SecurityContextSource */): Assembly
        static ReflectionOnlyLoad(rawAssembly: Byte[]): Assembly
        static ReflectionOnlyLoad(assemblyString: string): Assembly
        static ReflectionOnlyLoadFrom(assemblyFile: string): Assembly
        static LoadWithPartialName(partialName: string): Assembly
        static LoadWithPartialName(partialName: string, securityEvidence: any /* Evidence */): Assembly
        static GetExecutingAssembly(): Assembly
        static GetCallingAssembly(): Assembly
        CodeBase: string
        EscapedCodeBase: string
        FullName: string
        EntryPoint: MethodInfo
        Evidence: any /* Evidence */
        Location: string
        ImageRuntimeVersion: string
        HostContext: number
        ReflectionOnly: boolean
        // PermissionSet: PermissionSet
        // SecurityRuleSet: SecurityRuleSet
        IsFullyTrusted: boolean
        ManifestModule: Module
        GlobalAssemblyCache: boolean
        IsDynamic: boolean
        DefinedTypes: IEnumerable<TypeInfo>
        ExportedTypes: IEnumerable<Type>
        Modules: IEnumerable<Module>
        CustomAttributes: IEnumerable<CustomAttributeData>
        GetObjectData(info: SerializationInfo, context: StreamingContext): void
        IsDefined(attributeType: Type, inherit: boolean): boolean
        GetCustomAttributes(inherit: boolean): Object[]
        GetCustomAttributes(attributeType: Type, inherit: boolean): Object[]
        GetFiles(): FileStream[]
        GetFiles(getResourceModules: boolean): FileStream[]
        GetFile(name: string): FileStream
        GetManifestResourceStream(name: string): Stream
        GetManifestResourceStream(type: Type, name: string): Stream
        GetTypes(): Type[]
        GetExportedTypes(): Type[]
        GetType(name: string, throwOnError: boolean): Type
        GetType(name: string): Type
        GetName(copiedName: boolean): AssemblyName
        GetName(): AssemblyName
        ToString(): string
        LoadModule(moduleName: string, rawModule: Byte[]): Module
        LoadModule(moduleName: string, rawModule: Byte[], rawSymbolStore: Byte[]): Module
        CreateInstance(typeName: string): any
        CreateInstance(typeName: string, ignoreCase: boolean): any
        CreateInstance(typeName: string, ignoreCase: boolean, bindingAttr: BindingFlags, binder: Binder, args: Object[], culture: CultureInfo, activationAttributes: Object[]): any
        GetLoadedModules(): Module[]
        GetModules(): Module[]
        GetManifestResourceNames(): String[]
        GetManifestResourceInfo(resourceName: string): ManifestResourceInfo
        GetHashCode(): number
        Equals(o: any): boolean
        GetCustomAttributesData(): IList<CustomAttributeData>
        GetType(name: string, throwOnError: boolean, ignoreCase: boolean): Type
        GetModule(name: string): Module
        GetReferencedAssemblies(): AssemblyName[]
        GetModules(getResourceModules: boolean): Module[]
        GetLoadedModules(getResourceModules: boolean): Module[]
        GetSatelliteAssembly(culture: CultureInfo): Assembly
        GetSatelliteAssembly(culture: CultureInfo, version: Version): Assembly
        GetForwardedTypes(): Type[]
    }
}