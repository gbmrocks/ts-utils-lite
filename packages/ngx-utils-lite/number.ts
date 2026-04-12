export class NumberUtils {
  formatCurrency(value: number, currency: string = 'USD', locale: string = 'en-US'): string {
    return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value);
  }

  formatBytes(bytes: number, decimals: number = 2): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + ' ' + sizes[i];
  }

  formatPercent(value: number, decimals: number = 2): string {
    return (value * 100).toFixed(decimals) + '%';
  }

  clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
  }

  round(value: number, decimals: number = 0): number {
    const factor = Math.pow(10, decimals);
    return Math.round(value * factor) / factor;
  }

  randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  randomFloat(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  isEven(n: number): boolean { return n % 2 === 0; }
  isOdd(n: number): boolean { return n % 2 !== 0; }
  isPositive(n: number): boolean { return n > 0; }
  isNegative(n: number): boolean { return n < 0; }
  isInteger(n: number): boolean { return Number.isInteger(n); }
  isNaN(n: number): boolean { return Number.isNaN(n); }
  isFinite(n: number): boolean { return Number.isFinite(n); }

  abs(n: number): number { return Math.abs(n); }
  floor(n: number): number { return Math.floor(n); }
  ceil(n: number): number { return Math.ceil(n); }
  sqrt(n: number): number { return Math.sqrt(n); }
  pow(n: number, exp: number): number { return Math.pow(n, exp); }

  sum(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
  avg(...nums: number[]): number { return nums.length ? this.sum(...nums) / nums.length : 0; }
  min(...nums: number[]): number { return Math.min(...nums); }
  max(...nums: number[]): number { return Math.max(...nums); }

  range(start: number, end: number, step: number = 1): number[] {
    const result: number[] = [];
    for (let i = start; i < end; i += step) result.push(i);
    return result;
  }
}