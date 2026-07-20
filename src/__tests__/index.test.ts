import { expect, test } from 'vitest';

import { isAnyArray, isAnyNumberArray } from '../index.ts';

test('isAnyArray', () => {
  expect(isAnyArray(1)).toBe(false);
  expect(isAnyArray('ab')).toBe(false);
  expect(isAnyArray({ a: 1 })).toBe(false);

  expect(isAnyArray([])).toBe(true);
  expect(isAnyArray([1, 2, 3])).toBe(true);
  expect(isAnyArray(new Uint16Array(2))).toBe(true);
  expect(isAnyArray(new BigUint64Array(1))).toBe(false);
});

test('isAnyNumberArray', () => {
  expect(isAnyNumberArray([])).toBe(true);
  expect(isAnyNumberArray([1])).toBe(true);
  expect(isAnyNumberArray([1, 2])).toBe(true);
  expect(isAnyNumberArray([1, 'a'])).toBe(true);
  expect(isAnyNumberArray(['a'])).toBe(false);
  expect(isAnyNumberArray(['a', 1])).toBe(false);
  expect(isAnyNumberArray(new Uint8Array())).toBe(true);
  expect(isAnyNumberArray(Uint8Array.of(1))).toBe(true);
  expect(isAnyNumberArray(BigUint64Array.of(1n))).toBe(false);
});
