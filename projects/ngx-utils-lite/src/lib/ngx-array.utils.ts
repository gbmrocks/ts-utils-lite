import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgxArrayUtils {
  unique<T>(array: T[]): T[] {
    return [...new Set(array)];
  }

  uniqueBy<T>(array: T[], key: keyof T): T[] {
    const seen = new Set();
    return array.filter(item => {
      const value = item[key];
      if (seen.has(value)) return false;
      seen.add(value);
      return true;
    });
  }

  chunk<T>(array: T[], size: number): T[][] {
    const chunks: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  }

  groupBy<T>(array: T[], key: keyof T | ((item: T) => string)): Record<string, T[]> {
    return array.reduce((groups, item) => {
      const groupKey = typeof key === 'function' ? key(item) : String(item[key]);
      (groups[groupKey] = groups[groupKey] || []).push(item);
      return groups;
    }, {} as Record<string, T[]>);
  }

  sortBy<T>(array: T[], key: keyof T, order: 'asc' | 'desc' = 'asc'): T[] {
    return [...array].sort((a, b) => {
      const aVal = a[key];
      const bVal = b[key];
      if (aVal < bVal) return order === 'asc' ? -1 : 1;
      if (aVal > bVal) return order === 'asc' ? 1 : -1;
      return 0;
    });
  }

  flatten<T>(array: (T | T[])[]): T[] {
    return array.reduce<T[]>((flat, item) => 
      flat.concat(Array.isArray(item) ? this.flatten(item) : item), []
    );
  }

  deepFlatten<T>(array: unknown[]): T[] {
    return array.reduce<T[]>((flat, item) => 
      flat.concat(Array.isArray(item) ? this.deepFlatten(item) : item as T), []
    );
  }

  pluck<T, K extends keyof T>(array: T[], key: K): T[K][] {
    return array.map(item => item[key]);
  }

  shuffle<T>(array: T[]): T[] {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  sample<T>(array: T[]): T | undefined {
    return array[Math.floor(Math.random() * array.length)];
  }

  sampleSize<T>(array: T[], size: number): T[] {
    const shuffled = this.shuffle(array);
    return shuffled.slice(0, Math.min(size, array.length));
  }

  intersection<T>(a: T[], b: T[]): T[] {
    const setB = new Set(b);
    return a.filter(item => setB.has(item));
  }

  difference<T>(a: T[], b: T[]): T[] {
    const setB = new Set(b);
    return a.filter(item => !setB.has(item));
  }

  union<T>(a: T[], b: T[]): T[] {
    return [...new Set([...a, ...b])];
  }

  compact<T>(array: (T | null | undefined | false | 0 | '')[]): T[] {
    return array.filter(Boolean) as T[];
  }

  partition<T>(array: T[], predicate: (item: T) => boolean): [T[], T[]] {
    const pass: T[] = [];
    const fail: T[] = [];
    array.forEach(item => (predicate(item) ? pass : fail).push(item));
    return [pass, fail];
  }

  keyBy<T>(array: T[], key: keyof T | ((item: T) => string)): Record<string, T> {
    return array.reduce((obj, item) => {
      const itemKey = typeof key === 'function' ? key(item) : String(item[key]);
      obj[itemKey] = item;
      return obj;
    }, {} as Record<string, T>);
  }

  countBy<T>(array: T[], key: keyof T | ((item: T) => string)): Record<string, number> {
    return array.reduce((counts, item) => {
      const itemKey = typeof key === 'function' ? key(item) : String(item[key]);
      counts[itemKey] = (counts[itemKey] || 0) + 1;
      return counts;
    }, {} as Record<string, number>);
  }

  chunkBy<T>(array: T[], predicate: (item: T, index: number) => boolean): T[][] {
    const chunks: T[][] = [];
    let currentChunk: T[] = [];
    array.forEach((item, index) => {
      if (predicate(item, index)) {
        currentChunk.push(item);
      } else if (currentChunk.length) {
        chunks.push(currentChunk);
        currentChunk = [];
      }
    });
    if (currentChunk.length) chunks.push(currentChunk);
    return chunks;
  }

  remove<T>(array: T[], predicate: (item: T) => boolean): T[] {
    const removed: T[] = [];
    for (let i = array.length - 1; i >= 0; i--) {
      if (predicate(array[i])) {
        removed.unshift(array.splice(i, 1)[0]);
      }
      }
    return removed;
  }

  replace<T>(array: T[], from: T, to: T): T[] {
    return array.map(item => item === from ? to : item);
  }
}