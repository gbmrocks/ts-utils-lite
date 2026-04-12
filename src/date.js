"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateUtils = void 0;
class DateUtils {
    format(date, formatStr) {
        const d = new Date(date);
        const pad = (n) => n.toString().padStart(2, '0');
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
    relative(date) {
        const now = Date.now();
        const diff = now - new Date(date).getTime();
        const seconds = Math.floor(diff / 1000);
        if (seconds < 60)
            return `${seconds} seconds ago`;
        const minutes = Math.floor(seconds / 60);
        if (minutes < 60)
            return `${minutes} minutes ago`;
        const hours = Math.floor(minutes / 60);
        if (hours < 24)
            return `${hours} hours ago`;
        const days = Math.floor(hours / 24);
        if (days < 30)
            return `${days} days ago`;
        const months = Math.floor(days / 30);
        if (months < 12)
            return `${months} months ago`;
        return `${Math.floor(days / 365)} years ago`;
    }
    isToday(date) {
        const d = new Date(date);
        const today = new Date();
        return d.getDate() === today.getDate() && d.getMonth() === today.getMonth() && d.getFullYear() === today.getFullYear();
    }
    add(date, amount, unit) {
        const d = new Date(date);
        if (unit === 'day')
            d.setDate(d.getDate() + amount);
        else if (unit === 'month')
            d.setMonth(d.getMonth() + amount);
        else
            d.setFullYear(d.getFullYear() + amount);
        return d;
    }
    diff(d1, d2) {
        return Math.floor((new Date(d1).getTime() - new Date(d2).getTime()) / (1000 * 60 * 60 * 24));
    }
    startOf(date, unit) {
        const d = new Date(date);
        if (unit === 'day')
            d.setHours(0, 0, 0, 0);
        else if (unit === 'month')
            d.setDate(1);
        else
            d.setMonth(0, 1);
        return d;
    }
    endOf(date, unit) {
        const d = this.startOf(date, unit);
        if (unit === 'day')
            d.setHours(23, 59, 59, 999);
        else if (unit === 'month')
            d.setMonth(d.getMonth() + 1, 0);
        else
            d.setFullYear(d.getFullYear() + 1, 0, 0);
        return d;
    }
    isBefore(d1, d2) { return new Date(d1).getTime() < new Date(d2).getTime(); }
    isAfter(d1, d2) { return new Date(d1).getTime() > new Date(d2).getTime(); }
    isSame(d1, d2) { return this.isBefore(d1, d2) === false && this.isAfter(d1, d2) === false; }
    parse(dateStr) {
        const d = new Date(dateStr);
        return isNaN(d.getTime()) ? null : d;
    }
    now() { return Date.now(); }
    timestamp() { return Date.now(); }
}
exports.DateUtils = DateUtils;
