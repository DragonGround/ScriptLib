declare class MapCache {
    __data__: any;
    size: number;
    constructor(entries: any);
    clear(): void;
    delete(key: any): any;
    get(key: any): any;
    has(key: any): any;
    set(key: any, value: any): this;
}
export default MapCache;
