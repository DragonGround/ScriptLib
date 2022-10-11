/** Detect free variable `global` from Node.js. */
// @ts-ignore
const freeGlobal = typeof global === 'object' && global !== null && global.Object === Object && global

export default freeGlobal
