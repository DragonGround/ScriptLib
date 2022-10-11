declare class Hash {
    __data__: any[];
    size: number;
    constructor(entries?: any);
    clear(): void;
    delete(key: any): boolean;
    get(key: any): any;
    has(key: any): boolean;
    set(key: any, value: any): this;
}
export default Hash;
