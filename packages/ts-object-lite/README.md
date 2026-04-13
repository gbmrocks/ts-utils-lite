# ts-object-lite

[![npm downloads](https://img.shields.io/npm/dt/ts-object-lite.svg)](https://www.npmjs.com/package/ts-object-lite) [![npm version](https://img.shields.io/npm/v/ts-object-lite.svg)](https://www.npmjs.com/package/ts-object-lite) [![npm license](https://img.shields.io/npm/l/ts-object-lite.svg)](https://www.npmjs.com/package/ts-object-lite) [![npm types](https://img.shields.io/npm/types/ts-object-lite.svg)](https://www.npmjs.com/package/ts-object-lite) [![node version](https://img.shields.io/node/v/ts-object-lite.svg)](https://www.npmjs.com/package/ts-object-lite) [![bundle size](https://img.shields.io/bundlephobia/minzip/ts-object-lite.svg)](https://bundlephobia.com/package/ts-object-lite)

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
    this.obj.merge({a: 1}, {b: 2});              // {a: 1, b: 2}
    this.obj.omit({a: 1, b: 2}, ['b']);          // {a: 1}
    this.obj.pick({a: 1, b: 2}, ['a']);          // {a: 1}
    this.obj.isEmpty({});                        // true
  }
}
```

## Methods

| Method | Description | Example |
|--------|-------------|---------|
| `deepGet` | Get nested value | `{a:{b:42}}, 'a.b'` → `42` |
| `deepClone` | Deep clone object | `{a:1}` → `{a:1}` |
| `merge` | Merge objects | `{a:1}, {b:2}` → `{a:1,b:2}` |
| `omit` | Remove keys | `{a:1,b:2}, ['b']` → `{a:1}` |
| `pick` | Pick keys | `{a:1,b:2}, ['a']` → `{a:1}` |
| `isEmpty` | Check if empty | `{}` → `true` |

## License

MIT