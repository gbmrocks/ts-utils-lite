# ts-number-lite

[![npm downloads](https://img.shields.io/npm/dt/ts-number-lite.svg)](https://www.npmjs.com/package/ts-number-lite) [![npm version](https://img.shields.io/npm/v/ts-number-lite.svg)](https://www.npmjs.com/package/ts-number-lite) [![npm license](https://img.shields.io/npm/l/ts-number-lite.svg)](https://www.npmjs.com/package/ts-number-lite) [![npm types](https://img.shields.io/npm/types/ts-number-lite.svg)](https://www.npmjs.com/package/ts-number-lite) [![npm bundle size](https://img.shields.io/bundlephobia/minzip/ts-number-lite.svg)](https://bundlephobia.com/result?p=ts-number-lite)

Lightweight, type-safe number utility library for web developers.

## Installation

```bash
npm install ts-number-lite
```

## Usage

```typescript
import { Injectable } from '@angular/core';
import { NumberUtils } from 'ts-number-lite';

@Injectable({ providedIn: 'root' })
export class MyService {
  constructor(private num: NumberUtils) { }
  
  myMethod(): void {
    this.num.formatCurrency(1234.56);         // '$1,234.56'
    this.num.formatBytes(1048576);           // '1 MB'
    this.num.formatPercent(0.756);           // '75.6%'
    this.num.clamp(150, 0, 100);             // 100
  }
}
```

## Methods

| Method | Description | Example |
|--------|-------------|---------|
| `formatCurrency` | Format as currency | `1234.56` → `'$1,234.56'` |
| `formatBytes` | Format as bytes (KB, MB, etc) | `1048576` → `'1 MB'` |
| `formatPercent` | Format as percent | `0.756` → `'75.6%'` |
| `clamp` | Clamp value to range | `150, 0, 100` → `100` |
| `round` | Round to decimals | `3.14159, 2` → `3.14` |
| `randomInt` | Random integer in range | `1, 10` → `7` |
| `randomFloat` | Random float in range | `1.0, 5.0` → `3.14...` |
| `isEven` | Check if number is even | `2` → `true` |
| `isOdd` | Check if number is odd | `3` → `true` |
| `isPositive` | Check if number is positive | `5` → `true` |
| `isNegative` | Check if number is negative | `-5` → `true` |
| `isInteger` | Check if value is integer | `1.5` → `false` |
| `isNaN` | Check if value is NaN | `NaN` → `true` |
| `isFinite` | Check if value is finite | `Infinity` → `false` |
| `abs` | Absolute value | `-5` → `5` |
| `floor` | Floor value | `1.9` → `1` |
| `ceil` | Ceil value | `1.1` → `2` |
| `sqrt` | Square root | `9` → `3` |
| `pow` | Power of number | `2, 3` → `8` |
| `sum` | Sum multiple numbers | `1, 2, 3` → `6` |
| `avg` | Average multiple numbers | `1, 2, 3` → `2` |
| `min` | Minimum of numbers | `1, 2, 3` → `1` |
| `max` | Maximum of numbers | `1, 2, 3` → `3` |
| `range` | Create number range | `1, 5` → `[1, 2, 3, 4]` |

## License

MIT
