/**
 * Checks if an object is an instance of an Array (array or typed array).
 *
 * @param {any} value - Object to check.
 * @returns {boolean} True if the object is an array.
 */
export function isAnyArray(value) {
  return Object.prototype.toString.call(value).slice(-6, -1) === 'Array';
}
