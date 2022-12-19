
/* IMPORT */

import type {NODE, AST} from './types';

/* HELPERS */

const stringifyNode = ( node: NODE ): string => {

  return `${node.selector}{${node.body}${stringifyChildren ( node.children )}}`;

};

const stringifyChildren = ( children: NODE[] ): string => {

  let css = '';

  for ( let i = 0, l = children.length; i < l; i++ ) {

    css += stringifyNode ( children[i] );

  }

  return css;

};

/* MAIN */

const stringify = ( ast: AST ): string => {

  return stringifyChildren ( ast.children );

};

/* EXPORT */

export default stringify;
