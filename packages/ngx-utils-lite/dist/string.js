"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringUtils = void 0;
class StringUtils {
    constructor() {
        this._html_escape_map = {
            '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
        };
    }
    slugify(input_text) {
        if (!input_text)
            return '';
        return input_text.toLowerCase().trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '');
    }
    truncate(input_text, max_length, suffix = '...') {
        if (!input_text || input_text.length <= max_length)
            return input_text;
        return input_text.slice(0, max_length - suffix.length) + suffix;
    }
    capitalize(input_text) {
        if (!input_text)
            return '';
        return input_text.charAt(0).toUpperCase() + input_text.slice(1).toLowerCase();
    }
    titleCase(input_text) {
        if (!input_text)
            return '';
        return input_text.replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    }
    camelCase(input_text) {
        if (!input_text)
            return '';
        return input_text.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => index === 0 ? word.toLowerCase() : word.toUpperCase()).replace(/[\s_-]+/g, '');
    }
    kebabCase(input_text) {
        if (!input_text)
            return '';
        return input_text.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/[\s_]+/g, '-').toLowerCase();
    }
    snakeCase(input_text) {
        if (!input_text)
            return '';
        return input_text.replace(/([a-z])([A-Z])/g, '$1_$2').replace(/[\s-]+/g, '_').toLowerCase();
    }
    pascalCase(input_text) {
        if (!input_text)
            return '';
        return input_text.replace(/(?:^\w|[A-Z]|\b\w)/g, (word) => word.toUpperCase()).replace(/[\s_-]+/g, '');
    }
    escapeHtml(input_text) {
        if (!input_text)
            return '';
        return input_text.replace(/[&<>"']/g, (m) => this._html_escape_map[m] || m);
    }
    unescapeHtml(input_text) {
        if (!input_text)
            return '';
        return input_text.replace(/&(amp|lt|gt|quot|#39);/g, (m) => this._html_escape_map[m] || m);
    }
    repeat(input_text, times) {
        return input_text.repeat(Math.max(0, times));
    }
    reverse(input_text) {
        return input_text.split('').reverse().join('');
    }
    base64Encode(input_text) {
        return btoa(unescape(encodeURIComponent(input_text)));
    }
    base64Decode(encoded) {
        try {
            return decodeURIComponent(escape(atob(encoded)));
        }
        catch {
            return '';
        }
    }
    randomString(length) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        return Array(length).fill(0).map(() => chars[Math.floor(Math.random() * chars.length)]).join('');
    }
    trimStart(text, chars) {
        return chars ? text.replace(new RegExp(`^[${chars}]+`, 'g'), '') : text.trimStart();
    }
    trimEnd(text, chars) {
        return chars ? text.replace(new RegExp(`[${chars}]+$`, 'g'), '') : text.trimEnd();
    }
    words(text, delimiter = /\s+/) {
        return text.split(delimiter).filter(Boolean);
    }
    countWords(text) {
        return this.words(text).length;
    }
    levenshtein(a, b) {
        if (!a || !b)
            return Math.max(a?.length || 0, b?.length || 0);
        const matrix = Array(b.length + 1).fill(null).map(() => Array(a.length + 1).fill(0));
        for (let i = 0; i <= a.length; i++)
            matrix[0][i] = i;
        for (let j = 0; j <= b.length; j++)
            matrix[j][0] = j;
        for (let j = 1; j <= b.length; j++) {
            for (let i = 1; i <= a.length; i++) {
                matrix[j][i] = Math.min(matrix[j][i - 1] + 1, matrix[j - 1][i] + 1, matrix[j - 1][i - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
            }
        }
        return matrix[b.length][a.length];
    }
}
exports.StringUtils = StringUtils;
