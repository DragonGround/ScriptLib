/**
 * Tween.js - Licensed under the MIT license
 * https://github.com/tweenjs/tween.js
 * ----------------------------------------------
 *
 * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
 * Thank you all, you're awesome!
 */

import Easing from './easing'
import Group from './group'
import Interpolation from './interpolation'
import now from './now'
import Sequence from './sequence'
import Tween from './tween'
import VERSION from './version'
import { mainGroup } from './mainGroup'

const nextId = Sequence.nextId

/**
 * Controlling groups of tweens
 *
 * Using the TWEEN singleton to manage your tweens can cause issues in large apps with many components.
 * In these cases, you may want to create your own smaller groups of tweens.
 */
const TWEEN = mainGroup

// This is the best way to export things in a way that's compatible with both ES
// Modules and CommonJS, without build hacks, and so as not to break the
// existing API.
// https://github.com/rollup/rollup/issues/1961#issuecomment-423037881
const getAll = TWEEN.getAll.bind(TWEEN)
const removeAll = TWEEN.removeAll.bind(TWEEN)
const add = TWEEN.add.bind(TWEEN)
const remove = TWEEN.remove.bind(TWEEN)
const update = TWEEN.update.bind(TWEEN)

// NOTE! Make sure both lists of exports below are kept in sync:

export { Easing, Group, Interpolation, now, Sequence, nextId, Tween, VERSION, getAll, removeAll, add, remove, update }

// const exports = {
// 	Easing,
// 	Group,
// 	Interpolation,
// 	now,
// 	Sequence,
// 	nextId,
// 	Tween,
// 	VERSION,
// 	getAll,
// 	removeAll,
// 	add,
// 	remove,
// 	update,
// }

// export default exports
