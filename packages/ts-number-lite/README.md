# ts-number-lite

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
    this.num.round(3.14159, 2);              // 3.14
    this.num.randomInt(1, 10);               // random int 1-10
  }
}
```

## Methods

| Method | Description | Example |
|--------|-------------|---------|
| `formatCurrency` | Format as currency | `1234.56` → `'$1,234.56'` |
| `formatBytes` | Format as bytes | `1048576` → `'1 MB'` |
| `formatPercent` | Format as percent | `0.756` → `'75.6%'` |
| `clamp` | Clamp value to range | `150, 0, 100` → `100` |
| `round` | Round to decimals | `3.14159, 2` → `3.14` |
| `randomInt` | Random integer | `1, 10` → random 1-10 |

## License

MIT