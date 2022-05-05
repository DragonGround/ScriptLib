declare function memoize(func: any, resolver: any): {
    (...args: any[]): any;
    cache: Map<any, any>;
};
declare namespace memoize {
    var Cache: MapConstructor;
}
export default memoize;
