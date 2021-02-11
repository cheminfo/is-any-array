# is-any-array

[![NPM version][npm-image]][npm-url]
[![build status][build-image]][build-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]

Check if toString.call ends with Array

## Installation

`$ npm install is-any-array`

## [API Documentation](https://cheminfo-js.github.io/is-any-array/)

## Example

```js
const isAnyArray = require('is-any-array');

  isAnyArray(1); // false
  isAnyArray('ab'); // false
  isAnyArray({ a: 1 }); // false

  isAnyArray([1, 2, 3]); // true
  isAnyArray(new Uint16Array(2))) // true;
```

## License

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/is-any-array.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/is-any-array
[build-image]: https://github.com/cheminfo/is-any-array/workflows/Node.js%20CI/badge.svg
[build-url]: https://github.com/cheminfo/is-any-array/actions?query=workflow%3A%22Node.js+CI%22
[codecov-image]: https://img.shields.io/codecov/c/github/cheminfo/is-any-array.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/cheminfo/is-any-array
[download-image]: https://img.shields.io/npm/dm/is-any-array.svg?style=flat-square
[download-url]: https://www.npmjs.com/package/is-any-array
