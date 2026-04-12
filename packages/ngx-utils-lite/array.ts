export class ArrayUtils {
  unique<T>(arr: T[]): T[] {
    return [...new Set(arr)];
  }

  chunk<T>(arr: T[], size: number): T[][] {
    const chunks: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  }

  groupBy<T>(arr: T[], key: keyof T | ((item: T) => string)): Record<string, T[]> {
    return arr.reduce((groups, item) => {
      const groupKey = typeof key === 'function' ? key(item) : String(item[key]);
      (groups[groupKey] = groups[groupKey] || []).push(item);
      return groups;
    }, {} as Record<string, T[]>);
  }

  sortBy<T>(arr: T[], key: keyof T, order: 'asc' | 'desc' = 'asc'): T[] {
    return [...arr].sort((a, b) => {
      const aVal = a[key], bVal = b[key];
      if (aVal < bVal) return order === 'asc' ? -1 : 1;
      if (aVal > bVal) return order === 'asc' ? 1 : -1;
      return 0;
    });
  }

  shuffle<T>(arr: T[]): T[] {
    const result = [...arr];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  sample<T>(arr: T[]): T | undefined {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  intersection<T>(a: T[], b: T[]): T[] {
    return a.filter(x => b.includes(x));
  }

  difference<T>(a: T[], b: T[]): T[] {
    return a.filter(x => !b.includes(x));
  }

  compact<T>(arr: (T | null | undefined | false | 0 | '')[]): T[] {
    return arr.filter(Boolean) as T[];
  }

  flatten<T>(arr: (T | T[])[]): T[] {
    return arr.reduce<T[]>((flat, item) => flat.concat(Array.isArray(item) ? item : item), []);
  }

  flattenDeep<T>(arr: unknown[]): T[] {
    return arr.reduce<T[]>((flat, item) => 
      flat.concat(Array.isArray(item) ? this.flattenDeep(item) : item as T), []);
  }

  partition<T>(arr: T[], predicate: (item: T) => boolean): [T[], T[]] {
    const pass: T[] = [], fail: T[] = [];
    arr.forEach(item => (predicate(item) ? pass : fail).push(item));
    return [pass, fail];
  }

  pluck<T, K extends keyof T>(arr: T[], key: K): T[K][] {
    return arr.map(item => item[key]);
  }

  first<T>(arr: T[]): T | undefined { return arr[0]; }
  last<T>(arr: T[]): T | undefined { return arr[arr.length - 1]; }
  drop<T>(arr: T[], n: number = 1): T[] { return arr.slice(n); }
  take<T>(arr: T[], n: number = 1): T[] { return arr.slice(0, n); }

  sum(arr: number[]): number { return arr.reduce((a, b) => a + b, 0); }
  average(arr: number[]): number { return arr.length ? this.sum(arr) / arr.length : 0; }
  min(arr: number[]): number | undefined { return arr.length ? Math.min(...arr) : undefined; }
  max(arr: number[]): number | undefined { return arr.length ? Math.max(...arr) : undefined; }

  range(start: number, end: number, step: number = 1): number[] {
    const result: number[] = [];
    for (let i = start; i < end; i += step) result.push(i);
    return result;
  }

  zip<T>(...arrays: T[][]): T[][] {
    const maxLen = Math.max(...arrays.map(a => a.length));
    return Array(maxLen).fill(0).map((_, i) => arrays.map(a => a[i]));
  }

  uniqBy<T>(arr: T[], key: keyof T): T[] {
    const seen = new Set();
    return arr.filter(item => { const v = item[key]; if (seen.has(v)) return false; seen.add(v); return true; });
  }
}