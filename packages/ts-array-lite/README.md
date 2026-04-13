# ts-array-lite

[![npm downloads](https://img.shields.io/npm/dt/ts-array-lite.svg)](https://www.npmjs.com/package/ts-array-lite) [![npm version](https://img.shields.io/npm/v/ts-array-lite.svg)](https://www.npmjs.com/package/ts-array-lite) [![npm license](https://img.shields.io/npm/l/ts-array-lite.svg)](https://www.npmjs.com/package/ts-array-lite) [![npm types](https://img.shields.io/npm/types/ts-array-lite.svg)](https://www.npmjs.com/package/ts-array-lite) [![npm bundle size](https://img.shields.io/bundlephobia/minzip/ts-array-lite.svg)](https://bundlephobia.com/result?p=ts-array-lite)

Lightweight, type-safe array utility library for web developers.

## Installation

```bash
npm install ts-array-lite
```

## Usage

```typescript
import { Injectable } from '@angular/core';
import { ArrayUtils } from 'ts-array-lite';

@Injectable({ providedIn: 'root' })
export class MyService {
  constructor(private arr: ArrayUtils) { }
  
  myMethod(): void {
    this.arr.unique([1, 2, 2, 3]);                    // [1, 2, 3]
    this.arr.chunk([1, 2, 3, 4], 2);                  // [[1,2], [3,4]]
    this.arr.groupBy(['apple', 'banana'], s => s[0]); // {a: ['apple'], b: ['banana']}
    this.arr.shuffle([1, 2, 3]);                      // randomized array
    this.arr.compact([0, 1, false, 2]);               // [1, 2]
  }
}
```

## Methods

| Method | Description | Example |
|--------|-------------|---------|
| `unique` | Remove duplicates | `[1,2,2,3]` → `[1,2,3]` |
| `chunk` | Split into chunks | `[1,2,3,4], 2` → `[[1,2], [3,4]]` |
| `groupBy` | Group by callback | `['apple','banana'], s=>s[0]` → `{a:['apple'],b:['banana']}` |
| `shuffle` | Randomize array | `[1,2,3]` → random order |
| `compact` | Remove falsy values | `[0,1,false,2]` → `[1,2]` |

## License

MIT


