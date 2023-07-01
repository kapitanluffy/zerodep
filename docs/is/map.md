# isMap()

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/is-map?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-map)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/is-map?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-map)
[![version](https://img.shields.io/npm/v/@zerodep/is-map?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-map)
![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square)
![language](https://img.shields.io/badge/types-included-blue?style=flat-square)

A simple, performant utility to determine if a value is a Map.

## Signature

```typescript
const isMap(value: any) => boolean;
```

### Function Parameters

The `isArray` function has the following parameters:

- **value** - the value to check

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { isMap } from '@zerodep/is-map';
// or
const { isMap } = require('@zerodep/is-map');
```

### Positive Response

```javascript
isMap(new Map()); // true
isMap(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // true
```

### Negative Response

```javascript
isMap(['a', 'b', 'c']); // false
isMap(1000n); // false
isMap(true); // false
isMap(new Date()); // false
isMap(''); // false
isMap(new Error('message')); // false
isMap(3.14); // false
isMap(() => 'function'); // false
isMap(42); // false
isMap(null); // false
isMap({ an: 'object' }); // false
isMap(new Promise(() => {})); // false
isMap(/[regex]+/gi); // false
isMap(new Set([1, 2, 3])); // false
isMap('a string'); // false
isMap(Symbol()); // false
isMap(new Int32Array(2)); // false
isMap(undefined); // false
```

## Installation Sources

This function is available from any of the following packages to best match the needs of your project. All packages support tree shaking.

```shell
# all @zerodep packages - largest file size
npm i @zerodep/app

# all @zerodep utility functions - medium file size
npm i @zerodep/utility

// all @zerodep is functions
import { isMap } from '@zerodep/is';

# only this @zerodep function
import { isMap } from '@zerodep/is-map';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/is.map` package to `@zerodep/is-map` for consistency across @zerodep ecosystem