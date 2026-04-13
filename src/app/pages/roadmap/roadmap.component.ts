import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roadmap',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.css']
})
export class RoadmapComponent {
  available = [
    'StringUtils - slugify, camelCase, kebabCase, truncate, capitalize, titleCase, escapeHtml',
    'DateUtils - format, relative, isToday, add, diff',
    'ArrayUtils - unique, chunk, groupBy, sortBy, shuffle, compact',
    'ObjectUtils - deepGet, deepClone, merge, omit, pick, isEmpty',
    'NumberUtils - formatCurrency, formatBytes, clamp, random, round, formatPercent',
    'ValidationUtils - isEmail, isUrl, isPhone, isPostalCode, isStrongPassword',
    'IdUtils - uuid, nanoid, shortId, hash, snowflake, generateCode',
    'CookieUtils - get, set, delete, has'
  ];

  planned = [
    'HTTP Utils - retry, cache, error handling',
    'Storage Utils - localStorage, sessionStorage, IndexedDB wrappers',
    'Color Utils - hex/rgb conversion, color manipulation',
    'Async Utils - debounce, throttle, polling, queue',
    'Crypto Utils - hash, encryption, JWT helpers',
    'Localize Utils - i18n, date/number formatting'
  ];

  requestFeature(): void {
    const title = encodeURIComponent('[Feature Request] ');
    const body = encodeURIComponent(`## Description
Please describe the feature you'd like to see...

## Use Case
How would you use this feature?

## Example
\`\`\`typescript
// What would you like to call?
\`\`\`
`);
    window.open(`https://github.com/gbmrocks/ts-utils-lite/issues/new?title=${title}&body=${body}`, '_blank');
  }
}
