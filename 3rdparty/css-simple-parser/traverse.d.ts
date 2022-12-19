import type { NODE, AST } from './types';
declare const traverse: (ast: AST | NODE, fn: (node: NODE) => any) => void;
export default traverse;
