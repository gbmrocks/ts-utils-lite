# ts-utils-lite

[![npm downloads](https://img.shields.io/npm/d18m/ts-utils-lite.svg)](https://www.npmjs.com/package/ts-utils-lite) [![npm version](https://img.shields.io/npm/v/ts-utils-lite.svg)](https://www.npmjs.com/package/ts-utils-lite)
[![npm downloads](https://img.shields.io/npm/d18m/ts-array-lite.svg)](https://www.npmjs.com/package/ts-array-lite) [![npm version](https://img.shields.io/npm/v/ts-array-lite.svg)](https://www.npmjs.com/package/ts-array-lite)
[![npm downloads](https://img.shields.io/npm/d18m/ts-cookie-lite.svg)](https://www.npmjs.com/package/ts-cookie-lite) [![npm version](https://img.shields.io/npm/v/ts-cookie-lite.svg)](https://www.npmjs.com/package/ts-cookie-lite)
[![npm downloads](https://img.shields.io/npm/d18m/ts-date-lite.svg)](https://www.npmjs.com/package/ts-date-lite) [![npm version](https://img.shields.io/npm/v/ts-date-lite.svg)](https://www.npmjs.com/package/ts-date-lite)
[![npm downloads](https://img.shields.io/npm/d18m/ts-id-lite.svg)](https://www.npmjs.com/package/ts-id-lite) [![npm version](https://img.shields.io/npm/v/ts-id-lite.svg)](https://www.npmjs.com/package/ts-id-lite)
[![npm downloads](https://img.shields.io/npm/d18m/ts-number-lite.svg)](https://www.npmjs.com/package/ts-number-lite) [![npm version](https://img.shields.io/npm/v/ts-number-lite.svg)](https://www.npmjs.com/package/ts-number-lite)
[![npm downloads](https://img.shields.io/npm/d18m/ts-object-lite.svg)](https://www.npmjs.com/package/ts-object-lite) [![npm version](https://img.shields.io/npm/v/ts-object-lite.svg)](https://www.npmjs.com/package/ts-object-lite)
[![npm downloads](https://img.shields.io/npm/d18m/ts-string-lite.svg)](https://www.npmjs.com/package/ts-string-lite) [![npm version](https://img.shields.io/npm/v/ts-string-lite.svg)](https://www.npmjs.com/package/ts-string-lite)
[![npm downloads](https://img.shields.io/npm/d18m/ts-validation-lite.svg)](https://www.npmjs.com/package/ts-validation-lite) [![npm version](https://img.shields.io/npm/v/ts-validation-lite.svg)](https://www.npmjs.com/package/ts-validation-lite)

Everything you need, nothing you don't.

## Features

- **String Utils** - slugify, camelCase, kebabCase, pascalCase, truncate, capitalize, titleCase, escapeHtml
- **Date Utils** - format, relative time, isToday, add, diff
- **Array Utils** - unique, chunk, groupBy, shuffle, compact
- **Object Utils** - deepGet, deepClone, merge, omit, pick, isEmpty
- **Number Utils** - formatCurrency, formatBytes, formatPercent, clamp, round, randomInt
- **Validation Utils** - isEmail, isUrl, isPhone, isPostalCode, isStrongPassword
- **ID Utils** - uuid, nanoid, shortId, hash, snowflake, generateCode
- **Cookie Utils** - get, set, delete, has

## Installation

```bash
npm install ts-utils-lite
```

## Usage

```typescript
import { Injectable } from '@angular/core';
import { StringUtils } from 'ts-string-lite';
import { DateUtils } from 'ts-date-lite';
import { ArrayUtils } from 'ts-array-lite';
import { ObjectUtils } from 'ts-object-lite';
import { NumberUtils } from 'ts-number-lite';
import { ValidationUtils } from 'ts-validation-lite';
import { IdUtils } from 'ts-id-lite';
import { CookieUtils } from 'ts-cookie-lite';

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

## Demo

Visit the [demo page](https://gbmrocks.github.io/ts-utils-lite/) to see all utilities in action.

## Compatibility

- Angular 14+
- Standalone components

## License

MIT
