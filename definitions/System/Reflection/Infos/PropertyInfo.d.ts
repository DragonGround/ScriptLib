import { Type } from "System"
import { CultureInfo } from "System/Globalization"

declare module "System/Reflection" {
    export enum PropertyAttributes {
        None,
        SpecialName,
        RTSpecialName,
        HasDefault,
        Reserved2,
        Reserved3,
        Reserved4,
        ReservedMask,
    }
    
    export class PropertyInfo extends MemberInfo implements ICustomAttributeProvider {
        MemberType: MemberTypes
        PropertyType: Type
        Attributes: PropertyAttributes
        IsSpecialName: boolean
        CanRead: boolean
        CanWrite: boolean
        GetMethod: MethodInfo
        SetMethod: MethodInfo
        GetIndexParameters(): ParameterInfo[]
        GetAccessors(): MethodInfo[]
        GetAccessors(nonPublic: boolean): MethodInfo[]
        GetGetMethod(): MethodInfo
        GetGetMethod(nonPublic: boolean): MethodInfo
        GetSetMethod(): MethodInfo
        GetSetMethod(nonPublic: boolean): MethodInfo
        GetOptionalCustomModifiers(): Type[]
        GetRequiredCustomModifiers(): Type[]
        GetValue(obj: any): any
        GetValue(obj: any, index: Object[]): any
        GetValue(obj: any, invokeAttr: BindingFlags, binder: Binder, index: Object[], culture: CultureInfo): any
        GetConstantValue(): any
        GetRawConstantValue(): any
        SetValue(obj: any, value: any): void
        SetValue(obj: any, value: any, index: Object[]): void
        SetValue(obj: any, value: any, invokeAttr: BindingFlags, binder: Binder, index: Object[], culture: CultureInfo): void
        Equals(obj: any): boolean
        GetHashCode(): number
    }
}