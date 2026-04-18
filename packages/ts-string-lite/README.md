# ts-string-lite

[![npm downloads](https://img.shields.io/npm/dt/ts-string-lite.svg)](https://www.npmjs.com/package/ts-string-lite) [![npm version](https://img.shields.io/npm/v/ts-string-lite.svg)](https://www.npmjs.com/package/ts-string-lite) [![npm license](https://img.shields.io/npm/l/ts-string-lite.svg)](https://www.npmjs.com/package/ts-string-lite) [![npm types](https://img.shields.io/npm/types/ts-string-lite.svg)](https://www.npmjs.com/package/ts-string-lite) [![npm bundle size](https://img.shields.io/bundlephobia/minzip/ts-string-lite.svg)](https://bundlephobia.com/result?p=ts-string-lite)

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
    this.str.levenshtein('kitten', 'sitting'); // 3
  }
}
```

## Methods

| Method | Description | Example |
|--------|-------------|---------|
| `slugify` | Convert string to URL-friendly slug | `'Hello World'` → `'hello-world'` |
| `camelCase` | Convert to camelCase | `'hello world'` → `'helloWorld'` |
| `kebabCase` | Convert to kebab-case | `'HelloWorld'` → `'hello-world'` |
| `snakeCase` | Convert to snake_case | `'HelloWorld'` → `'hello_world'` |
| `pascalCase` | Convert to PascalCase | `'hello world'` → `'HelloWorld'` |
| `titleCase` | Convert to Title Case | `'hello world'` → `'Hello World'` |
| `truncate` | Truncate string to length | `'Hello World', 10` → `'Hello W...'` |
| `capitalize` | Capitalize first letter | `'hello'` → `'Hello'` |
| `escapeHtml` | Escape HTML characters | `'<script>'` → `'&lt;script&gt;'` |
| `unescapeHtml` | Unescape HTML characters | `'&lt;script&gt;'` → `'<script>'` |
| `repeat` | Repeat string N times | `'a', 3` → `'aaa'` |
| `reverse` | Reverse string | `'abc'` → `'cba'` |
| `base64Encode`| Encode string to Base64 | `'hello'` → `'aGVsbG8='` |
| `base64Decode`| Decode string from Base64 | `'aGVsbG8='` → `'hello'` |
| `randomString`| Generate random string | `10` → `'aB3kL9... '` |
| `trimStart` | Trim specified chars from start | `'--abc', '-'` → `'abc'` |
| `trimEnd` | Trim specified chars from end | `'abc--', '-'` → `'abc'` |
| `words` | Split string into words | `'hello world'` → `['hello', 'world']` |
| `countWords` | Count words in string | `'hello world'` → `2` |
| `levenshtein` | Calculate edit distance | `'kitten', 'sitting'` → `3` |

## License

MIT
