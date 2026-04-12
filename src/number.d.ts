export declare class NumberUtils {
    formatCurrency(value: number, currency?: string, locale?: string): string;
    formatBytes(bytes: number, decimals?: number): string;
    formatPercent(value: number, decimals?: number): string;
    clamp(value: number, min: number, max: number): number;
    round(value: number, decimals?: number): number;
    randomInt(min: number, max: number): number;
    randomFloat(min: number, max: number): number;
    isEven(n: number): boolean;
    isOdd(n: number): boolean;
    isPositive(n: number): boolean;
    isNegative(n: number): boolean;
    isInteger(n: number): boolean;
    isNaN(n: number): boolean;
    isFinite(n: number): boolean;
    abs(n: number): number;
    floor(n: number): number;
    ceil(n: number): number;
    sqrt(n: number): number;
    pow(n: number, exp: number): number;
    sum(...nums: number[]): number;
    avg(...nums: number[]): number;
    min(...nums: number[]): number;
    max(...nums: number[]): number;
    range(start: number, end: number, step?: number): number[];
}
