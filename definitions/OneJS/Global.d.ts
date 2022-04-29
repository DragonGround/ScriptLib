declare module "OneJS" {

    export class Global {
        static Get<T>(type: { new(): T }): T
        static Set<T>(obj: any, type: { new(): T }): void
    }

}