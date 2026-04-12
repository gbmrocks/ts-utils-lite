import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roadmap',
  standalone: true,
  imports: [CommonModule],
  template: `
<div class="roadmap-container">
  <div class="page-header">
    <h1>What's Next</h1>
    <p>Available utilities and planned features</p>
  </div>

  <div class="utilities-grid">
    <div class="utility-section available">
      <div class="section-icon">✅</div>
      <h2>Available Now</h2>
      <ul class="feature-list">
        <li *ngFor="let item of available; let i = index" [style.animation-delay]="i * 0.05 + 's'">
          <span class="check">✓</span>
          {{ item }}
        </li>
      </ul>
    </div>

    <div class="utility-section coming">
      <div class="section-icon">🚀</div>
      <h2>Coming Soon</h2>
      <ul class="feature-list">
        <li *ngFor="let item of planned; let i = index" [style.animation-delay]="i * 0.05 + 's'">
          <span class="bullet">→</span>
          {{ item }}
        </li>
      </ul>
    </div>
  </div>

  <div class="request-section">
    <div class="request-icon">💡</div>
    <p>Can't find what you need?</p>
    <button class="request-btn" (click)="requestFeature()">
      <span>✨</span> Request a Feature
    </button>
  </div>
</div>
  `,
  styles: [`
.roadmap-container { max-width: 1000px; margin: 0 auto; padding: 3rem 2rem; }
.page-header { text-align: center; margin-bottom: 3rem; }
.page-header h1 { font-size: 2.5rem; background: var(--gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: 800; margin-bottom: 0.5rem; }
.page-header p { color: var(--text-muted); font-size: 1.1rem; }
.utilities-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 3rem; }
.utility-section { position: relative; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 20px; padding: 2rem; overflow: hidden; }
.utility-section::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; }
.utility-section.available::before { background: var(--gradient); }
.utility-section.coming::before { background: linear-gradient(90deg, #6366f1, #8b5cf6); }
.section-icon { font-size: 2rem; margin-bottom: 1rem; }
.utility-section h2 { font-size: 1.25rem; font-weight: 700; margin-bottom: 1.5rem; }
.available h2 { color: var(--accent); }
.coming h2 { color: #8b5cf6; }
.feature-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.875rem; }
.feature-list li { color: var(--text-muted); font-size: 0.9rem; display: flex; align-items: flex-start; gap: 0.75rem; line-height: 1.5; animation: fadeIn 0.4s ease backwards; }
@keyframes fadeIn { from { opacity: 0; transform: translateX(-10px); } to { opacity: 1; transform: translateX(0); } }
.check { color: var(--accent); font-weight: bold; min-width: 1rem; }
.bullet { color: #8b5cf6; font-weight: bold; min-width: 1rem; }
.request-section { position: relative; text-align: center; padding: 3rem 2rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 20px; overflow: hidden; }
.request-section::before { content: ''; position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 200px; height: 200px; background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%); pointer-events: none; }
.request-icon { font-size: 3rem; margin-bottom: 1rem; }
.request-section p { color: var(--text-muted); margin-bottom: 1.5rem; font-size: 1.1rem; }
.request-btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 1rem 2.5rem; background: var(--gradient); border: none; border-radius: 14px; color: white; font-weight: 600; font-size: 1rem; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3); }
.request-btn:hover { transform: translateY(-3px); box-shadow: 0 8px 30px rgba(59, 130, 246, 0.4); }
@media (max-width: 768px) { .utilities-grid { grid-template-columns: 1fr; } }
  `]
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
    window.open(`https://github.com/gbmrocks/ngx-utils-lite/issues/new?title=${title}&body=${body}`, '_blank');
  }
}