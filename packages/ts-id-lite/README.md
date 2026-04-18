# ts-id-lite

[![npm downloads](https://img.shields.io/npm/dt/ts-id-lite.svg)](https://www.npmjs.com/package/ts-id-lite) [![npm version](https://img.shields.io/npm/v/ts-id-lite.svg)](https://www.npmjs.com/package/ts-id-lite) [![npm license](https://img.shields.io/npm/l/ts-id-lite.svg)](https://www.npmjs.com/package/ts-id-lite) [![npm types](https://img.shields.io/npm/types/ts-id-lite.svg)](https://www.npmjs.com/package/ts-id-lite) [![npm bundle size](https://img.shields.io/bundlephobia/minzip/ts-id-lite.svg)](https://bundlephobia.com/result?p=ts-id-lite)

Lightweight, type-safe ID generation utility library for web developers.

## Installation

```bash
npm install ts-id-lite
```

## Usage

```typescript
import { Injectable } from '@angular/core';
import { IdUtils } from 'ts-id-lite';

@Injectable({ providedIn: 'root' })
export class MyService {
  constructor(private id: IdUtils) { }
  
  myMethod(): void {
    this.id.uuid();                  // '550e8400-e29b-41d4-a716-446655440000'
    this.id.nanoid();                // 'V1StGXR8_Z'
    this.id.generateCode(6, 'numeric');  // '482931'
  }
}
```

## Methods

| Method | Description | Example |
|--------|-------------|---------|
| `uuid` | Generate UUID v4 | → `'550e8400-...' ` |
| `nanoid` | Generate nanoid | → `'V1StGXR8_Z'` |
| `shortId` | Generate short alphanumeric ID | → random string |
| `snowflake` | Generate snowflake ID | → timestamp-based ID |
| `hash` | Generate simple string hash | `'text'` → `'abc123'` |
| `generateCode` | Generate random code | `6, 'numeric'` → `'482931'` |
| `generateToken` | Generate random hex token | `32` → random hex string |

## License

MIT
