import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgxValidationUtils {
  isEmail(value: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  }

  isUrl(value: string): boolean {
    try {
      new URL(value);
      return true;
    } catch {
      return false;
    }
  }

  isPhone(value: string, countryCode: string = 'US'): boolean {
    const cleaned = value.replace(/\D/g, '');
    switch (countryCode) {
      case 'US': return cleaned.length === 10 || cleaned.length === 11;
      case 'UK': return cleaned.length === 10 || cleaned.length === 11;
      case 'IN': return cleaned.length === 10;
      default: return cleaned.length >= 7 && cleaned.length <= 15;
    }
  }

  isPostalCode(value: string, countryCode: string = 'US'): boolean {
    const patterns: Record<string, RegExp> = {
      US: /^\d{5}(-\d{4})?$/,
      UK: /^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/i,
      CA: /^[A-Z]\d[A-Z]\s?\d[A-Z]\d$/i,
      IN: /^\d{6}$/,
      AU: /^\d{4}$/,
      DE: /^\d{5}$/,
      FR: /^\d{5}$/
    };
    return (patterns[countryCode] || /^\d+$/).test(value);
  }

  isIP(value: string): boolean {
    const ipv4 = /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/;
    const ipv6 = /^(?:[0-9a-f]{1,4}:){7}[0-9a-f]{1,4}$/i;
    return ipv4.test(value) || ipv6.test(value);
  }

  isHexColor(value: string): boolean {
    return /^#?([0-9A-F]{3}){1,2}$/i.test(value);
  }

  isCreditCard(value: string): boolean {
    const cleaned = value.replace(/\s/g, '');
    if (!/^\d{13,19}$/.test(cleaned)) return false;
    
    let sum = 0;
    let isEven = false;
    for (let i = cleaned.length - 1; i >= 0; i--) {
      let digit = parseInt(cleaned[i], 10);
      if (isEven) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }
      sum += digit;
      isEven = !isEven;
    }
    return sum % 10 === 0;
  }

  isStrongPassword(value: string): { valid: boolean; score: number; messages: string[] } {
    const messages: string[] = [];
    let score = 0;

    if (value.length >= 8) score++; else messages.push('At least 8 characters');
    if (/[a-z]/.test(value)) score++; else messages.push('Lowercase letter');
    if (/[A-Z]/.test(value)) score++; else messages.push('Uppercase letter');
    if (/[0-9]/.test(value)) score++; else messages.push('Number');
    if (/[^a-zA-Z0-9]/.test(value)) score++; else messages.push('Special character');

    return { valid: score >= 4, score, messages };
  }

  isUUID(value: string): boolean {
    return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
  }

  isJSON(value: string): boolean {
    try {
      JSON.parse(value);
      return true;
    } catch {
      return false;
    }
  }

  isDate(value: string): boolean {
    const date = new Date(value);
    return date instanceof Date && !isNaN(date.getTime());
  }

  isAlpha(value: string): boolean {
    return /^[a-zA-Z]+$/.test(value);
  }

  isAlphanumeric(value: string): boolean {
    return /^[a-zA-Z0-9]+$/.test(value);
  }

  isNumeric(value: string): boolean {
    return /^\d+$/.test(value);
  }

  isEmpty(value: unknown): boolean {
    if (value === null || value === undefined) return true;
    if (typeof value === 'string') return value.trim().length === 0;
    if (Array.isArray(value)) return value.length === 0;
    if (typeof value === 'object') return Object.keys(value).length === 0;
    return false;
  }

  isRequired(value: unknown): boolean {
    return !this.isEmpty(value);
  }

  isMinLength(value: string, min: number): boolean {
    return value.length >= min;
  }

  isMaxLength(value: string, max: number): boolean {
    return value.length <= max;
  }

  isMin(value: number, min: number): boolean {
    return value >= min;
  }

  isMax(value: number, max: number): boolean {
    return value <= max;
  }

  isBetween(value: number, min: number, max: number): boolean {
    return value >= min && value <= max;
  }

  isPattern(value: string, pattern: RegExp): boolean {
    return pattern.test(value);
  }

  isMatches(value: string, pattern: string): boolean {
    return new RegExp(pattern).test(value);
  }

  isIn(value: unknown, array: unknown[]): boolean {
    return array.includes(value);
  }

  isOneOf(value: string, options: string[]): boolean {
    return options.includes(value);
  }

  isBase64(value: string): boolean {
    try {
      return btoa(atob(value)) === value;
    } catch {
      return /^[A-Za-z0-9+/]*={0,2}$/.test(value);
    }
  }

  isMIMEType(value: string): boolean {
    return /^[a-z]+\/[a-z0-9\-\+\.]+$/i.test(value);
  }

  isDomain(value: string): boolean {
    return /^[a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?(\.[a-zA-Z]{2,})+$/.test(value);
  }

  isUsername(value: string): boolean {
    return /^[a-zA-Z0-9_-]{3,20}$/.test(value);
  }

  isPassword(value: string): boolean {
    return value.length >= 6;
  }
}