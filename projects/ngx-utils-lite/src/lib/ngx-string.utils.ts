import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgxStringUtils {
  slugify(text: string): string {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  truncate(text: string, maxLength: number, suffix: string = '...'): string {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength - suffix.length) + suffix;
  }

  capitalize(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }

  titleCase(text: string): string {
    return text.replace(/\w\S*/g, word => 
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
  }

  camelCase(text: string): string {
    return text
      .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => 
        index === 0 ? word.toLowerCase() : word.toUpperCase()
      )
      .replace(/[\s_-]+/g, '');
  }

  kebabCase(text: string): string {
    return text
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .replace(/[\s_]+/g, '-')
      .toLowerCase();
  }

  snakeCase(text: string): string {
    return text
      .replace(/([a-z])([A-Z])/g, '$1_$2')
      .replace(/[\s-]+/g, '_')
      .toLowerCase();
  }

  pascalCase(text: string): string {
    return text
      .replace(/(?:^\w|[A-Z]|\b\w)/g, word => word.toUpperCase())
      .replace(/[\s_-]+/g, '');
  }

  template(template: string, data: Record<string, unknown>): string {
    return template.replace(/\{\{(\w+)\}\}/g, (_, key) => 
      String(data[key] ?? '')
    );
  }

  escapeHtml(text: string): string {
    const map: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
  }

  unescapeHtml(text: string): string {
    const map: Record<string, string> = {
      '&amp;': '&',
      '&lt;': '<',
      '&gt;': '>',
      '&quot;': '"',
      '&#39;': "'"
    };
    return text.replace(/&(amp|lt|gt|quot|#39);/g, m => map[m] || m);
  }

  stripHtml(html: string): string {
    return html.replace(/<[^>]*>/g, '');
  }

  repeat(text: string, times: number): string {
    return text.repeat(times);
  }

  padStart(text: string, length: number, char: string = ' '): string {
    return text.padStart(length, char);
  }

  padEnd(text: string, length: number, char: string = ' '): string {
    return text.padEnd(length, char);
  }

  startsWith(text: string, prefix: string): boolean {
    return text.startsWith(prefix);
  }

  endsWith(text: string, suffix: string): boolean {
    return text.endsWith(suffix);
  }

  includes(text: string, search: string): boolean {
    return text.includes(search);
  }

  words(text: string, delimiter: RegExp = /\s+/): string[] {
    return text.split(delimiter).filter(Boolean);
  }
}