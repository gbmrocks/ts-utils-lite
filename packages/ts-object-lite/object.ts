export class ObjectUtils {
  deepGet(obj: unknown, path: string, defaultValue?: unknown): unknown {
    if (!obj || !path) return defaultValue;
    const keys = path.split('.');
    let result: unknown = obj;
    for (const key of keys) {
      if (result === null || result === undefined) return defaultValue;
      result = (result as Record<string, unknown>)[key];
    }
    return result ?? defaultValue;
  }

  deepSet(obj: Record<string, unknown>, path: string, value: unknown): void {
    const keys = path.split('.');
    let current = obj;
    for (let i = 0; i < keys.length - 1; i++) {
      if (!(keys[i] in current) || current[keys[i]] === null) current[keys[i]] = {};
      current = current[keys[i]] as Record<string, unknown>;
    }
    current[keys[keys.length - 1]] = value;
  }

  deepClone<T>(obj: T): T {
    if (obj === null || typeof obj !== 'object') return obj;
    if (obj instanceof Date) return new Date(obj.getTime()) as unknown as T;
    if (Array.isArray(obj)) return obj.map(item => this.deepClone(item)) as unknown as T;
    const cloned: Record<string, unknown> = {};
    for (const key in obj) cloned[key] = this.deepClone((obj as Record<string, unknown>)[key]);
    return cloned as unknown as T;
  }

  merge<T extends Record<string, unknown>>(target: T, ...sources: (Partial<T> | undefined | null)[]): T {
    for (const source of sources) {
      if (!source) continue;
      for (const key of Object.keys(source)) {
        const tv = target[key], sv = source[key as keyof T];
        if (tv && typeof tv === 'object' && sv && typeof sv === 'object' && !Array.isArray(tv) && !Array.isArray(sv)) {
          target[key as keyof T] = this.merge(tv as Record<string, unknown>, sv as Partial<Record<string, unknown>>) as T[keyof T];
        } else {
          target[key as keyof T] = sv as T[keyof T];
        }
      }
    }
    return target;
  }

  omit<T extends Record<string, unknown>, K extends keyof T>(obj: T, keys: K[]): Partial<T> {
    const result = { ...obj };
    keys.forEach(k => delete result[k as string]);
    return result;
  }

  pick<T extends Record<string, unknown>, K extends keyof T>(obj: T, keys: K[]): Partial<T> {
    const result: Partial<T> = {};
    keys.forEach(k => { if (k in obj) result[k] = obj[k]; });
    return result;
  }

  isEmpty(value: unknown): boolean {
    if (value === null || value === undefined) return true;
    if (typeof value === 'string') return value.trim().length === 0;
    if (Array.isArray(value)) return value.length === 0;
    if (typeof value === 'object') return Object.keys(value).length === 0;
    return false;
  }

  isEqual(a: unknown, b: unknown): boolean {
    if (a === b) return true;
    if (!a || !b || typeof a !== 'object' || typeof b !== 'object') return false;
    const ak = Object.keys(a as object), bk = Object.keys(b as object);
    return ak.length === bk.length && ak.every(k => this.isEqual((a as Record<string, unknown>)[k], (b as Record<string, unknown>)[k]));
  }

  keys(obj: Record<string, unknown>): string[] { return Object.keys(obj); }
  values(obj: Record<string, unknown>): unknown[] { return Object.values(obj); }
  entries(obj: Record<string, unknown>): [string, unknown][] { return Object.entries(obj) as [string, unknown][]; }
  has(obj: Record<string, unknown>, path: string): boolean { return this.deepGet(obj, path) !== undefined; }
  size(obj: Record<string, unknown>): number { return Object.keys(obj).length; }

  mapValues(obj: Record<string, unknown>, fn: (v: unknown, k: string) => unknown): Record<string, unknown> {
    const result: Record<string, unknown> = {};
    for (const k of Object.keys(obj)) result[k] = fn(obj[k], k);
    return result;
  }

  invert(obj: Record<string, string>): Record<string, string> {
    const result: Record<string, string> = {};
    for (const k of Object.keys(obj)) result[obj[k]] = k;
    return result;
  }

  clone<T>(obj: T): T { return this.deepClone(obj); }
}