# ts-string-lite

Lightweight, type-safe string utility library for web developers.

## Installation

```bash
npm install ts-string-lite
```

## Usage

```typescript
import { Injectable } from '@angular/core';
import { StringUtils } from 'ts-string-lite';

@Injectable({ providedIn: 'root' })
export class MyService {
  constructor(private str: StringUtils) { }
  
  myMethod(): void {
    this.str.slugify('Hello World');       // 'hello-world'
    this.str.camelCase('hello world');     // 'helloWorld'
    this.str.kebabCase('HelloWorld');      // 'hello-world'
    this.str.pascalCase('hello world');    // 'HelloWorld'
    this.str.truncate('Hello World', 10);  // 'Hello W...'
    this.str.capitalize('hello');          // 'Hello'
    this.str.titleCase('hello world');     // 'Hello World'
    this.str.escapeHtml('<script>');       // '&lt;script&gt;'
  }
}
```

## Methods

| Method | Description | Example |
|--------|-------------|---------|
| `slugify` | Convert string to URL-friendly slug | `'Hello World'` → `'hello-world'` |
| `camelCase` | Convert to camelCase | `'hello world'` → `'helloWorld'` |
| `kebabCase` | Convert to kebab-case | `'HelloWorld'` → `'hello-world'` |
| `pascalCase` | Convert to PascalCase | `'hello world'` → `'HelloWorld'` |
| `truncate` | Truncate string to length | `'Hello World', 10` → `'Hello W...'` |
| `capitalize` | Capitalize first letter | `'hello'` → `'Hello'` |
| `titleCase` | Convert to Title Case | `'hello world'` → `'Hello World'` |
| `escapeHtml` | Escape HTML characters | `'<script>'` → `'&lt;script&gt;'` |

## License

MIT