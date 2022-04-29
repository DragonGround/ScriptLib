declare module "System/Configuration/Assemblies" {
    export enum AssemblyHashAlgorithm {
        None,
        MD5,
        SHA1,
        SHA256,
        SHA384,
        SHA512,
    }

    export enum AssemblyVersionCompatibility {
        SameMachine,
        SameProcess,
        SameDomain,
    }
}