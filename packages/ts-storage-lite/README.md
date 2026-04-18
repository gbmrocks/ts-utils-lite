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
    // Default is localStorage
    this.storage.set('user', { id: 1, name: 'John' }); 
    const user = this.storage.get<{ id: number; name: string }>('user');
    
    // Use sessionStorage by passing it as the last parameter
    this.storage.set('session_key', 'value', sessionStorage);
    const sessionVal = this.storage.get('session_key', null, sessionStorage);
    
    const hasKey = this.storage.has('user');
    this.storage.remove('user');
    this.storage.clear();
  }
}
```

## Methods

| Method | Description | Example |
|--------|-------------|---------|
| `set<T>` | Save a value with serialization | `set('key', value, storage?)` |
| `get<T>` | Retrieve and parse a value | `get<T>('key', defaultValue?, storage?)` |
| `has` | Check if key exists | `has('key', storage?)` |
| `remove` | Delete a single item | `remove('key', storage?)` |
| `clear` | Clear all items | `clear(storage?)` |

*Note: `storage` parameter defaults to `localStorage`.*

## License

MIT
