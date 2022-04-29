

declare module "System/Reflection" {
    import { CultureInfo } from "System/Globalization"

    export class ConstructorInfo extends MethodBase {
        static ConstructorName: string
        static TypeConstructorName: string
        MemberType: MemberTypes
        Invoke(parameters: Object[]): any
        Invoke(invokeAttr: BindingFlags, binder: Binder, parameters: Object[], culture: CultureInfo): any
        Equals(obj: any): boolean
        GetHashCode(): number
    }
}