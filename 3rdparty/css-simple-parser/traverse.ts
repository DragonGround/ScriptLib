
/* IMPORT */

import type {NODE, AST} from './types';

/* MAIN */

const traverse = ( ast: AST | NODE, fn: ( node: NODE ) => any ): void => {

  const {children} = ast;

  for ( let i = 0, l = children.length; i < l; i++ ) {

    const node = children[i];

    fn ( node );

    traverse ( node, fn );

  }

};

/* EXPORT */

export default traverse;
