"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayUtils = void 0;
class ArrayUtils {
    unique(arr) {
        return [...new Set(arr)];
    }
    chunk(arr, size) {
        const chunks = [];
        for (let i = 0; i < arr.length; i += size) {
            chunks.push(arr.slice(i, i + size));
        }
        return chunks;
    }
    groupBy(arr, key) {
        return arr.reduce((groups, item) => {
            const groupKey = typeof key === 'function' ? key(item) : String(item[key]);
            (groups[groupKey] = groups[groupKey] || []).push(item);
            return groups;
        }, {});
    }
    sortBy(arr, key, order = 'asc') {
        return [...arr].sort((a, b) => {
            const aVal = a[key], bVal = b[key];
            if (aVal < bVal)
                return order === 'asc' ? -1 : 1;
            if (aVal > bVal)
                return order === 'asc' ? 1 : -1;
            return 0;
        });
    }
    shuffle(arr) {
        const result = [...arr];
        for (let i = result.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [result[i], result[j]] = [result[j], result[i]];
        }
        return result;
    }
    sample(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
    intersection(a, b) {
        return a.filter(x => b.includes(x));
    }
    difference(a, b) {
        return a.filter(x => !b.includes(x));
    }
    compact(arr) {
        return arr.filter(Boolean);
    }
    flatten(arr) {
        return arr.reduce((flat, item) => flat.concat(Array.isArray(item) ? item : item), []);
    }
    flattenDeep(arr) {
        return arr.reduce((flat, item) => flat.concat(Array.isArray(item) ? this.flattenDeep(item) : item), []);
    }
    partition(arr, predicate) {
        const pass = [], fail = [];
        arr.forEach(item => (predicate(item) ? pass : fail).push(item));
        return [pass, fail];
    }
    pluck(arr, key) {
        return arr.map(item => item[key]);
    }
    first(arr) { return arr[0]; }
    last(arr) { return arr[arr.length - 1]; }
    drop(arr, n = 1) { return arr.slice(n); }
    take(arr, n = 1) { return arr.slice(0, n); }
    sum(arr) { return arr.reduce((a, b) => a + b, 0); }
    average(arr) { return arr.length ? this.sum(arr) / arr.length : 0; }
    min(arr) { return arr.length ? Math.min(...arr) : undefined; }
    max(arr) { return arr.length ? Math.max(...arr) : undefined; }
    range(start, end, step = 1) {
        const result = [];
        for (let i = start; i < end; i += step)
            result.push(i);
        return result;
    }
    zip(...arrays) {
        const maxLen = Math.max(...arrays.map(a => a.length));
        return Array(maxLen).fill(0).map((_, i) => arrays.map(a => a[i]));
    }
    uniqBy(arr, key) {
        const seen = new Set();
        return arr.filter(item => { const v = item[key]; if (seen.has(v))
            return false; seen.add(v); return true; });
    }
}
exports.ArrayUtils = ArrayUtils;
