"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdUtils = void 0;
class IdUtils {
    constructor() {
        this.base36Chars = '0123456789abcdefghijklmnopqrstuvwxyz';
    }
    uuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    nanoid(size = 21) {
        const bytes = new Uint8Array(size);
        crypto.getRandomValues(bytes);
        return Array.from(bytes, b => this.base36Chars[b & 63]).join('');
    }
    shortId(length = 10) {
        return this.nanoid(length).replace(/[_=-]/g, '');
    }
    snowflake() {
        const timestamp = BigInt(Date.now() - 1700000000000);
        const machineId = BigInt(Math.floor(Math.random() * 1024));
        const sequence = BigInt(Math.floor(Math.random() * 4096));
        const id = (timestamp << 22n) | (machineId << 12n) | sequence;
        return id.toString();
    }
    hash(input) {
        let hash = 0;
        for (let i = 0; i < input.length; i++) {
            const char = input.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return Math.abs(hash).toString(36);
    }
    generateCode(length = 6, charset = 'numeric') {
        const charsets = {
            numeric: '0123456789',
            alpha: 'abcdefghijklmnopqrstuvwxyz',
            alphanumeric: '0123456789abcdefghijklmnopqrstuvwxyz'
        };
        const chars = charsets[charset];
        return Array(length).fill(0).map(() => chars[Math.floor(Math.random() * chars.length)]).join('');
    }
    generateToken(length = 32) {
        const bytes = new Uint8Array(length);
        crypto.getRandomValues(bytes);
        return Array.from(bytes, b => b.toString(16).padStart(2, '0')).join('');
    }
}
exports.IdUtils = IdUtils;
