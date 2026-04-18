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
  }
}
```

## Methods

| Method | Description | Example |
|--------|-------------|---------|
| `unique` | Remove duplicates | `[1,2,2,3]` → `[1,2,3]` |
| `uniqBy` | Remove duplicates by key | `arr, 'id'` → `unique items` |
| `chunk` | Split into chunks | `[1,2,3,4], 2` → `[[1,2], [3,4]]` |
| `groupBy` | Group by callback/key | `['apple','banana'], s=>s[0]` → `{a:['apple'],b:['banana']}` |
| `sortBy` | Sort array by key | `arr, 'id', 'asc'` |
| `shuffle` | Randomize array | `[1,2,3]` → random order |
| `sample` | Get random element | `[1,2,3]` → `2` |
| `intersection`| Get common elements | `[1,2], [2,3]` → `[2]` |
| `difference` | Get different elements | `[1,2], [2,3]` → `[1]` |
| `compact` | Remove falsy values | `[0,1,false,2]` → `[1,2]` |
| `flatten` | Flatten array | `[1,[2,3]]` → `[1,2,3]` |
| `flattenDeep` | Deeply flatten array | `[1,[2,[3]]]` → `[1,2,3]` |
| `partition` | Split by predicate | `[1,2,3,4], isEven` → `[[2,4], [1,3]]` |
| `pluck` | Extract property values| `users, 'id'` → `[1, 2, 3]` |
| `first` | Get first element | `[1,2,3]` → `1` |
| `last` | Get last element | `[1,2,3]` → `3` |
| `drop` | Drop N elements from start | `[1,2,3], 1` → `[2,3]` |
| `take` | Take N elements from start | `[1,2,3], 2` → `[1,2]` |
| `range` | Create number range | `1, 5` → `[1,2,3,4]` |
| `zip` | Zip multiple arrays | `[1,2], ['a','b']` → `[[1,'a'], [2,'b']]` |
| `sum` | Sum of numbers | `[1,2,3]` → `6` |
| `average` | Average of numbers | `[1,2,3]` → `2` |
| `min` | Minimum of numbers | `[1,2,3]` → `1` |
| `max` | Maximum of numbers | `[1,2,3]` → `3` |

## License

MIT
