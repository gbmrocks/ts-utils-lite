# ts-validation-lite

[![npm downloads](https://img.shields.io/npm/d18m/ts-validation-lite.svg)](https://www.npmjs.com/package/ts-validation-lite) [![npm version](https://img.shields.io/npm/v/ts-validation-lite.svg)](https://www.npmjs.com/package/ts-validation-lite)

Lightweight, type-safe validation utility library for web developers.

## Installation

```bash
npm install ts-validation-lite
```

## Usage

```typescript
import { Injectable } from '@angular/core';
import { ValidationUtils } from 'ts-validation-lite';

@Injectable({ providedIn: 'root' })
export class MyService {
  constructor(private val: ValidationUtils) { }
  
  myMethod(): void {
    this.val.isEmail('test@example.com');       // true
    this.val.isUrl('https://google.com');      // true
    this.val.isPhone('+1234567890');            // true
    this.val.isPostalCode('12345');             // true
    this.val.isStrongPassword('Test123!');     // {valid: true, score: 4}
  }
}
```

## Methods

| Method | Description | Example |
|--------|-------------|---------|
| `isEmail` | Validate email | `'test@example.com'` → `true` |
| `isUrl` | Validate URL | `'https://google.com'` → `true` |
| `isPhone` | Validate phone | `'+1234567890'` → `true` |
| `isPostalCode` | Validate postal code | `'12345'` → `true` |
| `isStrongPassword` | Check password strength | `'Test123!'` → `{valid: true, score: 4}` |

## License

MIT