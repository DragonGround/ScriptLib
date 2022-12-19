declare type TOKEN_SELECTOR = {
    type: 1;
    index: number;
    indexEnd: number;
    selector: string;
};
declare type TOKEN_BODY_START = {
    type: 2;
    index: number;
};
declare type TOKEN_BODY_END = {
    type: 3;
    index: number;
};
declare type TOKEN = TOKEN_SELECTOR | TOKEN_BODY_START | TOKEN_BODY_END;
declare type AST = ROOT_NODE;
declare type ROOT_NODE = {
    parent: null;
    children: NODE[];
};
declare type NODE = {
    parent: ROOT_NODE | NODE;
    index: number;
    indexEnd: number;
    selector: string;
    selectorIndex: number;
    selectorIndexEnd: number;
    body: string;
    bodyIndex: number;
    bodyIndexEnd: number;
    children: NODE[];
};
export type { TOKEN_SELECTOR, TOKEN_BODY_START, TOKEN_BODY_END, TOKEN, AST, ROOT_NODE, NODE };
