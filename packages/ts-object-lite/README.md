# ts-object-lite

[![npm downloads](https://img.shields.io/npm/dt/ts-object-lite.svg)](https://www.npmjs.com/package/ts-object-lite) [![npm version](https://img.shields.io/npm/v/ts-object-lite.svg)](https://www.npmjs.com/package/ts-object-lite) [![npm license](https://img.shields.io/npm/l/ts-object-lite.svg)](https://www.npmjs.com/package/ts-object-lite) [![npm types](https://img.shields.io/npm/types/ts-object-lite.svg)](https://www.npmjs.com/package/ts-object-lite) [![npm bundle size](https://img.shields.io/bundlephobia/minzip/ts-object-lite.svg)](https://bundlephobia.com/result?p=ts-object-lite)

Lightweight, type-safe object utility library for web developers.

## Installation

```bash
npm install ts-object-lite
```

## Usage

```typescript
import { Injectable } from '@angular/core';
import { ObjectUtils } from 'ts-object-lite';

@Injectable({ providedIn: 'root' })
export class MyService {
  constructor(private obj: ObjectUtils) { }
  
  myMethod(): void {
    this.obj.deepGet({a: {b: 42}}, 'a.b');       // 42
    this.obj.deepClone({a: 1});                  // {a: 1}
  }
}
```

## Methods

| Method | Description | Example |
|--------|-------------|---------|
| `deepGet` | Get nested value by path | `{a:{b:42}}, 'a.b'` → `42` |
| `deepSet` | Set nested value by path | `obj, 'a.b', 42` → `obj.a.b = 42` |
| `deepClone` | Deep clone object/array | `{a:1}` → `{a:1}` |
| `clone` | Alias for `deepClone` | `{a:1}` → `{a:1}` |
| `merge` | Deeply merge multiple objects | `{a:1}, {b:2}` → `{a:1,b:2}` |
| `omit` | Create object without keys | `{a:1,b:2}, ['b']` → `{a:1}` |
| `pick` | Create object with only keys | `{a:1,b:2}, ['a']` → `{a:1}` |
| `isEmpty` | Check if value/object is empty | `{}` → `true` |
| `isEqual` | Deep equality comparison | `obj1, obj2` → `true/false` |
| `keys` | Get object keys | `{a:1}` → `['a']` |
| `values` | Get object values | `{a:1}` → `[1]` |
| `entries` | Get object [key, value] pairs | `{a:1}` → `[['a', 1]]` |
| `has` | Check if path exists | `obj, 'a.b'` → `true/false` |
| `size` | Get number of object properties | `{a:1, b:2}` → `2` |
| `mapValues` | Map values using callback | `{a:1}, v => v*2` → `{a:2}` |
| `invert` | Swap keys and values | `{a:'b'}` → `{b:'a'}` |

## License

MIT
