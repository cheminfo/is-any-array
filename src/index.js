const toString = Object.prototype.toString;

/**
 * Checks if an object is an instance of an Array (array or typed array)
 * @param {object} object to check
 * @returns {boolean}
 */
export default function isAnyArray(object) {
  return toString.call(object).endsWith('Array]');
}
