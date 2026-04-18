export class StorageUtils {
  set<T>(key: string, value: T, storage: Storage = localStorage): void {
    try {
      const serializedValue = JSON.stringify(value);
      storage.setItem(key, serializedValue);
    } catch (e) {
      console.error('Error saving to storage', e);
    }
  }

  get<T>(key: string, defaultValue: T | null = null, storage: Storage = localStorage): T | null {
    try {
      const item = storage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (e) {
      console.error('Error reading from storage', e);
      return defaultValue;
    }
  }

  has(key: string, storage: Storage = localStorage): boolean {
    return storage.getItem(key) !== null;
  }

  remove(key: string, storage: Storage = localStorage): void {
    storage.removeItem(key);
  }

  clear(storage: Storage = localStorage): void {
    storage.clear();
  }
}
