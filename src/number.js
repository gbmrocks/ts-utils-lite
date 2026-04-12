"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberUtils = void 0;
class NumberUtils {
    formatCurrency(value, currency = 'USD', locale = 'en-US') {
        return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value);
    }
    formatBytes(bytes, decimals = 2) {
        if (bytes === 0)
            return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + ' ' + sizes[i];
    }
    formatPercent(value, decimals = 2) {
        return (value * 100).toFixed(decimals) + '%';
    }
    clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }
    round(value, decimals = 0) {
        const factor = Math.pow(10, decimals);
        return Math.round(value * factor) / factor;
    }
    randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    randomFloat(min, max) {
        return Math.random() * (max - min) + min;
    }
    isEven(n) { return n % 2 === 0; }
    isOdd(n) { return n % 2 !== 0; }
    isPositive(n) { return n > 0; }
    isNegative(n) { return n < 0; }
    isInteger(n) { return Number.isInteger(n); }
    isNaN(n) { return Number.isNaN(n); }
    isFinite(n) { return Number.isFinite(n); }
    abs(n) { return Math.abs(n); }
    floor(n) { return Math.floor(n); }
    ceil(n) { return Math.ceil(n); }
    sqrt(n) { return Math.sqrt(n); }
    pow(n, exp) { return Math.pow(n, exp); }
    sum(...nums) { return nums.reduce((a, b) => a + b, 0); }
    avg(...nums) { return nums.length ? this.sum(...nums) / nums.length : 0; }
    min(...nums) { return Math.min(...nums); }
    max(...nums) { return Math.max(...nums); }
    range(start, end, step = 1) {
        const result = [];
        for (let i = start; i < end; i += step)
            result.push(i);
        return result;
    }
}
exports.NumberUtils = NumberUtils;
