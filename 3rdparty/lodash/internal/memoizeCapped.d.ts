declare function memoizeCapped(func: any): {
    (...args: any[]): any;
    cache: Map<any, any>;
};
export default memoizeCapped;
