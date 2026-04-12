import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgxNumberUtils {
  formatCurrency(
    value: number, 
    currency: string = 'USD', 
    locale: string = 'en-US'
  ): string {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency
    }).format(value);
  }

  formatNumber(value: number, decimals: number = 0, locale: string = 'en-US'): string {
    return new Intl.NumberFormat(locale, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    }).format(value);
  }

  formatBytes(bytes: number, decimals: number = 2): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + ' ' + sizes[i];
  }

  formatPercent(value: number, decimals: number = 0, locale: string = 'en-US'): string {
    return new Intl.NumberFormat(locale, {
      style: 'percent',
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    }).format(value);
  }

  formatPhone(phone: string, countryCode: string = 'US'): string {
    const cleaned = phone.replace(/\D/g, '');
    if (countryCode === 'US' && cleaned.length === 10) {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
    }
    return phone;
  }

  clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
  }

  round(value: number, decimals: number = 0): number {
    const multiplier = Math.pow(10, decimals);
    return Math.round(value * multiplier) / multiplier;
  }

  floor(value: number, decimals: number = 0): number {
    const multiplier = Math.pow(10, decimals);
    return Math.floor(value * multiplier) / multiplier;
  }

  ceil(value: number, decimals: number = 0): number {
    const multiplier = Math.pow(10, decimals);
    return Math.ceil(value * multiplier) / multiplier;
  }

  randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  randomFloat(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  randomChoice<T>(array: T[]): T | undefined {
    return array[Math.floor(Math.random() * array.length)];
  }

  sum(array: number[]): number {
    return array.reduce((acc, val) => acc + val, 0);
  }

  avg(array: number[]): number {
    return array.length ? this.sum(array) / array.length : 0;
  }

  median(array: number[]): number {
    const sorted = [...array].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
  }

  min(array: number[]): number | undefined {
    return array.length ? Math.min(...array) : undefined;
  }

  max(array: number[]): number | undefined {
    return array.length ? Math.max(...array) : undefined;
  }

  range(start: number, end: number, step: number = 1): number[] {
    const result: number[] = [];
    for (let i = start; i < end; i += step) {
      result.push(i);
    }
    return result;
  }

  inRange(value: number, min: number, max: number): boolean {
    return value >= min && value <= max;
  }

  sign(value: number): -1 | 0 | 1 {
    if (value > 0) return 1;
    if (value < 0) return -1;
    return 0;
  }

  isInteger(value: number): boolean {
    return Number.isInteger(value);
  }

  isNaN(value: number): boolean {
    return Number.isNaN(value);
  }

  isFinite(value: number): boolean {
    return Number.isFinite(value);
  }

  parseInt(value: string, radix: number = 10): number {
    return parseInt(value, radix);
  }

  parseFloat(value: string): number {
    return parseFloat(value);
  }

  toFixed(value: number, decimals: number = 0): string {
    return value.toFixed(decimals);
  }

  toPrecision(value: number, precision: number): string {
    return value.toPrecision(precision);
  }

  toString(value: number): string {
    return String(value);
  }

  abs(value: number): number {
    return Math.abs(value);
  }

  pow(base: number, exponent: number): number {
    return Math.pow(base, exponent);
  }

  sqrt(value: number): number {
    return Math.sqrt(value);
  }

  log(value: number): number {
    return Math.log(value);
  }

  log10(value: number): number {
    return Math.log10(value);
  }
}