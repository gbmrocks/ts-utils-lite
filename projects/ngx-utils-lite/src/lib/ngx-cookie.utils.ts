import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgxCookieUtils {
  private getCookies(): Record<string, string> {
    return document.cookie
      .split(';')
      .reduce((cookies, cookie) => {
        const [key, ...valueParts] = cookie.trim().split('=');
        if (key) {
          cookies[key] = valueParts.join('=');
        }
        return cookies;
      }, {} as Record<string, string>);
  }

  get(name: string): string | null {
    const cookies = this.getCookies();
    return cookies[name] || null;
  }

  set(
    name: string, 
    value: string, 
    days: number = 365, 
    path: string = '/', 
    domain?: string,
    secure: boolean = false,
    sameSite: 'Strict' | 'Lax' | 'None' = 'Lax'
  ): void {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    
    let cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=${path}`;
    
    if (domain) {
      cookie += `;domain=${domain}`;
    }
    if (secure) {
      cookie += ';secure';
    }
    cookie += `;SameSite=${sameSite}`;
    
    document.cookie = cookie;
  }

  delete(name: string, path: string = '/', domain?: string): void {
    const expires = new Date(0);
    let cookie = `${name}=;expires=${expires.toUTCString()};path=${path}`;
    if (domain) {
      cookie += `;domain=${domain}`;
    }
    document.cookie = cookie;
  }

  deleteAll(path: string = '/', domain?: string): void {
    const cookies = this.getCookies();
    for (const name of Object.keys(cookies)) {
      this.delete(name, path, domain);
    }
  }

  has(name: string): boolean {
    return name in this.getCookies();
  }

  list(): Record<string, string> {
    return this.getCookies();
  }

  getAll(): Array<{ name: string; value: string }> {
    const cookies = this.getCookies();
    return Object.entries(cookies).map(([name, value]) => ({ name, value }));
  }
}