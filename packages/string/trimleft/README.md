# @zerodep/string-trimleft

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/string-trimleft?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/string-trimleft)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/string-trimleft?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/string-trimleft)
[![version](https://img.shields.io/npm/v/@zerodep/string-trimleft?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/string-trimleft)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)

A utility to remove a specific character from the start of a string. Non-string values will cause a `ZeroDepError` to be thrown.

Full documentation is available at the [zerodep.app](http://zerodep.app/string/trimleft) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { stringTrimLeft } from '@zerodep/string-trimleft';
// or
const { stringTrimLeft } = require('@zerodep/string-trimleft');
```

### Using Default Space Separator

```javascript
stringTrimLeft('   some string   '); // "some string   "
```

### Using Custom Separator

```javascript
stringTrimLeft('xx some string  xx', 'x'); // " some string  xx"
```

### Unsuccessful Response

```javascript
stringTrimLeft({ not: 'a string' }); // throws ZeroDepError: Value is not a string
```