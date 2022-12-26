declare function assign_struct<T>(type: {
    new (): T;
}, obj: any): T;
