# ts-utils-lite

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
- **Copy to Clipboard** - Directive to copy text to clipboard on click

## Installation

```bash
npm install ts-utils-lite
```

## Usage

### String Utils

```typescript
import { Injectable } from '@angular/core';
import { NgxStringUtils } from 'ts-utils-lite';

@Injectable({ providedIn: 'root' })
export class MyService {
  constructor(private str: NgxStringUtils) { }
  
  myMethod(): void {
    this.str.slugify('Hello World');       // 'hello-world'
    this.str.camelCase('hello world');     // 'helloWorld'
    this.str.truncate('Hello World', 10);  // 'Hello W...'
  }
}
```

### Date Utils

```typescript
import { Injectable } from '@angular/core';
import { NgxDateUtils } from 'ts-utils-lite';

@Injectable({ providedIn: 'root' })
export class MyService {
  constructor(private date: NgxDateUtils) { }
  
  myMethod(): void {
    this.date.format(new Date(), 'YYYY-MM-DD');              // '2026-04-11'
    this.date.relative(new Date(Date.now() - 3600000));      // '1 hour ago'
    this.date.add(new Date(), 7, 'day');                     // +7 days
  }
}
```

### Array Utils

```typescript
import { Injectable } from '@angular/core';
import { NgxArrayUtils } from 'ts-utils-lite';

@Injectable({ providedIn: 'root' })
export class MyService {
  constructor(private arr: NgxArrayUtils) { }
  
  myMethod(): void {
    this.arr.unique([1, 2, 2, 3]);                           // [1, 2, 3]
    this.arr.chunk([1, 2, 3, 4], 2);                         // [[1,2], [3,4]]
    this.arr.groupBy(['apple', 'banana'], s => s[0]);       // {a: ['apple'], b: ['banana']}
  }
}
```

### Object Utils

```typescript
import { Injectable } from '@angular/core';
import { NgxObjectUtils } from 'ts-utils-lite';

@Injectable({ providedIn: 'root' })
export class MyService {
  constructor(private obj: NgxObjectUtils) { }
  
  myMethod(): void {
    this.obj.deepGet({a: {b: 42}}, 'a.b');    // 42
    this.obj.deepClone({a: 1});               // {a: 1}
    this.obj.merge({a: 1}, {b: 2});           // {a: 1, b: 2}
  }
}
```

### Number Utils

```typescript
import { Injectable } from '@angular/core';
import { NgxNumberUtils } from 'ts-utils-lite';

@Injectable({ providedIn: 'root' })
export class MyService {
  constructor(private num: NgxNumberUtils) { }
  
  myMethod(): void {
    this.num.formatCurrency(1234.56);         // '$1,234.56'
    this.num.formatBytes(1048576);            // '1 MB'
    this.num.formatPercent(0.756);           // '75.6%'
  }
}
```

### Validation Utils

```typescript
import { Injectable } from '@angular/core';
import { NgxValidationUtils } from 'ts-utils-lite';

@Injectable({ providedIn: 'root' })
export class MyService {
  constructor(private val: NgxValidationUtils) { }
  
  myMethod(): void {
    this.val.isEmail('test@example.com');    // true
    this.val.isUrl('https://google.com');     // true
    this.val.isStrongPassword('Test123!');    // {valid: true, score: 4}
  }
}
```

### ID Utils

```typescript
import { Injectable } from '@angular/core';
import { NgxIdUtils } from 'ts-utils-lite';

@Injectable({ providedIn: 'root' })
export class MyService {
  constructor(private id: NgxIdUtils) { }
  
  myMethod(): void {
    this.id.uuid();                // '550e8400-e29b-41d4-a716-446655440000'
    this.id.nanoid();              // 'V1StGXR8_Z'
    this.id.generateCode(6, 'numeric');  // '482931'
  }
}
```

### Cookie Utils

```typescript
import { Injectable } from '@angular/core';
import { NgxCookieUtils } from 'ts-utils-lite';

@Injectable({ providedIn: 'root' })
export class MyService {
  constructor(private cookie: NgxCookieUtils) { }
  
  myMethod(): void {
    this.cookie.set('theme', 'dark', 7);      // Set cookie for 7 days
    const theme = this.cookie.get('theme');  // Get cookie
    const has = this.cookie.has('theme');     // Check if exists
    this.cookie.delete('theme');              // Delete cookie
  }
}
```

### Copy to Clipboard Directive

```typescript
import { Component } from '@angular/core';
import { NgxCopyToClipboardDirective } from 'ts-utils-lite';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [NgxCopyToClipboardDirective],
  template: `
    <input [(ngModel)]="text" placeholder="Enter text" />
    <button [ngxCopyToClipboard]="text">Copy</button>
  `
})
export class MyComponent {
  text = 'Hello World';
}
```

## Demo

Visit the [demo page](http://localhost:4200/showcase) to see all utilities in action.

## Compatibility

- Angular 14+
- Standalone components

## License

MIT
