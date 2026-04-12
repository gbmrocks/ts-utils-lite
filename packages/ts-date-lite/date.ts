export class DateUtils {
  format(date: Date, formatStr: string): string {
    const d = new Date(date);
    const pad = (n: number) => n.toString().padStart(2, '0');
    const year = d.getFullYear();
    const month = pad(d.getMonth() + 1);
    const day = pad(d.getDate());
    const hours = pad(d.getHours());
    const minutes = pad(d.getMinutes());
    const seconds = pad(d.getSeconds());
    return formatStr
      .replace('YYYY', String(year))
      .replace('MM', month)
      .replace('DD', day)
      .replace('HH', hours)
      .replace('mm', minutes)
      .replace('ss', seconds);
  }

  relative(date: Date): string {
    const now = Date.now();
    const diff = now - new Date(date).getTime();
    const seconds = Math.floor(diff / 1000);
    if (seconds < 60) return `${seconds} seconds ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minutes ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hours ago`;
    const days = Math.floor(hours / 24);
    if (days < 30) return `${days} days ago`;
    const months = Math.floor(days / 30);
    if (months < 12) return `${months} months ago`;
    return `${Math.floor(days / 365)} years ago`;
  }

  isToday(date: Date): boolean {
    const d = new Date(date);
    const today = new Date();
    return d.getDate() === today.getDate() && d.getMonth() === today.getMonth() && d.getFullYear() === today.getFullYear();
  }

  add(date: Date, amount: number, unit: 'day' | 'month' | 'year'): Date {
    const d = new Date(date);
    if (unit === 'day') d.setDate(d.getDate() + amount);
    else if (unit === 'month') d.setMonth(d.getMonth() + amount);
    else d.setFullYear(d.getFullYear() + amount);
    return d;
  }

  diff(d1: Date, d2: Date): number {
    return Math.floor((new Date(d1).getTime() - new Date(d2).getTime()) / (1000 * 60 * 60 * 24));
  }

  startOf(date: Date, unit: 'day' | 'month' | 'year'): Date {
    const d = new Date(date);
    if (unit === 'day') d.setHours(0, 0, 0, 0);
    else if (unit === 'month') d.setDate(1);
    else d.setMonth(0, 1);
    return d;
  }

  endOf(date: Date, unit: 'day' | 'month' | 'year'): Date {
    const d = this.startOf(date, unit);
    if (unit === 'day') d.setHours(23, 59, 59, 999);
    else if (unit === 'month') d.setMonth(d.getMonth() + 1, 0);
    else d.setFullYear(d.getFullYear() + 1, 0, 0);
    return d;
  }

  isBefore(d1: Date, d2: Date): boolean { return new Date(d1).getTime() < new Date(d2).getTime(); }
  isAfter(d1: Date, d2: Date): boolean { return new Date(d1).getTime() > new Date(d2).getTime(); }
  isSame(d1: Date, d2: Date): boolean { return this.isBefore(d1, d2) === false && this.isAfter(d1, d2) === false; }

  parse(dateStr: string): Date | null {
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? null : d;
  }

  now(): number { return Date.now(); }
  timestamp(): number { return Date.now(); }
}