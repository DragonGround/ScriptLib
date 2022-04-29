import { Assembly, MemberInfo, Module, ParameterInfo } from "System/Reflection";

declare module "System" {
    export class Attribute {
        static GetCustomAttributes(element: MemberInfo, type: Type): Attribute[]
        static GetCustomAttributes(element: MemberInfo, type: Type, inherit: boolean): Attribute[]
        static GetCustomAttributes(element: MemberInfo): Attribute[]
        static GetCustomAttributes(element: MemberInfo, inherit: boolean): Attribute[]
        static IsDefined(element: MemberInfo, attributeType: Type): boolean
        static IsDefined(element: MemberInfo, attributeType: Type, inherit: boolean): boolean
        static GetCustomAttribute(element: MemberInfo, attributeType: Type): Attribute
        static GetCustomAttribute(element: MemberInfo, attributeType: Type, inherit: boolean): Attribute
        static GetCustomAttributes(element: ParameterInfo): Attribute[]
        static GetCustomAttributes(element: ParameterInfo, attributeType: Type): Attribute[]
        static GetCustomAttributes(element: ParameterInfo, attributeType: Type, inherit: boolean): Attribute[]
        static GetCustomAttributes(element: ParameterInfo, inherit: boolean): Attribute[]
        static IsDefined(element: ParameterInfo, attributeType: Type): boolean
        static IsDefined(element: ParameterInfo, attributeType: Type, inherit: boolean): boolean
        static GetCustomAttribute(element: ParameterInfo, attributeType: Type): Attribute
        static GetCustomAttribute(element: ParameterInfo, attributeType: Type, inherit: boolean): Attribute
        static GetCustomAttributes(element: Module, attributeType: Type): Attribute[]
        static GetCustomAttributes(element: Module): Attribute[]
        static GetCustomAttributes(element: Module, inherit: boolean): Attribute[]
        static GetCustomAttributes(element: Module, attributeType: Type, inherit: boolean): Attribute[]
        static IsDefined(element: Module, attributeType: Type): boolean
        static IsDefined(element: Module, attributeType: Type, inherit: boolean): boolean
        static GetCustomAttribute(element: Module, attributeType: Type): Attribute
        static GetCustomAttribute(element: Module, attributeType: Type, inherit: boolean): Attribute
        static GetCustomAttributes(element: Assembly, attributeType: Type): Attribute[]
        static GetCustomAttributes(element: Assembly, attributeType: Type, inherit: boolean): Attribute[]
        static GetCustomAttributes(element: Assembly): Attribute[]
        static GetCustomAttributes(element: Assembly, inherit: boolean): Attribute[]
        static IsDefined(element: Assembly, attributeType: Type): boolean
        static IsDefined(element: Assembly, attributeType: Type, inherit: boolean): boolean
        static GetCustomAttribute(element: Assembly, attributeType: Type): Attribute
        static GetCustomAttribute(element: Assembly, attributeType: Type, inherit: boolean): Attribute
        TypeId: any
        Equals(obj: any): boolean
        GetHashCode(): number
        Match(obj: any): boolean
        IsDefaultAttribute(): boolean
    }
}