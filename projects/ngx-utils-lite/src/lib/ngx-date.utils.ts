import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgxDateUtils {
  now(): Date {
    return new Date();
  }

  timestamp(): number {
    return Date.now();
  }

  format(date: Date | number | string, format: string = 'YYYY-MM-DD'): string {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const hour = String(d.getHours()).padStart(2, '0');
    const minute = String(d.getMinutes()).padStart(2, '0');
    const second = String(d.getSeconds()).padStart(2, '0');

    return format
      .replace('YYYY', String(year))
      .replace('MM', month)
      .replace('DD', day)
      .replace('HH', hour)
      .replace('mm', minute)
      .replace('ss', second);
  }

  relative(date: Date | number | string): string {
    const now = Date.now();
    const then = new Date(date).getTime();
    const diff = now - then;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (seconds < 60) return 'just now';
    if (minutes < 60) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    if (days < 7) return `${days} day${days > 1 ? 's' : ''} ago`;
    if (weeks < 4) return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
    if (months < 12) return `${months} month${months > 1 ? 's' : ''} ago`;
    return `${years} year${years > 1 ? 's' : ''} ago`;
  }

  isToday(date: Date | number | string): boolean {
    const d = new Date(date);
    const today = new Date();
    return d.getDate() === today.getDate() &&
           d.getMonth() === today.getMonth() &&
           d.getFullYear() === today.getFullYear();
  }

  isYesterday(date: Date | number | string): boolean {
    const d = new Date(date);
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return d.getDate() === yesterday.getDate() &&
           d.getMonth() === yesterday.getMonth() &&
           d.getFullYear() === yesterday.getFullYear();
  }

  isTomorrow(date: Date | number | string): boolean {
    const d = new Date(date);
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return d.getDate() === tomorrow.getDate() &&
           d.getMonth() === tomorrow.getMonth() &&
           d.getFullYear() === tomorrow.getFullYear();
  }

  isSame(date1: Date | number, date2: Date | number, unit: 'year' | 'month' | 'day' | 'hour' = 'day'): boolean {
    const d1 = new Date(date1);
    const d2 = new Date(date2);

    switch (unit) {
      case 'year': return d1.getFullYear() === d2.getFullYear();
      case 'month': return d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth();
      case 'day': return this.isSameDay(d1, d2);
      case 'hour': return d1.getTime() - d1.getTime() % 3600000 === d2.getTime() - d2.getTime() % 3600000;
      default: return false;
    }
  }

  private isSameDay(d1: Date, d2: Date): boolean {
    return d1.getFullYear() === d2.getFullYear() &&
           d1.getMonth() === d2.getMonth() &&
           d1.getDate() === d2.getDate();
  }

  startOf(date: Date, unit: 'year' | 'month' | 'week' | 'day'): Date {
    const d = new Date(date);
    switch (unit) {
      case 'year': return new Date(d.getFullYear(), 0, 1);
      case 'month': return new Date(d.getFullYear(), d.getMonth(), 1);
      case 'week': return new Date(d.getFullYear(), d.getMonth(), d.getDate() - d.getDay());
      case 'day': return new Date(d.getFullYear(), d.getMonth(), d.getDate());
      default: return d;
    }
  }

  endOf(date: Date, unit: 'year' | 'month' | 'week' | 'day'): Date {
    const d = new Date(date);
    switch (unit) {
      case 'year': return new Date(d.getFullYear(), 11, 31);
      case 'month': return new Date(d.getFullYear(), d.getMonth() + 1, 0);
      case 'week': return new Date(d.getFullYear(), d.getMonth(), d.getDate() + (6 - d.getDay()));
      case 'day': return new Date(d.getFullYear(), d.getMonth(), d.getDate(), 23, 59, 59, 999);
      default: return d;
    }
  }

  add(date: Date, amount: number, unit: 'year' | 'month' | 'week' | 'day' | 'hour' | 'minute' | 'second'): Date {
    const d = new Date(date);
    switch (unit) {
      case 'year': d.setFullYear(d.getFullYear() + amount); break;
      case 'month': d.setMonth(d.getMonth() + amount); break;
      case 'week': d.setDate(d.getDate() + amount * 7); break;
      case 'day': d.setDate(d.getDate() + amount); break;
      case 'hour': d.setHours(d.getHours() + amount); break;
      case 'minute': d.setMinutes(d.getMinutes() + amount); break;
      case 'second': d.setSeconds(d.getSeconds() + amount); break;
    }
    return d;
  }

  diff(date1: Date, date2: Date, unit: 'year' | 'month' | 'week' | 'day' | 'hour' | 'minute' | 'second' = 'day'): number {
    const ms = Math.abs(new Date(date1).getTime() - new Date(date2).getTime());
    const multipliers: Record<string, number> = {
      second: 1000,
      minute: 60000,
      hour: 3600000,
      day: 86400000,
      week: 604800000,
      month: 2592000000,
      year: 31536000000
    };
    return Math.floor(ms / (multipliers[unit] || 86400000));
  }

  startOfDay(date: Date = new Date()): Date {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }

  endOfDay(date: Date = new Date()): Date {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 999);
  }

  daysInMonth(date: Date = new Date()): number {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  }

  isValid(date: Date | number | string): boolean {
    const d = new Date(date);
    return d instanceof Date && !isNaN(d.getTime());
  }

  parseISO(dateString: string): Date | null {
    const d = new Date(dateString);
    return this.isValid(d) ? d : null;
  }
}