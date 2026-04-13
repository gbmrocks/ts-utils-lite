# ts-cookie-lite

Lightweight, type-safe cookie utility library for web developers.

## Installation

```bash
npm install ts-cookie-lite
```

## Usage

```typescript
import { Injectable } from '@angular/core';
import { NgxCookieUtils } from 'ts-cookie-lite';

@Injectable({ providedIn: 'root' })
export class MyService {
  constructor(private cookie: NgxCookieUtils) { }
  
  myMethod(): void {
    this.cookie.set('theme', 'dark', 7);      // Set cookie for 7 days
    const theme = this.cookie.get('theme');   // Get cookie
    const has = this.cookie.has('theme');     // Check if exists
    this.cookie.delete('theme');              // Delete cookie
  }
}
```

## Methods

| Method | Description | Example |
|--------|-------------|---------|
| `set` | Set cookie | `set('theme', 'dark', 7)` |
| `get` | Get cookie | `get('theme')` → `'dark'` |
| `has` | Check if exists | `has('theme')` → `true/false` |
| `delete` | Delete cookie | `delete('theme')` |

## License

MIT