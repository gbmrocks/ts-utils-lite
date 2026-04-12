import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StringUtils } from '../../../string';
import { DateUtils } from '../../../date';
import { ArrayUtils } from '../../../array';
import { ObjectUtils } from '../../../object';
import { NumberUtils } from '../../../number';
import { ValidationUtils } from '../../../validation';
import { IdUtils } from '../../../id';
import { CookieUtils } from '../../../cookie';

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
<div class="showcase-container">
  <h1>ngx-utils-lite</h1>
  <p class="subtitle">Learn how to use ngx-utils-lite in your Angular projects</p>

  <nav class="tabs">
    <button *ngFor="let tab of tabs" 
      [class.active]="activeTab === tab.id"
      (click)="activeTab = tab.id">
      {{ tab.name }}
    </button>
  </nav>

  <div class="demo-panel">
    <div *ngIf="activeTab === 'string'" class="demo">
      <h2>String Utils</h2>
      <p>String manipulation and formatting</p>
      
      <div class="demo-box">
        <div class="input-group">
          <label>Input:</label>
          <input [(ngModel)]="stringInput" />
        </div>
        <div class="btn-group">
          <button (click)="runString('slugify')">slugify</button>
          <button (click)="runString('camelCase')">camelCase</button>
          <button (click)="runString('kebabCase')">kebabCase</button>
          <button (click)="runString('pascalCase')">pascalCase</button>
          <button (click)="runString('truncate')">truncate</button>
          <button (click)="runString('capitalize')">capitalize</button>
          <button (click)="runString('titleCase')">titleCase</button>
          <button (click)="runString('escapeHtml')">escapeHtml</button>
        </div>
        <div *ngIf="stringResult" class="result">{{ stringResult }}</div>
      </div>

      <div class="code-section">
        <div class="code-header">
          <h3>How to use:</h3>
          <button class="copy-btn" (click)="copyCode('string')">Copy</button>
        </div>
        <pre><code>import &#123; Injectable &#125; from '&#64;angular/core';
import &#123; NgxStringUtils &#125; from 'ngx-utils-lite';

&#64;Injectable(&#123; providedIn: 'root' &#125;)
export class MyService &#123;
  constructor(private str: NgxStringUtils) &#123; &#125;
  
  myMethod(): void &#123;
    this.str.slugify('Hello World');
    this.str.camelCase('hello world');
  &#125;
&#125;</code></pre>
      </div>
    </div>

    <div *ngIf="activeTab === 'date'" class="demo">
      <h2>Date Utils</h2>
      <p>Date manipulation and formatting</p>
      
      <div class="demo-box">
        <div class="btn-group">
          <button (click)="runDate('format')">format</button>
          <button (click)="runDate('relative')">relative</button>
          <button (click)="runDate('isToday')">isToday</button>
          <button (click)="runDate('add')">add(7 days)</button>
          <button (click)="runDate('diff')">diff(days)</button>
        </div>
        <div *ngIf="dateResult" class="result">{{ dateResult }}</div>
      </div>

      <div class="code-section">
        <div class="code-header">
          <h3>How to use:</h3>
          <button class="copy-btn" (click)="copyCode('date')">Copy</button>
        </div>
        <pre><code>import &#123; Injectable &#125; from '&#64;angular/core';
import &#123; NgxDateUtils &#125; from 'ngx-utils-lite';

&#64;Injectable(&#123; providedIn: 'root' &#125;)
export class MyService &#123;
  constructor(private date: NgxDateUtils) &#123; &#125;
  
  myMethod(): void &#123;
    this.date.format(new Date(), 'YYYY-MM-DD');
    this.date.relative(new Date(Date.now() - 3600000));
    this.date.add(new Date(), 7, 'day');
  &#125;
&#125;</code></pre>
      </div>
    </div>

    <div *ngIf="activeTab === 'array'" class="demo">
      <h2>Array Utils</h2>
      <p>Array manipulation utilities</p>
      
      <div class="demo-box">
        <div class="input-group">
          <label>Input (comma-separated):</label>
          <input [(ngModel)]="arrayInput" />
        </div>
        <div class="btn-group">
          <button (click)="runArray('unique')">unique</button>
          <button (click)="runArray('chunk')">chunk(2)</button>
          <button (click)="runArray('groupBy')">groupBy</button>
          <button (click)="runArray('shuffle')">shuffle</button>
          <button (click)="runArray('compact')">compact</button>
        </div>
        <div *ngIf="arrayResult" class="result">{{ arrayResult }}</div>
      </div>

      <div class="code-section">
        <div class="code-header">
          <h3>How to use:</h3>
          <button class="copy-btn" (click)="copyCode('array')">Copy</button>
        </div>
        <pre><code>import &#123; Injectable &#125; from '&#64;angular/core';
import &#123; NgxArrayUtils &#125; from 'ngx-utils-lite';

&#64;Injectable(&#123; providedIn: 'root' &#125;)
export class MyService &#123;
  constructor(private arr: NgxArrayUtils) &#123; &#125;
  
  myMethod(): void &#123;
    this.arr.unique([1, 2, 2, 3]);
    this.arr.chunk([1, 2, 3, 4], 2);
    this.arr.groupBy(['apple', 'banana'], s => s[0]);
  &#125;
&#125;</code></pre>
      </div>
    </div>

    <div *ngIf="activeTab === 'object'" class="demo">
      <h2>Object Utils</h2>
      <p>Object manipulation and comparison</p>
      
      <div class="demo-box">
        <div class="btn-group">
          <button (click)="runObject('deepGet')">deepGet</button>
          <button (click)="runObject('deepClone')">deepClone</button>
          <button (click)="runObject('merge')">merge</button>
          <button (click)="runObject('omit')">omit</button>
          <button (click)="runObject('pick')">pick</button>
          <button (click)="runObject('isEmpty')">isEmpty</button>
        </div>
        <div *ngIf="objectResult" class="result">{{ objectResult }}</div>
      </div>

      <div class="code-section">
        <div class="code-header">
          <h3>How to use:</h3>
          <button class="copy-btn" (click)="copyCode('object')">Copy</button>
        </div>
        <pre><code>import &#123; Injectable &#125; from '&#64;angular/core';
import &#123; NgxObjectUtils &#125; from 'ngx-utils-lite';

&#64;Injectable(&#123; providedIn: 'root' &#125;)
export class MyService &#123;
  constructor(private obj: NgxObjectUtils) &#123; &#125;
  
  myMethod(): void &#123;
    this.obj.deepGet(&#123;a: &#123;b: 42&#125;&#125;, 'a.b');
    this.obj.deepClone(&#123;a: 1&#125;);
    this.obj.merge(&#123;a: 1&#125;, &#123;b: 2&#125;);
  &#125;
&#125;</code></pre>
      </div>
    </div>

    <div *ngIf="activeTab === 'number'" class="demo">
      <h2>Number Utils</h2>
      <p>Number formatting and math utilities</p>
      
      <div class="demo-box">
        <div class="btn-group">
          <button (click)="runNumber('formatCurrency')">formatCurrency</button>
          <button (click)="runNumber('formatBytes')">formatBytes</button>
          <button (click)="runNumber('formatPercent')">formatPercent</button>
          <button (click)="runNumber('clamp')">clamp</button>
          <button (click)="runNumber('round')">round</button>
          <button (click)="runNumber('randomInt')">randomInt</button>
        </div>
        <div *ngIf="numberResult" class="result">{{ numberResult }}</div>
      </div>

      <div class="code-section">
        <div class="code-header">
          <h3>How to use:</h3>
          <button class="copy-btn" (click)="copyCode('number')">Copy</button>
        </div>
        <pre><code>import &#123; Injectable &#125; from '&#64;angular/core';
import &#123; NgxNumberUtils &#125; from 'ngx-utils-lite';

&#64;Injectable(&#123; providedIn: 'root' &#125;)
export class MyService &#123;
  constructor(private num: NgxNumberUtils) &#123; &#125;
  
  myMethod(): void &#123;
    this.num.formatCurrency(1234.56);
    this.num.formatBytes(1048576);
    this.num.formatPercent(0.756);
  &#125;
&#125;</code></pre>
      </div>
    </div>

    <div *ngIf="activeTab === 'validation'" class="demo">
      <h2>Validation Utils</h2>
      <p>Input validation and pattern matching</p>
      
      <div class="demo-box">
        <div class="input-group">
          <label>Input:</label>
          <input [(ngModel)]="validationInput" />
        </div>
        <div class="btn-group">
          <button (click)="runValidation('isEmail')">isEmail</button>
          <button (click)="runValidation('isUrl')">isUrl</button>
          <button (click)="runValidation('isPhone')">isPhone</button>
          <button (click)="runValidation('isPostalCode')">isPostalCode</button>
          <button (click)="runValidation('isStrongPassword')">isStrongPassword</button>
        </div>
        <div *ngIf="validationResult" class="result">{{ validationResult }}</div>
      </div>

      <div class="code-section">
        <div class="code-header">
          <h3>How to use:</h3>
          <button class="copy-btn" (click)="copyCode('validation')">Copy</button>
        </div>
        <pre><code>import &#123; Injectable &#125; from '&#64;angular/core';
import &#123; NgxValidationUtils &#125; from 'ngx-utils-lite';

&#64;Injectable(&#123; providedIn: 'root' &#125;)
export class MyService &#123;
  constructor(private val: NgxValidationUtils) &#123; &#125;
  
  myMethod(): void &#123;
    this.val.isEmail('test' + '&#64;example.com');
    this.val.isUrl('https://google.com');
    this.val.isStrongPassword('Test123!');
  &#125;
&#125;</code></pre>
      </div>
    </div>

    <div *ngIf="activeTab === 'id'" class="demo">
      <h2>ID Utils</h2>
      <p>Unique ID and code generation</p>
      
      <div class="demo-box">
        <div class="btn-group">
          <button (click)="runId('uuid')">uuid</button>
          <button (click)="runId('nanoid')">nanoid</button>
          <button (click)="runId('shortId')">shortId</button>
          <button (click)="runId('hash')">hash</button>
          <button (click)="runId('snowflake')">snowflake</button>
          <button (click)="runId('generateCode')">generateCode</button>
        </div>
        <div *ngIf="idResult" class="result">{{ idResult }}</div>
      </div>

      <div class="code-section">
        <div class="code-header">
          <h3>How to use:</h3>
          <button class="copy-btn" (click)="copyCode('id')">Copy</button>
        </div>
        <pre><code>import &#123; Injectable &#125; from '&#64;angular/core';
import &#123; NgxIdUtils &#125; from 'ngx-utils-lite';

&#64;Injectable(&#123; providedIn: 'root' &#125;)
export class MyService &#123;
  constructor(private id: NgxIdUtils) &#123; &#125;
  
  myMethod(): void &#123;
    this.id.uuid();
    this.id.nanoid();
    this.id.generateCode(6, 'numeric');
  &#125;
&#125;</code></pre>
      </div>
    </div>

    <div *ngIf="activeTab === 'cookie'" class="demo">
      <h2>Cookie Utils</h2>
      <p>Browser cookie management</p>
      
      <div class="demo-box">
        <div class="input-group">
          <label>Key:</label>
          <input [(ngModel)]="cookieKey" />
        </div>
        <div class="input-group">
          <label>Value:</label>
          <input [(ngModel)]="cookieValue" />
        </div>
        <div class="btn-group">
          <button (click)="runCookie('set')">set</button>
          <button (click)="runCookie('get')">get</button>
          <button (click)="runCookie('has')">has</button>
          <button (click)="runCookie('delete')">delete</button>
        </div>
        <div *ngIf="cookieResult" class="result">{{ cookieResult }}</div>
      </div>

      <div class="code-section">
        <div class="code-header">
          <h3>How to use:</h3>
          <button class="copy-btn" (click)="copyCode('cookie')">Copy</button>
        </div>
        <pre><code>import &#123; Injectable &#125; from '&#64;angular/core';
import &#123; NgxCookieUtils &#125; from 'ngx-utils-lite';

&#64;Injectable(&#123; providedIn: 'root' &#125;)
export class MyService &#123;
  constructor(private cookie: NgxCookieUtils) &#123; &#125;
  
  myMethod(): void &#123;
    this.cookie.set('theme', 'dark', 7);
    const theme = this.cookie.get('theme');
    const has = this.cookie.has('theme');
  &#125;
&#125;</code></pre>
      </div>
    </div>

    <div *ngIf="activeTab === 'copy'" class="demo">
      <h2>Copy to Clipboard</h2>
      <p>Use the browser's clipboard API</p>
      
      <div class="demo-box">
        <div class="input-group">
          <label>Text to copy:</label>
          <input [(ngModel)]="copyInput" placeholder="Type something..." />
        </div>
        <button (click)="doCopy()">Copy Text</button>
        <div *ngIf="copyResult" class="result">{{ copyResult }}</div>
      </div>

      <div class="code-section">
        <div class="code-header">
          <h3>How to use:</h3>
          <button class="copy-btn" (click)="copyCode('copy')">Copy</button>
        </div>
        <pre><code><span class="keyword">import</span> <span class="punctuation">&#123;</span> <span class="type">Component</span> <span class="punctuation">&#125;</span> <span class="keyword">from</span> <span class="string">'&#64;angular/core'</span>;
<span class="keyword">import</span> <span class="punctuation">&#123;</span> <span class="type">NgxCopyToClipboardDirective</span> <span class="punctuation">&#125;</span> <span class="keyword">from</span> <span class="string">'ngx-utils-lite'</span>;

<span class="decorator">&#64;Component</span><span class="punctuation">(&#123;</span>
  <span class="property">selector</span>: <span class="string">'app-my-component'</span>,
  <span class="property">standalone</span>: <span class="keyword">true</span>,
  <span class="property">imports</span>: <span class="punctuation">[</span><span class="type">NgxCopyToClipboardDirective</span><span class="punctuation">]</span>,
  <span class="property">template</span>: <span class="string">\`</span>
<span class="string">    &lt;input [(ngModel)]="text" /&gt;</span>
<span class="string">    &lt;button [ngxCopyToClipboard]="text"&gt;Copy&lt;/button&gt;</span>
<span class="string">  \`</span>
<span class="punctuation">&#125;)</span>
<span class="keyword">export</span> <span class="keyword">class</span> <span class="type">MyComponent</span> <span class="punctuation">&#123;</span>
  <span class="property">text</span> = <span class="string">'Hello World'</span>;
<span class="punctuation">&#125;</span></code></pre>
      </div>
    </div>
  </div>
</div>
  `,
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
  string = inject(StringUtils);
  date = inject(DateUtils);
  array = inject(ArrayUtils);
  object = inject(ObjectUtils);
  number = inject(NumberUtils);
  validation = inject(ValidationUtils);
  id = inject(IdUtils);
  cookie = inject(CookieUtils);

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

  stringInput = 'Hello World from ngx-utils';
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
      case 'isUrl': this.validationResult = this.validation.isUrl('https://google.com') ? 'Valid' : 'Invalid'; break;
      case 'isPhone': this.validationResult = this.validation.isPhone('1234567890') ? 'Valid' : 'Invalid'; break;
      case 'isPostalCode': this.validationResult = this.validation.isPostalCode('12345') ? 'Valid' : 'Invalid'; break;
      case 'isStrongPassword': const r = this.validation.isStrongPassword('Test123!'); this.validationResult = 'Score: ' + r.score + '/5, ' + (r.valid ? 'Valid' : 'Weak'); break;
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
      string: `import { StringUtils } from 'ngx-utils-lite';

const string = new StringUtils();

string.slugify('Hello World');    // 'hello-world'
string.camelCase('hello world'); // 'helloWorld'
string.kebabCase('Hello World'); // 'hello-world'`,
      date: `import { DateUtils } from 'ngx-utils-lite';

const date = new DateUtils();

date.format(new Date(), 'YYYY-MM-DD');                    // '2024-01-15'
date.relative(new Date(Date.now() - 3600000));            // '1 hour ago'
date.add(new Date(), 7, 'day');                            // Date + 7 days`,
      array: `import { ArrayUtils } from 'ngx-utils-lite';

const array = new ArrayUtils();

array.unique([1, 2, 2, 3]);              // [1, 2, 3]
array.chunk([1,2,3,4], 2);               // [[1,2], [3,4]]
array.groupBy(['apple','banana'], s => s[0]); // {a: [...], b: [...]}`,
      object: `import { ObjectUtils } from 'ngx-utils-lite';

const obj = new ObjectUtils();

obj.deepGet({a: {b: 42}}, 'a.b');    // 42
obj.deepClone({a: 1});               // {a: 1}
obj.merge({a: 1}, {b: 2});           // {a: 1, b: 2}`,
      number: `import { NumberUtils } from 'ngx-utils-lite';

const num = new NumberUtils();

num.formatCurrency(1234.56);         // '$1,234.56'
num.formatBytes(1048576);            // '1 MB'
num.formatPercent(0.756);           // '75.6%'`,
      validation: `import { ValidationUtils } from 'ngx-utils-lite';

const val = new ValidationUtils();

val.isEmail('test@example.com');    // true
val.isUrl('https://google.com');    // true
val.isStrongPassword('Test123!');  // {valid: true, score: 5, ...}`,
      id: `import { IdUtils } from 'ngx-utils-lite';

const id = new IdUtils();

id.uuid();                // 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
id.nanoid();              // 'V1StGXR8_Z'
id.generateCode(6, 'numeric'); // '482921'`,
      cookie: `import { CookieUtils } from 'ngx-utils-lite';

const cookie = new CookieUtils();

cookie.set('theme', 'dark', 7);
const theme = cookie.get('theme');  // 'dark'
cookie.has('theme');                // true
cookie.delete('theme');`,
      copy: `// Copy to clipboard (browser API)
navigator.clipboard.writeText('Hello World');

// Or use the Utils helper
import { Utils } from 'ngx-utils-lite';
Utils.id.generateCode(6); // Generate random code`
    };
    navigator.clipboard.writeText(codeMap[tab] || '');
  }
}