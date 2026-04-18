# ts-storage-lite

[![npm downloads](https://img.shields.io/npm/dt/ts-storage-lite.svg)](https://www.npmjs.com/package/ts-storage-lite) [![npm version](https://img.shields.io/npm/v/ts-storage-lite.svg)](https://www.npmjs.com/package/ts-storage-lite) [![npm license](https://img.shields.io/npm/l/ts-storage-lite.svg)](https://www.npmjs.com/package/ts-storage-lite) [![npm types](https://img.shields.io/npm/types/ts-storage-lite.svg)](https://www.npmjs.com/package/ts-storage-lite) [![npm bundle size](https://img.shields.io/bundlephobia/minzip/ts-storage-lite.svg)](https://bundlephobia.com/result?p=ts-storage-lite)

Lightweight, type-safe storage utility library for web developers.

## Installation

```bash
npm install ts-storage-lite
```

## Usage

```typescript
import { Injectable } from '@angular/core';
import { StorageUtils } from 'ts-storage-lite';

@Injectable({ providedIn: 'root' })
export class MyService {
  constructor(private storage: StorageUtils) { }
  
  myMethod(): void {
    this.storage.set('user', { id: 1, name: 'John' }); // Automatic serialization
    const user = this.storage.get<{ id: number; name: string }>('user');
    const hasUser = this.storage.has('user');
    this.storage.remove('user');
    this.storage.clear();
  }
}
```

## Methods

| Method | Description | Example |
|--------|-------------|---------|
| `set<T>` | Save a value with serialization | `set('key', value)` |
| `get<T>` | Retrieve and parse a value | `get<T>('key')` |
| `has` | Check if key exists | `has('key')` |
| `remove` | Delete a single item | `remove('key')` |
| `clear` | Clear all items | `clear()` |

## License

MIT
