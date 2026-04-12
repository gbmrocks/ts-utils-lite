export class CookieUtils {
  set(key: string, value: string, days: number = 7, path: string = '/'): void {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)};expires=${expires};path=${path}`;
  }

  get(key: string): string | null {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const [cookieKey, ...valParts] = cookie.trim().split('=');
      if (decodeURIComponent(cookieKey) === key) {
        return decodeURIComponent(valParts.join('='));
      }
    }
    return null;
  }

  has(key: string): boolean {
    return this.get(key) !== null;
  }

  delete(key: string, path: string = '/'): void {
    document.cookie = `${encodeURIComponent(key)}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=${path}`;
  }

  clear(): void {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const key = cookie.trim().split('=')[0];
      this.delete(decodeURIComponent(key));
    }
  }

  all(): Record<string, string> {
    const result: Record<string, string> = {};
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