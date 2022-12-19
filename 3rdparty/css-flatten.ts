import Parser from 'css-simple-parser'
import type { NODE } from 'css-simple-parser/types'

const Resolve = {

    ampersand: (resolved: string[], selector: string, parents: string[]): void => {

        for (let pi = 0, pl = parents.length; pi < pl; pi++) {

            const temp = selector.replace('&', parents[pi]);

            if (temp.indexOf('&') >= 0) { // Ampersand selector

                Resolve.ampersand(resolved, temp, parents);

            } else { // Regular selector

                resolved.push(temp);

            }

        }

    },

    selectors: (selectors: string[], parents: string[]): string[] => {

        const resolved: string[] = [];

        for (let i = 0, l = selectors.length; i < l; i++) {

            const selector = selectors[i];

            if (selector.indexOf('&') >= 0) { // Ampersand selector

                Resolve.ampersand(resolved, selector, parents);

            } else { // Regular selector

                for (let pi = 0, pl = parents.length; pi < pl; pi++) {

                    resolved.push(`${parents[pi]} ${selector}`);

                }

            }

        }

        return resolved;

    }

}

/* MAIN */

const flatten = (css: string): string => {

    /* PARSING */

    const AST = Parser.parse(css);

    /* RESOLVING SELECTORS */

    const selectorsCache = new Map<NODE, string[]>();

    Parser.traverse(AST, node => {

        const { selector, parent } = node;

        let selectors = selector.trim().split(/\s*,\s*/g); // Splitting and cleaning up

        if ('selector' in parent) { // Regular node

            selectors = Resolve.selectors(selectors, selectorsCache.get(parent) || []);

            node.selector = selectors.join(',');

        } else { // Top-level node

            if (selector.indexOf('&') >= 0) throw new Error('Top-level ampersand placeholders are invalid');

        }

        selectorsCache.set(node, selectors);

    });

    /* FLATTENING */

    const nodes: NODE[] = [];

    Parser.traverse(AST, node => {

        if (!/\S/.test(node.body)) return; // Ignoring empty blocks, nothing to output

        nodes.push(node);

    });

    AST.children = nodes;

    /* WIDOWING */

    // const empty: never[] = [];
    const empty: any[] = [];

    for (let i = 0, l = nodes.length; i < l; i++) {

        nodes[i].children = empty;

    }

    /* STRINGIFYING */

    return Parser.stringify(AST);

};

/* EXPORT */

export default flatten;