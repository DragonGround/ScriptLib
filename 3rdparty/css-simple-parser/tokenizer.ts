
/* IMPORT */

import indexAll from 'string-indexes';
import {TOKEN_TYPE} from './constants';
import type {TOKEN} from './types';

const {SELECTOR, BODY_START, BODY_END} = TOKEN_TYPE;

/* HELPERS */

const mergeTokensSorted = ( t1: TOKEN[], t2: TOKEN[] ): TOKEN[] => { // Optimized sorting algorithm for merging presorted token arrays

  let length = t1.length + t2.length;
  let i = t1.length - 1;
  let j = t2.length - 1;

  const merged = new Array ( length );

  while ( length > 0 ) {

    merged[--length] = ( j < 0 || ( i >= 0 && t1[i].index > t2[j].index ) ) ? t1[i--] : t2[j--];

  }

  return merged;

};

const mergeTokensSortedEvenOdd = ( t1: TOKEN[], t2: TOKEN[] ): TOKEN[] => { // Optimized sorting algorithim for merging presorted token arrays where "t1[i]" should always be placed before "t2[i]", basically it intertwines the arrays

  const length = t1.length;
  const merged = new Array ( length * 2 );

  for ( let i = 0, j = 0; i < length; i++, j += 2 ) {

    merged[j] = t1[i];
    merged[j + 1] = t2[i];

  }

  return merged;

};

const findSelectorStartIndex = ( tokens: TOKEN[], tokenIndexStart = 0, limit: number ): [number, number] => {

  let lastIndex = 0;
  let lastTokenIndex = tokenIndexStart;

  for ( let i = tokenIndexStart, l = tokens.length; i < l; i++ ) {

    const token = tokens[i];
    const index = token.index;

    if ( index >= limit ) break;

    lastIndex = ( token.type === BODY_START ) ? index : index + 1;
    lastTokenIndex = i + 1;

  }

  return [lastIndex, lastTokenIndex];

};

/* MAIN */

const tokenizer = ( css: string ): TOKEN[] => {

  /* VARIABLES */

  const startIndexes = indexAll ( css, '{' );
  const endIndexes = indexAll ( css, '}' );
  const selectorTokens: TOKEN[] = new Array ( startIndexes.length );
  const startTokens: TOKEN[] = new Array ( startIndexes.length );
  const endTokens: TOKEN[] = new Array ( endIndexes.length );

  let selectorIndex = 0;
  let startIndex = 0;
  let endIndex = 0;

  /* BODY_START */

  for ( let i = 0, l = startIndexes.length; i < l; i++ ) {

    startTokens[startIndex++] = {
      type: BODY_START,
      index: startIndexes[i] + 1 // Start index
    };

  }

  /* BODY_END */

  for ( let i = 0, l = endIndexes.length; i < l; i++ ) {

    endTokens[endIndex++] = {
      type: BODY_END,
      index: endIndexes[i] // End index
    };

  }

  /* SELECTOR */

  let prevStartTokenIndex = 0;
  let prevEndTokenIndex = 0;

  for ( let i = 0, l = startIndexes.length; i < l; i++ ) {

    const indexEnd = startIndexes[i];
    const findStartData = findSelectorStartIndex ( startTokens, prevStartTokenIndex, indexEnd );
    const findEndData = findSelectorStartIndex ( endTokens, prevEndTokenIndex, indexEnd );

    prevStartTokenIndex = findStartData[1];
    prevEndTokenIndex = findEndData[1];

    let index = ( findStartData[0] >= findEndData[0] ) ? findStartData[0] : findEndData[0];
    let selector = css.slice ( index, indexEnd );
    let semicolonIndex = index + selector.lastIndexOf ( ';', indexEnd ) + 1;

    if ( semicolonIndex > index ) {
      index = semicolonIndex;
      selector = css.slice ( index, indexEnd );
    }

    selectorTokens[selectorIndex++] = {
      type: SELECTOR,
      index,
      indexEnd,
      selector
    };

  }

  /* RETURN */

  return mergeTokensSorted ( mergeTokensSortedEvenOdd ( selectorTokens, startTokens ), endTokens );

};

/* EXPORT */

export default tokenizer;
