import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StringUtils } from 'ts-string-lite';
import { DateUtils } from 'ts-date-lite';
import { ArrayUtils } from 'ts-array-lite';
import { ObjectUtils } from 'ts-object-lite';
import { NumberUtils } from 'ts-number-lite';
import { ValidationUtils } from 'ts-validation-lite';
import { IdUtils } from 'ts-id-lite';
import { CookieUtils } from 'ts-cookie-lite';

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './showcase.component.html',
  styles: [`
.showcase-container { max-width: 900px; margin: 0 auto; padding: 2rem; }
h1 { font-size: 2.5rem; background: var(--gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: 800; margin-bottom: 0.5rem; }
.subtitle { color: var(--text-muted); margin-bottom: 2rem; font-size: 1.1rem; }
.tabs { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 2rem; }
.tabs button { padding: 0.6rem 1.2rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 12px; color: var(--text-muted); cursor: pointer; transition: all 0.2s; font-weight: 500; }
.tabs button:hover { background: var(--bg-hover); color: var(--text); }
.tabs button.active { background: var(--gradient); color: white; box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3); }
.demo-panel { background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 20px; padding: 2rem; }
.demo h2 { font-size: 1.5rem; color: var(--text); font-weight: 700; margin-bottom: 0.5rem; }
.demo p { color: var(--text-muted); margin-bottom: 1.5rem; }
.demo-box { background: var(--bg); border-radius: 14px; padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem; border: 1px solid var(--border-color); margin-bottom: 1.5rem; }
.input-group { display: flex; flex-direction: column; gap: 0.5rem; }
.input-group label { color: var(--text-muted); font-size: 0.875rem; }
input { padding: 0.75rem 1rem; background: var(--bg-input); border: 1px solid var(--border-color); border-radius: 10px; color: var(--text); }
input:focus { outline: none; border-color: var(--accent); }
.btn-group { display: flex; gap: 0.5rem; flex-wrap: wrap; }
button { padding: 0.75rem 1.5rem; background: var(--gradient); border: none; border-radius: 12px; color: white; font-weight: 600; cursor: pointer; transition: all 0.2s; }
button:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(59, 130, 246, 0.3); }
.code-section { position: relative; margin-top: 1.5rem; }
.code-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; }
.code-header h3 { color: var(--text); font-size: 1rem; margin: 0; }
.copy-btn { padding: 0.4rem 0.8rem; font-size: 0.75rem; background: var(--bg-card); border: 1px solid var(--border-color); color: var(--accent); }
.copy-btn:hover { background: var(--bg-hover); transform: none; box-shadow: none; }
.result { padding: 1rem; background: var(--bg); border: 1px solid var(--border-color); border-radius: 10px; color: var(--accent); font-family: monospace; word-break: break-all; }
.code-section pre { background: var(--bg); border: 1px solid var(--border-color); border-radius: 14px; padding: 1.25rem; overflow-x: auto; margin: 0; }
.code-section code { display: block; font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace; font-size: 0.875rem; line-height: 1.7; white-space: pre; color: var(--text); }
  `]
})
export class ShowcaseComponent {
  string = new StringUtils();
  date = new DateUtils();
  array = new ArrayUtils();
  object = new ObjectUtils();
  number = new NumberUtils();
  validation = new ValidationUtils();
  id = new IdUtils();
  cookie = new CookieUtils();

  activeTab = 'string';

  tabs = [
    { id: 'string', name: 'String' },
    { id: 'date', name: 'Date' },
    { id: 'array', name: 'Array' },
    { id: 'object', name: 'Object' },
    { id: 'number', name: 'Number' },
    { id: 'validation', name: 'Validation' },
    { id: 'id', name: 'ID' },
    { id: 'cookie', name: 'Cookie' }
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
  copyInput = '';
  copyResult = '';

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
    }
  }

  runDate(method: string): void {
    switch (method) {
      case 'format': this.dateResult = this.date.format(this.dateInput, 'YYYY-MM-DD HH:mm:ss'); break;
      case 'relative': this.dateResult = this.date.relative(new Date(Date.now() - 3600000)); break;
      case 'isToday': this.dateResult = this.date.isToday(this.dateInput) ? 'Yes' : 'No'; break;
      case 'add': this.dateResult = this.date.add(this.dateInput, 7, 'day').toISOString(); break;
      case 'diff': this.dateResult = this.date.diff(this.dateInput, new Date()) + ' days'; break;
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
    }
  }

  runValidation(method: string): void {
    switch (method) {
      case 'isEmail': this.validationResult = this.validation.isEmail(this.validationInput) ? 'Valid' : 'Invalid'; break;
      case 'isUrl': this.validationResult = this.validation.isUrl(this.validationInput) ? 'Valid' : 'Invalid'; break;
      case 'isPhone': this.validationResult = this.validation.isPhone(this.validationInput) ? 'Valid' : 'Invalid'; break;
      case 'isPostalCode': this.validationResult = this.validation.isPostalCode(this.validationInput) ? 'Valid' : 'Invalid'; break;
      case 'isStrongPassword': const r = this.validation.isStrongPassword(this.validationInput); this.validationResult = 'Score: ' + r.score + '/5, ' + (r.valid ? 'Valid' : 'Weak'); break;
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
    }
  }

  runCookie(method: string): void {
    switch (method) {
      case 'set': this.cookie.set(this.cookieKey, this.cookieValue, 7); this.cookieResult = 'Set ' + this.cookieKey + '=' + this.cookieValue; break;
      case 'get': this.cookieResult = this.cookie.get(this.cookieKey) || 'Not found'; break;
      case 'delete': this.cookie.delete(this.cookieKey); this.cookieResult = 'Deleted ' + this.cookieKey; break;
      case 'has': this.cookieResult = this.cookie.has(this.cookieKey) ? 'Exists' : 'Not found'; break;
    }
  }

  doCopy(): void {
    navigator.clipboard.writeText(this.copyInput).then(() => {
      this.copyResult = 'Copied to clipboard!';
    }).catch(() => {
      this.copyResult = 'Failed to copy';
    });
  }

  copyCode(tab: string): void {
    const codeMap: Record<string, string> = {
      string: `import { StringUtils } from 'ts-string-lite';

const string = new StringUtils();

string.slugify('Hello World');    // 'hello-world'
string.camelCase('hello world'); // 'helloWorld'
string.kebabCase('Hello World'); // 'hello-world'`,
      date: `import { DateUtils } from 'ts-date-lite';

const date = new DateUtils();

date.format(new Date(), 'YYYY-MM-DD');                    // '2024-01-15'
date.relative(new Date(Date.now() - 3600000));            // '1 hour ago'
date.add(new Date(), 7, 'day');                            // Date + 7 days`,
      array: `import { ArrayUtils } from 'ts-array-lite';

const array = new ArrayUtils();

array.unique([1, 2, 2, 3]);              // [1, 2, 3]
array.chunk([1,2,3,4], 2);               // [[1,2], [3,4]]
array.groupBy(['apple','banana'], s => s[0]); // {a: [...], b: [...]}`,
      object: `import { ObjectUtils } from 'ts-object-lite';

const obj = new ObjectUtils();

obj.deepGet({a: {b: 42}}, 'a.b');    // 42
obj.deepClone({a: 1});               // {a: 1}
obj.merge({a: 1}, {b: 2});           // {a: 1, b: 2}`,
      number: `import { NumberUtils } from 'ts-number-lite';

const num = new NumberUtils();

num.formatCurrency(1234.56);         // '$1,234.56'
num.formatBytes(1048576);            // '1 MB'
num.formatPercent(0.756);            // '75.6%'`,
      validation: `import { ValidationUtils } from 'ts-validation-lite';

const val = new ValidationUtils();

val.isEmail('test@example.com');    // true
val.isUrl('https://google.com');    // true
val.isStrongPassword('Test123!');  // {valid: true, score: 5, ...}`,
      id: `import { IdUtils } from 'ts-id-lite';

const id = new IdUtils();

id.uuid();                // 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
id.nanoid();              // 'V1StGXR8_Z'
id.generateCode(6, 'numeric'); // '482921'`,
      cookie: `import { CookieUtils } from 'ts-cookie-lite';

const cookie = new CookieUtils();

cookie.set('theme', 'dark', 7);
const theme = cookie.get('theme');  // 'dark'
cookie.has('theme');                // true
cookie.delete('theme');`,
      copy: `// Copy to clipboard (browser API)
navigator.clipboard.writeText('Hello World');


import { Utils } from 'ts-utils-lite';
Utils.id.generateCode(6); // Generate random code`
    };
    navigator.clipboard.writeText(codeMap[tab] || '');
  }
}

