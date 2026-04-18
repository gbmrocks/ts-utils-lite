# ts-validation-lite

[![npm downloads](https://img.shields.io/npm/dt/ts-validation-lite.svg)](https://www.npmjs.com/package/ts-validation-lite) [![npm version](https://img.shields.io/npm/v/ts-validation-lite.svg)](https://www.npmjs.com/package/ts-validation-lite) [![npm license](https://img.shields.io/npm/l/ts-validation-lite.svg)](https://www.npmjs.com/package/ts-validation-lite) [![npm types](https://img.shields.io/npm/types/ts-validation-lite.svg)](https://www.npmjs.com/package/ts-validation-lite) [![npm bundle size](https://img.shields.io/bundlephobia/minzip/ts-validation-lite.svg)](https://bundlephobia.com/result?p=ts-validation-lite)

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
    this.val.isStrongPassword('Test123!');     // {valid: true, score: 4}
  }
}
```

## Methods

| Method | Description | Example |
|--------|-------------|---------|
| `isEmail` | Validate email format | `'test@example.com'` → `true` |
| `isUrl` | Validate URL format | `'https://google.com'` → `true` |
| `isPhone` | Validate phone number | `'+1234567890'` → `true` |
| `isPostalCode` | Validate US postal code | `'12345'` → `true` |
| `isStrongPassword` | Check password complexity | `'Test123!'` → `{valid: true, score: 4}` |
| `isNumeric` | Check if string is only numbers | `'123'` → `true` |
| `isAlpha` | Check if string is only letters | `'abc'` → `true` |
| `isAlphanumeric`| Check if string is letters/numbers | `'abc123'` → `true` |
| `isDate` | Check if string is valid date | `'2024-01-01'` → `true` |
| `isJSON` | Check if string is valid JSON | `'{"a":1}'` → `true` |
| `isCreditCard` | Validate credit card (Luhn) | `'4111...'` → `true` |

## License

MIT
