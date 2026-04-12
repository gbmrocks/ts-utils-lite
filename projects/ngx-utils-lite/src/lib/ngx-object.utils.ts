import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgxObjectUtils {
  deepGet(obj: unknown, path: string, defaultValue?: unknown): unknown {
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
      const key = keys[i];
      if (!(key in current) || current[key] === null || typeof current[key] !== 'object') {
        current[key] = {};
      }
      current = current[key] as Record<string, unknown>;
    }
    current[keys[keys.length - 1]] = value;
  }

  deepClone<T>(obj: T): T {
    if (obj === null || typeof obj !== 'object') return obj;
    if (obj instanceof Date) return new Date(obj.getTime()) as unknown as T;
    if (obj instanceof Array) return obj.map(item => this.deepClone(item)) as unknown as T;
    if (obj instanceof Object) {
      const cloned: Record<string, unknown> = {};
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          cloned[key] = this.deepClone((obj as Record<string, unknown>)[key]);
        }
      }
      return cloned as unknown as T;
    }
    return obj;
  }

  merge<T extends Record<string, unknown>>(target: T, ...sources: (Partial<T> | undefined | null)[]): T {
    for (const source of sources) {
      if (!source) continue;
      for (const key in source) {
        if (source.hasOwnProperty(key)) {
          const targetVal = target[key];
          const sourceVal = source[key];
          if (
            targetVal !== null && 
            typeof targetVal === 'object' && 
            sourceVal !== null && 
            typeof sourceVal === 'object' &&
            !Array.isArray(targetVal) &&
            !Array.isArray(sourceVal)
          ) {
            (target as Record<string, unknown>)[key] = this.merge(targetVal as Record<string, unknown>, sourceVal as Partial<Record<string, unknown>>);
          } else {
            (target as Record<string, unknown>)[key] = sourceVal;
          }
        }
      }
    }
    return target;
  }

  omit<T extends Record<string, unknown>, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
    const result = { ...obj };
    keys.forEach(key => delete result[key]);
    return result;
  }

  pick<T extends Record<string, unknown>, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
    const result = {} as Pick<T, K>;
    keys.forEach(key => {
      if (key in obj) result[key] = obj[key];
    });
    return result;
  }

  diff<T extends Record<string, unknown>>(a: T, b: Partial<T>): Partial<T> {
    const result: Partial<T> = {};
    for (const key in a) {
      if (a.hasOwnProperty(key)) {
        if (a[key] !== b[key]) {
          result[key] = a[key];
        }
      }
    }
    for (const key in b) {
      if (b.hasOwnProperty(key) && !(key in a)) {
        result[key] = b[key];
      }
    }
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
    if (a === null || b === null) return false;
    if (typeof a !== 'object' || typeof b !== 'object') return false;
    
    if (Array.isArray(a) !== Array.isArray(b)) return false;
    if (Array.isArray(a)) {
      if (a.length !== (b as unknown[]).length) return false;
      return a.every((item, i) => this.isEqual(item, (b as unknown[])[i]));
    }
    
    const keysA = Object.keys(a as object);
    const keysB = Object.keys(b as object);
    if (keysA.length !== keysB.length) return false;
    return keysA.every(key => this.isEqual(
      (a as Record<string, unknown>)[key],
      (b as Record<string, unknown>)[key]
    ));
  }

  defaults<T extends Record<string, unknown>>(obj: T, defaults: Partial<T>): T {
    const result = { ...obj };
    for (const key in defaults) {
      if (defaults.hasOwnProperty(key) && result[key] === undefined) {
        (result as Record<string, unknown>)[key] = defaults[key] as unknown;
      }
    }
    return result;
  }

  mapValues<T extends Record<string, unknown>, U>(
    obj: T, 
    mapper: (value: T[keyof T], key: keyof T) => U
  ): Record<keyof T, U> {
    const result = {} as Record<keyof T, U>;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        result[key] = mapper(obj[key], key);
      }
    }
    return result;
  }

  mapKeys<T extends Record<string, unknown>>(
    obj: T, 
    mapper: (key: string, value: T[keyof T]) => string
  ): Record<string, T[keyof T]> {
    const result: Record<string, T[keyof T]> = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const newKey = mapper(key, obj[key]);
        result[newKey] = obj[key];
      }
    }
    return result;
  }

  invert<T extends Record<string, string>>(obj: T): Record<string, string> {
    const result: Record<string, string> = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        result[obj[key]] = key;
      }
    }
    return result;
  }

  keys<T extends Record<string, unknown>>(obj: T): (keyof T)[] {
    return Object.keys(obj) as (keyof T)[];
  }

  values<T extends Record<string, unknown>>(obj: T): unknown[] {
    return Object.values(obj);
  }

  entries<T extends Record<string, unknown>>(obj: T): [keyof T, T[keyof T]][] {
    return Object.entries(obj) as [keyof T, T[keyof T]][];
  }

  has(obj: Record<string, unknown>, path: string): boolean {
    const keys = path.split('.');
    let current: unknown = obj;
    for (const key of keys) {
      if (current === null || current === undefined || !(key in (current as Record<string, unknown>))) {
        return false;
      }
      current = (current as Record<string, unknown>)[key];
    }
    return true;
  }
}