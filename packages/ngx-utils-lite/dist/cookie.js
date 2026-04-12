"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CookieUtils = void 0;
class CookieUtils {
    set(key, value, days = 7, path = '/') {
        const expires = new Date(Date.now() + days * 864e5).toUTCString();
        document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)};expires=${expires};path=${path}`;
    }
    get(key) {
        const cookies = document.cookie.split(';');
        for (const cookie of cookies) {
            const [cookieKey, ...valParts] = cookie.trim().split('=');
            if (decodeURIComponent(cookieKey) === key) {
                return decodeURIComponent(valParts.join('='));
            }
        }
        return null;
    }
    has(key) {
        return this.get(key) !== null;
    }
    delete(key, path = '/') {
        document.cookie = `${encodeURIComponent(key)}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=${path}`;
    }
    clear() {
        const cookies = document.cookie.split(';');
        for (const cookie of cookies) {
            const key = cookie.trim().split('=')[0];
            this.delete(decodeURIComponent(key));
        }
    }
    all() {
        const result = {};
        const cookies = document.cookie.split(';');
        for (const cookie of cookies) {
            const [cookieKey, ...valParts] = cookie.trim().split('=');
            const key = decodeURIComponent(cookieKey);
            const value = decodeURIComponent(valParts.join('='));
            result[key] = value;
        }
        return result;
    }
}
exports.CookieUtils = CookieUtils;
