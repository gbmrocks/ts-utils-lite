import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
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

