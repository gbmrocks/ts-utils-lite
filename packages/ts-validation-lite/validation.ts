export class ValidationUtils {
  private readonly emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  private readonly urlRegex = /^(https?:\/\/)?(([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$//i;
  private readonly phoneRegex = /^\+?[\d\s\-()]{10,}$/;
  private readonly postalCodeRegex = /^\d{5}(-\d{4})?$/;

  isEmail(value: string): boolean {
    return this.emailRegex.test(value);
  }

  isUrl(value: string): boolean {
    return this.urlRegex.test(value);
  }

  isPhone(value: string): boolean {
    return this.phoneRegex.test(value);
  }

  isPostalCode(value: string): boolean {
    // US postal code format (XXXXX or XXXXX-XXXX)
    return this.postalCodeRegex.test(value);
  }

  isStrongPassword(password: string): { valid: boolean; score: number; issues: string[] } {
    const issues: string[] = [];
    let score = 0;

    if (password.length >= 8) score++; else issues.push('Min 8 characters');
    if (/[a-z]/.test(password)) score++; else issues.push('Lowercase letter');
    if (/[A-Z]/.test(password)) score++; else issues.push('Uppercase letter');
    if (/[0-9]/.test(password)) score++; else issues.push('Number');
    if (/[^a-zA-Z0-9]/.test(password)) score++; else issues.push('Special character');

    return { valid: score >= 4, score, issues };
  }

  isNumeric(value: string): boolean {
    return /^\d+$/.test(value);
  }

  isAlpha(value: string): boolean {
    return /^[a-zA-Z]+$/.test(value);
  }

  isAlphanumeric(value: string): boolean {
    return /^[a-zA-Z0-9]+$/.test(value);
  }

  isDate(value: string): boolean {
    const date = new Date(value);
    return date instanceof Date && !isNaN(date.getTime());
  }

  isJSON(value: string): boolean {
    try { JSON.parse(value); return true; } catch { return false; }
  }

  isCreditCard(value: string): boolean {
    const cleaned = value.replace(/\s/g, '');
    if (!/^\d{13,19}$/.test(cleaned)) return false;
    let sum = 0;
    let isEven = false;
    for (let i = cleaned.length - 1; i >= 0; i--) {
      let digit = parseInt(cleaned[i]);
      if (isEven) { digit *= 2; if (digit > 9) digit -= 9; }
      sum += digit;
      isEven = !isEven;
    }
    return sum % 10 === 0;
  }
}
