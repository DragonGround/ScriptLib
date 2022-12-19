
/* MAIN */

type TOKEN_SELECTOR = {
  type: 1,
  index: number,
  indexEnd: number,
  selector: string
};

type TOKEN_BODY_START = {
  type: 2,
  index: number
};

type TOKEN_BODY_END = {
  type: 3,
  index: number
};

type TOKEN = TOKEN_SELECTOR | TOKEN_BODY_START | TOKEN_BODY_END;

type AST = ROOT_NODE;

type ROOT_NODE = {
  parent: null,
  children: NODE[]
};

type NODE = {
  parent: ROOT_NODE | NODE,
  index: number,
  indexEnd: number,
  selector: string,
  selectorIndex: number,
  selectorIndexEnd: number,
  body: string,
  bodyIndex: number,
  bodyIndexEnd: number,
  children: NODE[]
};

/* EXPORT */

export type {TOKEN_SELECTOR, TOKEN_BODY_START, TOKEN_BODY_END, TOKEN, AST, ROOT_NODE, NODE};
