export declare class IdUtils {
    private readonly base36Chars;
    uuid(): string;
    nanoid(size?: number): string;
    shortId(length?: number): string;
    snowflake(): string;
    hash(input: string): string;
    generateCode(length?: number, charset?: 'numeric' | 'alpha' | 'alphanumeric'): string;
    generateToken(length?: number): string;
}
