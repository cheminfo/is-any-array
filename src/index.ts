// eslint-disable-next-line @typescript-eslint/unbound-method
const toString = Object.prototype.toString;

type AnyTypedArray =
  | Int8Array
  | Uint8Array
  | Uint8ClampedArray
  | Int16Array
  | Uint16Array
  | Int32Array
  | Uint32Array
  | Float32Array
  | Float64Array;

export type AnyArray =
  | any[] // eslint-disable-line @typescript-eslint/no-explicit-any
  | AnyTypedArray;

/**
 * Checks if an object is an instance of an Array (array or typed array, except those that contain bigint values).
 * @param value - Object to check.
 * @returns True if the object is an array or a typed array.
 */
export function isAnyArray(value: unknown): value is AnyArray {
  const tag = toString.call(value);
  return tag.endsWith('Array]') && !tag.includes('Big');
}

export type AnyNumberArray = number[] | AnyTypedArray;

/**
 * Checks if an object is an instance of an Array of numbers (array or typed array, except those that contain bigint values).
 * If the array is not empty, only the first value is verified. Mixed arrays may return `true` even when they don't contain only numbers.
 * @param value - Object to check.
 * @returns True if the object is an array of numbers or a typed array.
 */
export function isAnyNumberArray(value: unknown): value is AnyNumberArray {
  return (
    isAnyArray(value) && (value.length === 0 || typeof value[0] === 'number')
  );
}
