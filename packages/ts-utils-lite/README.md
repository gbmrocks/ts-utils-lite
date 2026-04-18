# ts-utils-lite

[![npm downloads](https://img.shields.io/npm/dt/ts-utils-lite.svg)](https://www.npmjs.com/package/ts-utils-lite) [![npm version](https://img.shields.io/npm/v/ts-utils-lite.svg)](https://www.npmjs.com/package/ts-utils-lite) [![npm license](https://img.shields.io/npm/l/ts-utils-lite.svg)](https://www.npmjs.com/package/ts-utils-lite) [![npm types](https://img.shields.io/npm/types/ts-utils-lite.svg)](https://www.npmjs.com/package/ts-utils-lite) [![npm bundle size](https://img.shields.io/bundlephobia/minzip/ts-utils-lite.svg)](https://bundlephobia.com/result?p=ts-utils-lite)

Lightweight, type-safe utility library for web developers. This is the main package that includes all sub-packages.

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
  CookieUtils,
  StorageUtils
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
    private cookie: CookieUtils,
    private storage: StorageUtils
  ) { }
  
  myMethod(): void {
    // String Utils
    this.str.slugify('Hello World');       // 'hello-world'
    
    // Date Utils
    this.date.format(new Date(), 'YYYY-MM-DD'); // '2026-04-11'
    
    // Array Utils
    this.arr.unique([1, 2, 2, 3]);         // [1, 2, 3]
    
    // Object Utils
    this.obj.deepGet({a: {b: 42}}, 'a.b'); // 42
    
    // Number Utils
    this.num.formatCurrency(1234.56);      // '$1,234.56'
    
    // Validation Utils
    this.val.isEmail('test@example.com');  // true
    
    // ID Utils
    this.id.uuid();                        // '550e8400-e29b-41d4-a716-446655440000'
    
    // Cookie Utils
    this.cookie.set('theme', 'dark', 7);   // Set cookie
    
    // Storage Utils
    this.storage.set('user', { name: 'John' }); // Set to localStorage
    const user = this.storage.get('user');      // Get from localStorage
  }
}
```

Or import individual sub-packages:

```typescript
import { StringUtils } from 'ts-string-lite';
import { DateUtils } from 'ts-date-lite';
import { ArrayUtils } from 'ts-array-lite';
import { ObjectUtils } from 'ts-object-lite';
import { NumberUtils } from 'ts-number-lite';
import { ValidationUtils } from 'ts-validation-lite';
import { IdUtils } from 'ts-id-lite';
import { CookieUtils } from 'ts-cookie-lite';
import { StorageUtils } from 'ts-storage-lite';
```

## Features

- **String Utils** - slugify, camelCase, kebabCase, pascalCase, truncate, capitalize, titleCase, escapeHtml, unescapeHtml, repeat, reverse, base64, random, trim, words, countWords, levenshtein
- **Date Utils** - format, relative time, isToday, add, diff, startOf, endOf, isBefore, isAfter, isSame, parse, now
- **Array Utils** - unique, uniqBy, chunk, groupBy, sortBy, shuffle, sample, intersection, difference, compact, flatten, flattenDeep, partition, pluck, first, last, drop, take, range, zip, sum, average, min, max
- **Object Utils** - deepGet, deepSet, deepClone, clone, merge, omit, pick, isEmpty, isEqual, keys, values, entries, has, size, mapValues, invert
- **Number Utils** - formatCurrency, formatBytes, formatPercent, clamp, round, randomInt, randomFloat, isEven, isOdd, isPositive, isNegative, isInteger, isNaN, isFinite, abs, floor, ceil, sqrt, pow, sum, avg, min, max, range
- **Validation Utils** - isEmail, isUrl, isPhone, isPostalCode, isStrongPassword, isNumeric, isAlpha, isAlphanumeric, isDate, isJSON, isCreditCard
- **ID Utils** - uuid, nanoid, shortId, snowflake, hash, generateCode, generateToken
- **Cookie Utils** - set, get, has, delete, clear, all
- **Storage Utils** - set, get, has, remove, clear (supports localStorage and sessionStorage)

## License

MIT
