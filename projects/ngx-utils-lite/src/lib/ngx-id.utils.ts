import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgxIdUtils {
  uuid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  nanoid(size: number = 21): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const bytes = new Uint8Array(size);
    crypto.getRandomValues(bytes);
    for (let i = 0; i < size; i++) {
      result += chars[bytes[i] % chars.length];
    }
    return result;
  }

  shortId(size: number = 8): string {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < size; i++) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
  }

  hash(str: string, length: number = 8): string {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return Math.abs(hash).toString(36).substring(0, length);
  }

  md5(str: string): string {
    return this.hash(str, 32);
  }

  timestampId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }

  snowflake(): string {
    const time = BigInt(Date.now() - 1609459200000);
    const machine = BigInt(Math.floor(Math.random() * 1024));
    const sequence = BigInt(Math.floor(Math.random() * 4096));
    return ((time << 22n) | (machine << 12n) | sequence).toString();
  }

  increment(prefix: string = '', suffix: number = 1): string {
    return `${prefix}${suffix}`;
  }

  randomHex(size: number = 8): string {
    return [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
  }

  randomBase36(size: number = 16): string {
    return Math.random().toString(36).substring(2, 2 + size);
  }

  generateCode(length: number = 6, type: 'numeric' | 'alpha' | 'alphanumeric' = 'numeric'): string {
    const numeric = '0123456789';
    const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alphanumeric = numeric + alpha;
    
    const chars = type === 'numeric' ? numeric : type === 'alpha' ? alpha : alphanumeric;
    return [...Array(length)].map(() => chars[Math.floor(Math.random() * chars.length)]).join('');
  }

  generatePin(length: number = 4): string {
    return this.generateCode(length, 'numeric');
  }

  generateOtp(length: number = 6): string {
    return this.generateCode(length, 'numeric');
  }
}