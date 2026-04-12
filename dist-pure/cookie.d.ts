export declare class CookieUtils {
    set(key: string, value: string, days?: number, path?: string): void;
    get(key: string): string | null;
    has(key: string): boolean;
    delete(key: string, path?: string): void;
    clear(): void;
    all(): Record<string, string>;
}
