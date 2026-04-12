export declare class ObjectUtils {
    deepGet(obj: unknown, path: string, defaultValue?: unknown): unknown;
    deepSet(obj: Record<string, unknown>, path: string, value: unknown): void;
    deepClone<T>(obj: T): T;
    merge<T extends Record<string, unknown>>(target: T, ...sources: (Partial<T> | undefined | null)[]): T;
    omit<T extends Record<string, unknown>, K extends keyof T>(obj: T, keys: K[]): Partial<T>;
    pick<T extends Record<string, unknown>, K extends keyof T>(obj: T, keys: K[]): Partial<T>;
    isEmpty(value: unknown): boolean;
    isEqual(a: unknown, b: unknown): boolean;
    keys(obj: Record<string, unknown>): string[];
    values(obj: Record<string, unknown>): unknown[];
    entries(obj: Record<string, unknown>): [string, unknown][];
    has(obj: Record<string, unknown>, path: string): boolean;
    size(obj: Record<string, unknown>): number;
    mapValues(obj: Record<string, unknown>, fn: (v: unknown, k: string) => unknown): Record<string, unknown>;
    invert(obj: Record<string, string>): Record<string, string>;
    clone<T>(obj: T): T;
}
