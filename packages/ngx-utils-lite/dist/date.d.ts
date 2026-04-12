export declare class DateUtils {
    format(date: Date, formatStr: string): string;
    relative(date: Date): string;
    isToday(date: Date): boolean;
    add(date: Date, amount: number, unit: 'day' | 'month' | 'year'): Date;
    diff(d1: Date, d2: Date): number;
    startOf(date: Date, unit: 'day' | 'month' | 'year'): Date;
    endOf(date: Date, unit: 'day' | 'month' | 'year'): Date;
    isBefore(d1: Date, d2: Date): boolean;
    isAfter(d1: Date, d2: Date): boolean;
    isSame(d1: Date, d2: Date): boolean;
    parse(dateStr: string): Date | null;
    now(): number;
    timestamp(): number;
}
