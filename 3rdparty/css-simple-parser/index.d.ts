declare const Parser: {
    parse: (css: string) => import("./types").ROOT_NODE;
    stringify: (ast: import("./types").ROOT_NODE) => string;
    traverse: (ast: import("./types").ROOT_NODE | import("./types").NODE, fn: (node: import("./types").NODE) => any) => void;
};
export default Parser;
