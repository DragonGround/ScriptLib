import { Type } from "System"
import { IEnumerable } from "System/Collections/Generic"



declare module "System/Reflection" {


    export class TypeInfo extends Type implements ICustomAttributeProvider, IReflect, IReflectableType {
        GenericTypeParameters: Type[]
        DeclaredConstructors: IEnumerable<ConstructorInfo>
        DeclaredEvents: IEnumerable<EventInfo>
        DeclaredFields: IEnumerable<FieldInfo>
        DeclaredMembers: IEnumerable<MemberInfo>
        DeclaredMethods: IEnumerable<MethodInfo>
        DeclaredNestedTypes: IEnumerable<TypeInfo>
        DeclaredProperties: IEnumerable<PropertyInfo>
        ImplementedInterfaces: IEnumerable<Type>
        AsType(): Type
        GetDeclaredEvent(name: string): EventInfo
        GetDeclaredField(name: string): FieldInfo
        GetDeclaredMethod(name: string): MethodInfo
        GetDeclaredNestedType(name: string): TypeInfo
        GetDeclaredProperty(name: string): PropertyInfo
        GetDeclaredMethods(name: string): IEnumerable<MethodInfo>
        IsAssignableFrom(typeInfo: TypeInfo): boolean
        GetTypeInfo(): TypeInfo
    }
}