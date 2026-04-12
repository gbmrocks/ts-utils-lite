export declare class StringUtils {
    private readonly _html_escape_map;
    slugify(input_text: string): string;
    truncate(input_text: string, max_length: number, suffix?: string): string;
    capitalize(input_text: string): string;
    titleCase(input_text: string): string;
    camelCase(input_text: string): string;
    kebabCase(input_text: string): string;
    snakeCase(input_text: string): string;
    pascalCase(input_text: string): string;
    escapeHtml(input_text: string): string;
    unescapeHtml(input_text: string): string;
    repeat(input_text: string, times: number): string;
    reverse(input_text: string): string;
    base64Encode(input_text: string): string;
    base64Decode(encoded: string): string;
    randomString(length: number): string;
    trimStart(text: string, chars?: string): string;
    trimEnd(text: string, chars?: string): string;
    words(text: string, delimiter?: RegExp): string[];
    countWords(text: string): number;
    levenshtein(a: string, b: string): number;
}
