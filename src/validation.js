"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationUtils = void 0;
class ValidationUtils {
    constructor() {
        this.emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        this.urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
        this.phoneRegex = /^\+?[\d\s\-()]{10,}$/;
        this.postalCodeRegex = /^\d{5}(-\d{4})?$/;
    }
    isEmail(value) {
        return this.emailRegex.test(value);
    }
    isUrl(value) {
        return this.urlRegex.test(value);
    }
    isPhone(value) {
        return this.phoneRegex.test(value);
    }
    isPostalCode(value) {
        return this.postalCodeRegex.test(value);
    }
    isStrongPassword(password) {
        const issues = [];
        let score = 0;
        if (password.length >= 8)
            score++;
        else
            issues.push('Min 8 characters');
        if (/[a-z]/.test(password))
            score++;
        else
            issues.push('Lowercase letter');
        if (/[A-Z]/.test(password))
            score++;
        else
            issues.push('Uppercase letter');
        if (/[0-9]/.test(password))
            score++;
        else
            issues.push('Number');
        if (/[^a-zA-Z0-9]/.test(password))
            score++;
        else
            issues.push('Special character');
        return { valid: score >= 4, score, issues };
    }
    isNumeric(value) {
        return /^\d+$/.test(value);
    }
    isAlpha(value) {
        return /^[a-zA-Z]+$/.test(value);
    }
    isAlphanumeric(value) {
        return /^[a-zA-Z0-9]+$/.test(value);
    }
    isDate(value) {
        return !isNaN(Date.parse(value));
    }
    isJSON(value) {
        try {
            JSON.parse(value);
            return true;
        }
        catch {
            return false;
        }
    }
    isCreditCard(value) {
        const cleaned = value.replace(/\s/g, '');
        if (!/^\d{13,19}$/.test(cleaned))
            return false;
        let sum = 0;
        let isEven = false;
        for (let i = cleaned.length - 1; i >= 0; i--) {
            let digit = parseInt(cleaned[i]);
            if (isEven) {
                digit *= 2;
                if (digit > 9)
                    digit -= 9;
            }
            sum += digit;
            isEven = !isEven;
        }
        return sum % 10 === 0;
    }
}
exports.ValidationUtils = ValidationUtils;
