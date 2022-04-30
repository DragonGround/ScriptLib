declare module "OneJS" {

    export class Service {
        static Get<T>(type: { new(): T }): T
        static Set<T>(obj: any, type: { new(): T }): void
    }

}