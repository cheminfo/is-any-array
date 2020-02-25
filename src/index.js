const toString = Object.prototype.toString;

export function isAnyArray(object) {
  return toString.call(object).endsWith('Array]');
}
