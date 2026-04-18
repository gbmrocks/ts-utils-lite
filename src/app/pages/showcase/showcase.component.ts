import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MarkdownComponent } from 'ngx-markdown';
import { StringUtils } from 'ts-string-lite';
import { DateUtils } from 'ts-date-lite';
import { ArrayUtils } from 'ts-array-lite';
import { ObjectUtils } from 'ts-object-lite';
import { NumberUtils } from 'ts-number-lite';
import { ValidationUtils } from 'ts-validation-lite';
import { IdUtils } from 'ts-id-lite';
import { CookieUtils } from 'ts-cookie-lite';
import { StorageUtils } from 'ts-storage-lite';

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [CommonModule, FormsModule, MarkdownComponent],
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent {
  private http = inject(HttpClient);

  string = new StringUtils();
  date = new DateUtils();
  array = new ArrayUtils();
  object = new ObjectUtils();
  number = new NumberUtils();
  validation = new ValidationUtils();
  id = new IdUtils();
  cookie = new CookieUtils();
  storage = new StorageUtils();

  activeTab = 'string';
  markdownPath = '';

  tabs = [
    { id: 'string', name: 'String', pkg: 'ts-string-lite' },
    { id: 'date', name: 'Date', pkg: 'ts-date-lite' },
    { id: 'array', name: 'Array', pkg: 'ts-array-lite' },
    { id: 'object', name: 'Object', pkg: 'ts-object-lite' },
    { id: 'number', name: 'Number', pkg: 'ts-number-lite' },
    { id: 'validation', name: 'Validation', pkg: 'ts-validation-lite' },
    { id: 'id', name: 'ID', pkg: 'ts-id-lite' },
    { id: 'cookie', name: 'Cookie', pkg: 'ts-cookie-lite' },
    { id: 'storage', name: 'Storage', pkg: 'ts-storage-lite' }
  ];

  stringInput = 'Hello World from ts-utils';
  stringResult = '';
  dateInput = new Date();
  dateResult = '';
  arrayInput = 'apple,banana,orange,apple,grape';
  arrayResult = '';
  objectResult = '';
  numberInput = 1234.5678;
  numberResult = '';
  validationInput = 'test@example.com';
  validationResult = '';
  idResult = '';
  cookieKey = 'theme';
  cookieValue = 'dark';
  cookieResult = '';
  storageKey = 'user_preference';
  storageValue = '{"theme": "dark", "fontSize": 14}';
  storageResult = '';

  constructor() {
    this.updateMarkdownPath();
  }

  setTab(tabId: string): void {
    this.activeTab = tabId;
    this.updateMarkdownPath();
  }

  private updateMarkdownPath(): void {
    const tab = this.tabs.find(t => t.id === this.activeTab);
    if (tab) {
      this.markdownPath = `/ts-utils-lite/assets/docs/${tab.pkg}/README.md`;
    }
  }

  runString(method: string): void {
    switch (method) {
      case 'slugify': this.stringResult = this.string.slugify(this.stringInput); break;
      case 'camelCase': this.stringResult = this.string.camelCase(this.stringInput); break;
      case 'kebabCase': this.stringResult = this.string.kebabCase(this.stringInput); break;
      case 'pascalCase': this.stringResult = this.string.pascalCase(this.stringInput); break;
      case 'truncate': this.stringResult = this.string.truncate(this.stringInput, 20); break;
      case 'capitalize': this.stringResult = this.string.capitalize(this.stringInput); break;
      case 'titleCase': this.stringResult = this.string.titleCase(this.stringInput); break;
      case 'escapeHtml': this.stringResult = this.string.escapeHtml('<div>test</div>'); break;
      case 'levenshtein': this.stringResult = String(this.string.levenshtein(this.stringInput, 'Hello World')); break;
      case 'reverse': this.stringResult = this.string.reverse(this.stringInput); break;
    }
  }

  runDate(method: string): void {
    switch (method) {
      case 'format': this.dateResult = this.date.format(this.dateInput, 'YYYY-MM-DD HH:mm:ss'); break;
      case 'relative': this.dateResult = this.date.relative(new Date(Date.now() - 3600000)); break;
      case 'isToday': this.dateResult = this.date.isToday(this.dateInput) ? 'Yes' : 'No'; break;
      case 'add': this.dateResult = this.date.add(this.dateInput, 7, 'day').toISOString(); break;
      case 'diff': this.dateResult = this.date.diff(this.dateInput, new Date()) + ' days'; break;
      case 'startOf': this.dateResult = this.date.startOf(this.dateInput, 'month').toISOString(); break;
      case 'endOf': this.dateResult = this.date.endOf(this.dateInput, 'month').toISOString(); break;
    }
  }

  runArray(method: string): void {
    const arr = this.arrayInput.split(',');
    switch (method) {
      case 'unique': this.arrayResult = JSON.stringify(this.array.unique(arr)); break;
      case 'chunk': this.arrayResult = JSON.stringify(this.array.chunk(arr, 2)); break;
      case 'groupBy': this.arrayResult = JSON.stringify(this.array.groupBy(arr, (s: string) => s[0])); break;
      case 'shuffle': this.arrayResult = JSON.stringify(this.array.shuffle(arr)); break;
      case 'compact': this.arrayResult = JSON.stringify(this.array.compact([0, '', false, null, 1, 'text', true])); break;
      case 'range': this.arrayResult = JSON.stringify(this.array.range(1, 10)); break;
      case 'sample': this.arrayResult = JSON.stringify(this.array.sample(arr)); break;
    }
  }

  runObject(method: string): void {
    const obj = { a: 1, b: 2, c: 3 };
    switch (method) {
      case 'deepGet': this.objectResult = String(this.object.deepGet({ a: { b: { c: 42 } } }, 'a.b.c')); break;
      case 'deepClone': this.objectResult = JSON.stringify(this.object.deepClone(obj)); break;
      case 'merge': this.objectResult = JSON.stringify(this.object.merge({ a: 1 } as Record<string, unknown>, { b: 2 } as Partial<Record<string, unknown>>)); break;
      case 'omit': this.objectResult = JSON.stringify(this.object.omit(obj, ['c'])); break;
      case 'pick': this.objectResult = JSON.stringify(this.object.pick(obj, ['a', 'b'])); break;
      case 'isEmpty': this.objectResult = this.object.isEmpty({}) ? 'Empty' : 'Not empty'; break;
      case 'isEqual': this.objectResult = this.object.isEqual({a:1}, {a:1}) ? 'Equal' : 'Not equal'; break;
    }
  }

  runNumber(method: string): void {
    switch (method) {
      case 'formatCurrency': this.numberResult = this.number.formatCurrency(this.numberInput); break;
      case 'formatBytes': this.numberResult = this.number.formatBytes(1048576); break;
      case 'formatPercent': this.numberResult = this.number.formatPercent(0.756); break;
      case 'clamp': this.numberResult = String(this.number.clamp(150, 0, 100)); break;
      case 'round': this.numberResult = String(this.number.round(3.14159, 2)); break;
      case 'randomInt': this.numberResult = String(this.number.randomInt(1, 100)); break;
      case 'isEven': this.numberResult = this.number.isEven(Math.round(this.numberInput)) ? 'Even' : 'Odd'; break;
    }
  }

  runValidation(method: string): void {
    switch (method) {
      case 'isEmail': this.validationResult = this.validation.isEmail(this.validationInput) ? 'Valid' : 'Invalid'; break;
      case 'isUrl': this.validationResult = this.validation.isUrl(this.validationInput) ? 'Valid' : 'Invalid'; break;
      case 'isPhone': this.validationResult = this.validation.isPhone(this.validationInput) ? 'Valid' : 'Invalid'; break;
      case 'isPostalCode': this.validationResult = this.validation.isPostalCode(this.validationInput) ? 'Valid' : 'Invalid'; break;
      case 'isStrongPassword': const r = this.validation.isStrongPassword(this.validationInput); this.validationResult = 'Score: ' + r.score + '/5, ' + (r.valid ? 'Valid' : 'Weak'); break;
      case 'isJSON': this.validationResult = this.validation.isJSON('{"a":1}') ? 'Valid JSON' : 'Invalid JSON'; break;
    }
  }

  runId(method: string): void {
    switch (method) {
      case 'uuid': this.idResult = this.id.uuid(); break;
      case 'nanoid': this.idResult = this.id.nanoid(); break;
      case 'shortId': this.idResult = this.id.shortId(); break;
      case 'hash': this.idResult = this.id.hash('hello'); break;
      case 'snowflake': this.idResult = this.id.snowflake(); break;
      case 'generateCode': this.idResult = this.id.generateCode(6, 'numeric'); break;
      case 'generateToken': this.idResult = this.id.generateToken(16); break;
    }
  }

  runCookie(method: string): void {
    switch (method) {
      case 'set': this.cookie.set(this.cookieKey, this.cookieValue, 7); this.cookieResult = 'Set ' + this.cookieKey + '=' + this.cookieValue; break;
      case 'get': this.cookieResult = this.cookie.get(this.cookieKey) || 'Not found'; break;
      case 'delete': this.cookie.delete(this.cookieKey); this.cookieResult = 'Deleted ' + this.cookieKey; break;
      case 'has': this.cookieResult = this.cookie.has(this.cookieKey) ? 'Exists' : 'Not found'; break;
      case 'all': this.cookieResult = JSON.stringify(this.cookie.all()); break;
    }
  }

  runStorage(method: string, storage: Storage = localStorage): void {
    const engineName = storage === localStorage ? 'localStorage' : 'sessionStorage';
    switch (method) {
      case 'set':
        try {
          const val = JSON.parse(this.storageValue);
          this.storage.set(this.storageKey, val, storage);
          this.storageResult = `Set ${this.storageKey} in ${engineName}`;
        } catch (e) {
          this.storage.set(this.storageKey, this.storageValue, storage);
          this.storageResult = `Set ${this.storageKey} as string in ${engineName}`;
        }
        break;
      case 'get':
        const item = this.storage.get(this.storageKey, null, storage);
        this.storageResult = item ? JSON.stringify(item) : `Not found in ${engineName}`;
        break;
      case 'remove':
        this.storage.remove(this.storageKey, storage);
        this.storageResult = `Removed ${this.storageKey} from ${engineName}`;
        break;
      case 'has':
        this.storageResult = this.storage.has(this.storageKey, storage) ? `Exists in ${engineName}` : `Not found in ${engineName}`;
        break;
      case 'clear':
        this.storage.clear(storage);
        this.storageResult = `Cleared ${engineName}`;
        break;
    }
  }
}
