import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
<div class="home">
  <section class="hero">
    <div class="hero-glow"></div>
    <div class="badge">
      <span class="badge-dot"></span>
      v1.0.0 Released
    </div>
    <h1>Everything you need,<br/><span class="gradient-text">nothing you don't.</span></h1>
    <p class="tagline">Lightweight, type-safe utility library for web developers</p>
    <div class="cta">
      <a routerLink="/showcase" class="btn-primary">
        <span>📖</span> How to Use
      </a>
      <a routerLink="/roadmap" class="btn-secondary">
        <span>🗺️</span> Roadmap
      </a>
    </div>
    <div class="npm-badge">
      <code>npm install ts-utils-lite</code>
    </div>
  </section>

  <section class="features">
    <div class="section-header">
      <h2>Why ts-utils-lite?</h2>
      <p>Built for modern web apps</p>
    </div>
    <div class="feature-grid">
      <div *ngFor="let feature of features; let i = index" class="feature-card" [style.animation-delay]="i * 0.1 + 's'">
        <div class="feature-icon">{{ feature.icon }}</div>
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.desc }}</p>
      </div>
    </div>
  </section>

  <section class="utilities">
    <div class="section-header">
      <h2>Available Utilities</h2>
      <p>8 utilities, countless possibilities</p>
    </div>
    <div class="utils-grid">
      <div *ngFor="let util of utils; let i = index" class="util-card" [style.animation-delay]="i * 0.05 + 's'">
        <div class="util-icon">🔹</div>
        <div class="util-info">
          <code>{{ util.name }}</code>
          <span>{{ util.desc }}</span>
        </div>
      </div>
    </div>
  </section>
</div>
  `,
  styles: [`
.home { min-height: 100vh; background: var(--bg); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
.hero { position: relative; text-align: center; padding: 5rem 2rem 4rem; overflow: hidden; }
.hero-glow { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 800px; height: 800px; background: radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, rgba(99, 102, 241, 0.06) 40%, transparent 70%); pointer-events: none; }
.badge { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1.25rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 50px; color: var(--accent); font-size: 0.875rem; margin-bottom: 2rem; font-weight: 600; }
.badge-dot { width: 8px; height: 8px; background: var(--accent); border-radius: 50%; animation: pulse 2s infinite; }
@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
h1 { position: relative; font-size: clamp(2.5rem, 6vw, 4rem); font-weight: 800; color: var(--text); margin-bottom: 1rem; line-height: 1.2; }
.gradient-text { background: linear-gradient(135deg, #60a5fa, #6366f1, #818cf8); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; background-size: 200% auto; animation: gradient 3s ease infinite; }
@keyframes gradient { 0% { background-position: 0% center; } 50% { background-position: 100% center; } 100% { background-position: 0% center; } }
.tagline { font-size: 1.25rem; color: var(--text-muted); max-width: 500px; margin: 0 auto 2.5rem; }
.cta { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-bottom: 3rem; }
.btn-primary, .btn-secondary { display: flex; align-items: center; gap: 0.5rem; padding: 0.875rem 2rem; border-radius: 14px; text-decoration: none; font-weight: 600; transition: all 0.3s ease; font-size: 1rem; }
.btn-primary { background: var(--gradient); color: white; box-shadow: 0 4px 20px rgba(59, 130, 246, 0.4); }
.btn-primary:hover { transform: translateY(-3px); box-shadow: 0 8px 30px rgba(59, 130, 246, 0.5); }
.btn-secondary { background: var(--bg-card); color: var(--text-muted); border: 1px solid var(--border-color); }
.btn-secondary:hover { background: var(--bg-hover); color: var(--text); }
.npm-badge { display: inline-block; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 12px; padding: 1rem 2rem; }
.npm-badge code { color: var(--accent); font-family: 'JetBrains Mono', monospace; font-size: 1rem; }
section { max-width: 1000px; margin: 0 auto; padding: 4rem 2rem; }
.section-header { text-align: center; margin-bottom: 3rem; }
.section-header h2 { font-size: 2rem; color: var(--text); font-weight: 700; margin-bottom: 0.5rem; }
.section-header p { color: var(--text-muted); font-size: 1rem; }
.feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem; }
.feature-card { position: relative; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 20px; padding: 2rem; text-align: center; transition: all 0.3s ease; animation: fadeInUp 0.5s ease backwards; }
@keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
.feature-card:hover { border-color: var(--accent); transform: translateY(-5px); box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15); }
.feature-icon { font-size: 2.5rem; margin-bottom: 1rem; }
.feature-card h3 { color: var(--text); margin-bottom: 0.5rem; font-weight: 600; font-size: 1.1rem; }
.feature-card p { color: var(--text-muted); font-size: 0.875rem; line-height: 1.5; }
.utils-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; }
.util-card { display: flex; align-items: center; gap: 1rem; padding: 1.25rem 1.5rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 14px; transition: all 0.3s ease; animation: fadeInUp 0.5s ease backwards; }
.util-card:hover { border-color: var(--accent); }
.util-icon { font-size: 1.25rem; opacity: 0.7; }
.util-info code { display: block; color: var(--accent); font-family: 'JetBrains Mono', monospace; font-size: 0.95rem; font-weight: 600; margin-bottom: 0.25rem; }
.util-info span { color: var(--text-muted); font-size: 0.8rem; }
  `]
})
export class HomeComponent {
  features = [
    { icon: '⚡', title: 'Lightweight', desc: 'Minimal bundle size, tree-shakeable' },
    { icon: '🔷', title: 'Type Safe', desc: 'Full TypeScript support with types' },
    { icon: '🧩', title: 'Tree Shakable', desc: 'Import only what you need' },
    { icon: '✨', title: 'Zero Deps', desc: 'No external dependencies' }
  ];

  utils = [
    { name: 'StringUtils', desc: 'slugify, camelCase, truncate, capitalize' },
    { name: 'DateUtils', desc: 'format, relative, isToday, add, diff' },
    { name: 'ArrayUtils', desc: 'unique, chunk, groupBy, sortBy, shuffle' },
    { name: 'ObjectUtils', desc: 'deepGet, deepClone, merge, omit, pick' },
    { name: 'NumberUtils', desc: 'formatCurrency, formatBytes, clamp, random' },
    { name: 'ValidationUtils', desc: 'isEmail, isUrl, isPhone, isStrongPassword' },
    { name: 'IdUtils', desc: 'uuid, nanoid, hash, snowflake, generateCode' },
    { name: 'CookieUtils', desc: 'get, set, delete, has' }
  ];
}