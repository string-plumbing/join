import {list} from '@iterable-iterator/list';

import _join from './_join.js';

/**
 * Join an iterable of strings using a given separator.
 *
 * @param {Iterable<string>} strings The input iterable of strings.
 * @param {string} sep The given separator.
 * @return string
 */
const join = (strings, sep) => _join(list(strings), sep);
export default join;
