"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectUtils = void 0;
class ObjectUtils {
    deepGet(obj, path, defaultValue) {
        if (!obj || !path)
            return defaultValue;
        const keys = path.split('.');
        let result = obj;
        for (const key of keys) {
            if (result === null || result === undefined)
                return defaultValue;
            result = result[key];
        }
        return result ?? defaultValue;
    }
    deepSet(obj, path, value) {
        const keys = path.split('.');
        let current = obj;
        for (let i = 0; i < keys.length - 1; i++) {
            if (!(keys[i] in current) || current[keys[i]] === null)
                current[keys[i]] = {};
            current = current[keys[i]];
        }
        current[keys[keys.length - 1]] = value;
    }
    deepClone(obj) {
        if (obj === null || typeof obj !== 'object')
            return obj;
        if (obj instanceof Date)
            return new Date(obj.getTime());
        if (Array.isArray(obj))
            return obj.map(item => this.deepClone(item));
        const cloned = {};
        for (const key in obj)
            cloned[key] = this.deepClone(obj[key]);
        return cloned;
    }
    merge(target, ...sources) {
        for (const source of sources) {
            if (!source)
                continue;
            for (const key of Object.keys(source)) {
                const tv = target[key], sv = source[key];
                if (tv && typeof tv === 'object' && sv && typeof sv === 'object' && !Array.isArray(tv) && !Array.isArray(sv)) {
                    target[key] = this.merge(tv, sv);
                }
                else {
                    target[key] = sv;
                }
            }
        }
        return target;
    }
    omit(obj, keys) {
        const result = { ...obj };
        keys.forEach(k => delete result[k]);
        return result;
    }
    pick(obj, keys) {
        const result = {};
        keys.forEach(k => { if (k in obj)
            result[k] = obj[k]; });
        return result;
    }
    isEmpty(value) {
        if (value === null || value === undefined)
            return true;
        if (typeof value === 'string')
            return value.trim().length === 0;
        if (Array.isArray(value))
            return value.length === 0;
        if (typeof value === 'object')
            return Object.keys(value).length === 0;
        return false;
    }
    isEqual(a, b) {
        if (a === b)
            return true;
        if (!a || !b || typeof a !== 'object' || typeof b !== 'object')
            return false;
        const ak = Object.keys(a), bk = Object.keys(b);
        return ak.length === bk.length && ak.every(k => this.isEqual(a[k], b[k]));
    }
    keys(obj) { return Object.keys(obj); }
    values(obj) { return Object.values(obj); }
    entries(obj) { return Object.entries(obj); }
    has(obj, path) { return this.deepGet(obj, path) !== undefined; }
    size(obj) { return Object.keys(obj).length; }
    mapValues(obj, fn) {
        const result = {};
        for (const k of Object.keys(obj))
            result[k] = fn(obj[k], k);
        return result;
    }
    invert(obj) {
        const result = {};
        for (const k of Object.keys(obj))
            result[obj[k]] = k;
        return result;
    }
    clone(obj) { return this.deepClone(obj); }
}
exports.ObjectUtils = ObjectUtils;
