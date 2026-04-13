# ts-date-lite

Lightweight, type-safe date utility library for web developers.

## Installation

```bash
npm install ts-date-lite
```

## Usage

```typescript
import { Injectable } from '@angular/core';
import { NgxDateUtils } from 'ts-date-lite';

@Injectable({ providedIn: 'root' })
export class MyService {
  constructor(private date: NgxDateUtils) { }
  
  myMethod(): void {
    this.date.format(new Date(), 'YYYY-MM-DD');              // '2026-04-11'
    this.date.relative(new Date(Date.now() - 3600000));     // '1 hour ago'
    this.date.isToday(new Date());                          // true
    this.date.add(new Date(), 7, 'day');                    // +7 days
    this.date.diff(new Date(), new Date(), 'day');          // difference in days
  }
}
```

## Methods

| Method | Description | Example |
|--------|-------------|---------|
| `format` | Format date with pattern | `format(new Date(), 'YYYY-MM-DD')` → `'2026-04-11'` |
| `relative` | Get relative time | `relative(now - 1h)` → `'1 hour ago'` |
| `isToday` | Check if date is today | `isToday(date)` → `true/false` |
| `add` | Add time to date | `add(date, 7, 'day')` → date + 7 days |
| `diff` | Get difference between dates | `diff(d1, d2, 'day')` → number of days |

## License

MIT