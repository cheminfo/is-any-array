const toString = Object.prototype.toString;

/**
 * Checks if an object is an instance of an Array (array or typed array)
 * @param {any} object to check
 * @returns {boolean}
 */
export function isAnyArray(object) {
  return toString.call(object).endsWith('Array]');
}
