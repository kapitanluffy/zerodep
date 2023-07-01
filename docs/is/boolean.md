# isBoolean()

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/is-boolean?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-boolean)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/is-boolean?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-boolean)
[![version](https://img.shields.io/npm/v/@zerodep/is-boolean?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-boolean)
![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square)
![language](https://img.shields.io/badge/types-included-blue?style=flat-square)

A simple, performant utility to determine if a value is a boolean.

## Signature

```typescript
const isBoolean(value: any) => boolean;
```

### Function Parameters

The `isArray` function has the following parameters:

- **value** - the value to check

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { isBoolean } from '@zerodep/is-boolean';
// or
const { isBoolean } = require('@zerodep/is-boolean');
```

### Positive Response

```javascript
isBoolean(true); // true
isBoolean(false); // true
isBoolean(new Boolean(true)); // true
```

### Negative Response

```javascript
isBoolean(['a', 'b', 'c']); // false
isBoolean(1000n); // false
isBoolean(new Date()); // false
isBoolean(''); // false
isBoolean(new Error('message')); // false
isBoolean(3.14); // false
isBoolean(() => 'function'); // false
isBoolean(42); // false
isBoolean(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isBoolean(null); // false
isBoolean({ an: 'object' }); // false
isBoolean(new Promise(() => {})); // false
isBoolean(/[regex]+/gi); // false
isBoolean(new Set([1, 2, 3])); // false
isBoolean('a string'); // false
isBoolean(Symbol()); // false
isBoolean(new Int32Array(2)); // false
isBoolean(undefined); // false
```

## Installation Sources

This function is available from any of the following packages to best match the needs of your project. All packages support tree shaking.

```shell
# all @zerodep packages - largest file size
npm i @zerodep/app

# all @zerodep utility functions - medium file size
npm i @zerodep/utility

// all @zerodep is functions - small file size
import { isBoolean } from '@zerodep/is';

# only this @zerodep function - tiny file size
import { isBoolean } from '@zerodep/is-boolean';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/is.boolean` package to `@zerodep/is-boolean` for consistency across @zerodep ecosystem