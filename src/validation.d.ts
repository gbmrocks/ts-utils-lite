export declare class ValidationUtils {
    private readonly emailRegex;
    private readonly urlRegex;
    private readonly phoneRegex;
    private readonly postalCodeRegex;
    isEmail(value: string): boolean;
    isUrl(value: string): boolean;
    isPhone(value: string): boolean;
    isPostalCode(value: string): boolean;
    isStrongPassword(password: string): {
        valid: boolean;
        score: number;
        issues: string[];
    };
    isNumeric(value: string): boolean;
    isAlpha(value: string): boolean;
    isAlphanumeric(value: string): boolean;
    isDate(value: string): boolean;
    isJSON(value: string): boolean;
    isCreditCard(value: string): boolean;
}
