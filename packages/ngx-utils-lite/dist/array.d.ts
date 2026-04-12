export declare class ArrayUtils {
    unique<T>(arr: T[]): T[];
    chunk<T>(arr: T[], size: number): T[][];
    groupBy<T>(arr: T[], key: keyof T | ((item: T) => string)): Record<string, T[]>;
    sortBy<T>(arr: T[], key: keyof T, order?: 'asc' | 'desc'): T[];
    shuffle<T>(arr: T[]): T[];
    sample<T>(arr: T[]): T | undefined;
    intersection<T>(a: T[], b: T[]): T[];
    difference<T>(a: T[], b: T[]): T[];
    compact<T>(arr: (T | null | undefined | false | 0 | '')[]): T[];
    flatten<T>(arr: (T | T[])[]): T[];
    flattenDeep<T>(arr: unknown[]): T[];
    partition<T>(arr: T[], predicate: (item: T) => boolean): [T[], T[]];
    pluck<T, K extends keyof T>(arr: T[], key: K): T[K][];
    first<T>(arr: T[]): T | undefined;
    last<T>(arr: T[]): T | undefined;
    drop<T>(arr: T[], n?: number): T[];
    take<T>(arr: T[], n?: number): T[];
    sum(arr: number[]): number;
    average(arr: number[]): number;
    min(arr: number[]): number | undefined;
    max(arr: number[]): number | undefined;
    range(start: number, end: number, step?: number): number[];
    zip<T>(...arrays: T[][]): T[][];
    uniqBy<T>(arr: T[], key: keyof T): T[];
}
