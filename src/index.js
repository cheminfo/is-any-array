const toString = Object.prototype.toString;

/**
 * Checks if an object is an instance of an Array (array or typed array).
 *
 * @param {any} value - Object to check.
 * @returns {boolean} True if the object is an array.
 */
export function isAnyArray(value) {
  return toString.call(value).endsWith('Array]');
}
