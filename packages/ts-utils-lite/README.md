# ts-utils-lite

Lightweight, type-safe utility library for web developers.

## Installation

```bash
npm install ts-utils-lite
```

## Usage

```typescript
import { Injectable } from '@angular/core';
import { StringUtils } from 'ts-utils-lite';

@Injectable({ providedIn: 'root' })
export class MyService {
  constructor(private str: StringUtils) { }
  
  myMethod(): void {
    this.str.slugify('Hello World');       // 'hello-world'
    this.str.camelCase('hello world');     // 'helloWorld'
    this.str.truncate('Hello World', 10);  // 'Hello W...'
  }
}
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
- **Copy to Clipboard** - Directive to copy text to clipboard on click

## License

MIT