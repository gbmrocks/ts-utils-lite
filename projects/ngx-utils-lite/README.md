# ngx-utils-lite

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
npm install ngx-utils-lite
```

## Usage

### String Utils

```typescript
import { Injectable } from '@angular/core';
import { NgxStringUtils } from 'ngx-utils-lite';

@Injectable({ providedIn: 'root' })
export class MyService {
  constructor(private str: NgxStringUtils) { }
  
  myMethod(): void {
    this.str.slugify('Hello World');       // 'hello-world'
    this.str.camelCase('hello world');     // 'helloWorld'
  }
}
```

### Date Utils

```typescript
import { Injectable } from '@angular/core';
import { NgxDateUtils } from 'ngx-utils-lite';

@Injectable({ providedIn: 'root' })
export class MyService {
  constructor(private date: NgxDateUtils) { }
  
  myMethod(): void {
    this.date.format(new Date(), 'YYYY-MM-DD');
    this.date.relative(new Date(Date.now() - 3600000));
  }
}
```

### Array Utils

```typescript
import { Injectable } from '@angular/core';
import { NgxArrayUtils } from 'ngx-utils-lite';

@Injectable({ providedIn: 'root' })
export class MyService {
  constructor(private arr: NgxArrayUtils) { }
  
  myMethod(): void {
    this.arr.unique([1, 2, 2, 3]);
    this.arr.chunk([1, 2, 3, 4], 2);
  }
}
```

### Object Utils

```typescript
import { Injectable } from '@angular/core';
import { NgxObjectUtils } from 'ngx-utils-lite';

@Injectable({ providedIn: 'root' })
export class MyService {
  constructor(private obj: NgxObjectUtils) { }
  
  myMethod(): void {
    this.obj.deepGet({a: {b: 42}}, 'a.b');
    this.obj.deepClone({a: 1});
  }
}
```

### Number Utils

```typescript
import { Injectable } from '@angular/core';
import { NgxNumberUtils } from 'ngx-utils-lite';

@Injectable({ providedIn: 'root' })
export class MyService {
  constructor(private num: NgxNumberUtils) { }
  
  myMethod(): void {
    this.num.formatCurrency(1234.56);
    this.num.formatBytes(1048576);
  }
}
```

### Validation Utils

```typescript
import { Injectable } from '@angular/core';
import { NgxValidationUtils } from 'ngx-utils-lite';

@Injectable({ providedIn: 'root' })
export class MyService {
  constructor(private val: NgxValidationUtils) { }
  
  myMethod(): void {
    this.val.isEmail('test@example.com');
    this.val.isUrl('https://google.com');
  }
}
```

### ID Utils

```typescript
import { Injectable } from '@angular/core';
import { NgxIdUtils } from 'ngx-utils-lite';

@Injectable({ providedIn: 'root' })
export class MyService {
  constructor(private id: NgxIdUtils) { }
  
  myMethod(): void {
    this.id.uuid();
    this.id.nanoid();
    this.id.generateCode(6, 'numeric');
  }
}
```

### Cookie Utils

```typescript
import { Injectable } from '@angular/core';
import { NgxCookieUtils } from 'ngx-utils-lite';

@Injectable({ providedIn: 'root' })
export class MyService {
  constructor(private cookie: NgxCookieUtils) { }
  
  myMethod(): void {
    this.cookie.set('theme', 'dark', 7);
    const theme = this.cookie.get('theme');
    this.cookie.delete('theme');
  }
}
```

### Copy to Clipboard Directive

```typescript
import { Component } from '@angular/core';
import { NgxCopyToClipboardDirective } from 'ngx-utils-lite';

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

## Compatibility

- Angular 14+
- Standalone components

## License

MIT