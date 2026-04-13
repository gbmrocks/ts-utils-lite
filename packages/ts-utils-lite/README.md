# ts-utils-lite

[![npm downloads](https://img.shields.io/npm/dt/ts-utils-lite.svg)](https://www.npmjs.com/package/ts-utils-lite) [![npm version](https://img.shields.io/npm/v/ts-utils-lite.svg)](https://www.npmjs.com/package/ts-utils-lite) [![npm license](https://img.shields.io/npm/l/ts-utils-lite.svg)](https://www.npmjs.com/package/ts-utils-lite) [![npm types](https://img.shields.io/npm/types/ts-utils-lite.svg)](https://www.npmjs.com/package/ts-utils-lite) [![node version](https://img.shields.io/node/v/ts-utils-lite.svg)](https://www.npmjs.com/package/ts-utils-lite) [![bundle size](https://img.shields.io/bundlephobia/minzip/ts-utils-lite.svg)](https://bundlephobia.com/package/ts-utils-lite)

Lightweight, type-safe utility library for web developers.

## Installation

```bash
npm install ts-utils-lite
```

## Usage

```typescript
import { Injectable } from '@angular/core';
import { 
  StringUtils, 
  DateUtils, 
  ArrayUtils, 
  ObjectUtils, 
  NumberUtils, 
  ValidationUtils, 
  IdUtils, 
  CookieUtils 
} from 'ts-utils-lite';

@Injectable({ providedIn: 'root' })
export class MyService {
  constructor(
    private str: StringUtils,
    private date: DateUtils,
    private arr: ArrayUtils,
    private obj: ObjectUtils,
    private num: NumberUtils,
    private val: ValidationUtils,
    private id: IdUtils,
    private cookie: CookieUtils
  ) { }
  
  myMethod(): void {
    // String Utils
    this.str.slugify('Hello World');       // 'hello-world'
    this.str.camelCase('hello world');     // 'helloWorld'
    this.str.truncate('Hello World', 10);  // 'Hello W...'
    
    // Date Utils
    this.date.format(new Date(), 'YYYY-MM-DD');              // '2026-04-11'
    this.date.relative(new Date(Date.now() - 3600000));      // '1 hour ago'
    this.date.add(new Date(), 7, 'day');                     // +7 days
    
    // Array Utils
    this.arr.unique([1, 2, 2, 3]);                           // [1, 2, 3]
    this.arr.chunk([1, 2, 3, 4], 2);                         // [[1,2], [3,4]]
    this.arr.groupBy(['apple', 'banana'], s => s[0]);        // {a: ['apple'], b: ['banana']}
    
    // Object Utils
    this.obj.deepGet({a: {b: 42}}, 'a.b');    // 42
    this.obj.deepClone({a: 1});               // {a: 1}
    this.obj.merge({a: 1}, {b: 2});           // {a: 1, b: 2}
    
    // Number Utils
    this.num.formatCurrency(1234.56);         // '$1,234.56'
    this.num.formatBytes(1048576);            // '1 MB'
    this.num.formatPercent(0.756);           // '75.6%'
    
    // Validation Utils
    this.val.isEmail('test@example.com');     // true
    this.val.isUrl('https://google.com');     // true
    this.val.isStrongPassword('Test123!');    // {valid: true, score: 4}
    
    // ID Utils
    this.id.uuid();                           // '550e8400-e29b-41d4-a716-446655440000'
    this.id.nanoid();                         // 'V1StGXR8_Z'
    this.id.generateCode(6, 'numeric');       // '482931'
    
    // Cookie Utils
    this.cookie.set('theme', 'dark', 7);      // Set cookie for 7 days
    this.cookie.get('theme');                 // Get cookie
    this.cookie.has('theme');                 // Check if exists
    this.cookie.delete('theme');              // Delete cookie
  }
}
```

Or import individually:

```typescript
import { StringUtils } from 'ts-string-lite';
import { DateUtils } from 'ts-date-lite';
import { ArrayUtils } from 'ts-array-lite';
import { ObjectUtils } from 'ts-object-lite';
import { NumberUtils } from 'ts-number-lite';
import { ValidationUtils } from 'ts-validation-lite';
import { IdUtils } from 'ts-id-lite';
import { CookieUtils } from 'ts-cookie-lite';
```

## Features

- **String Utils** - slugify, camelCase, kebabCase, pascalCase, truncate, capitalize, titleCase, escapeHtml
- **Date Utils** - format, relative time, isToday, add, diff
- **Array Utils** - unique, chunk, groupBy, shuffle, compact
- **Object Utils** - deepGet, deepClone, merge, omit, pick, isEmpty
- **Number Utils** - formatCurrency, formatBytes, formatPercent, clamp, round, randomInt
- **Validation Utils** - isEmail, isUrl, isPhone, isPostalCode, isStrongPassword
- **ID Utils** - uuid, nanoid, shortId, hash, snowflake, generateCode
- **Cookie Utils** - get, set, delete, has

## License

MIT