# ts-id-lite

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
    this.id.shortId();               // random short ID
    this.id.hash('text');            // hash string
    this.id.snowflake();             // snowflake ID
    this.id.generateCode(6, 'numeric');  // '482931'
  }
}
```

## Methods

| Method | Description | Example |
|--------|-------------|---------|
| `uuid` | Generate UUID v4 | → `'550e8400-...' ` |
| `nanoid` | Generate nanoid | → `'V1StGXR8_Z'` |
| `shortId` | Generate short ID | → random short string |
| `hash` | Hash string | `'text'` → hash |
| `snowflake` | Generate snowflake ID | → timestamp-based ID |
| `generateCode` | Generate code | `6, 'numeric'` → `'482931'` |

## License

MIT