export class StringUtils {
  private readonly _html_escape_map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };

  slugify(input_text: string): string {
    if (!input_text) return '';
    return input_text.toLowerCase().trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  truncate(input_text: string, max_length: number, suffix: string = '...'): string {
    if (!input_text || input_text.length <= max_length) return input_text;
    return input_text.slice(0, max_length - suffix.length) + suffix;
  }

  capitalize(input_text: string): string {
    if (!input_text) return '';
    return input_text.charAt(0).toUpperCase() + input_text.slice(1).toLowerCase();
  }

  titleCase(input_text: string): string {
    if (!input_text) return '';
    return input_text.replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
  }

  camelCase(input_text: string): string {
    if (!input_text) return '';
    return input_text.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => 
      index === 0 ? word.toLowerCase() : word.toUpperCase()
    ).replace(/[\s_-]+/g, '');
  }

  kebabCase(input_text: string): string {
    if (!input_text) return '';
    return input_text.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/[\s_]+/g, '-').toLowerCase();
  }

  snakeCase(input_text: string): string {
    if (!input_text) return '';
    return input_text.replace(/([a-z])([A-Z])/g, '$1_$2').replace(/[\s-]+/g, '_').toLowerCase();
  }

  pascalCase(input_text: string): string {
    if (!input_text) return '';
    return input_text.replace(/(?:^\w|[A-Z]|\b\w)/g, (word) => word.toUpperCase()).replace(/[\s_-]+/g, '');
  }

  escapeHtml(input_text: string): string {
    if (!input_text) return '';
    return input_text.replace(/[&<>"']/g, (m) => this._html_escape_map[m] || m);
  }

  unescapeHtml(input_text: string): string {
    if (!input_text) return '';
    return input_text.replace(/&(amp|lt|gt|quot|#39);/g, (m) => this._html_escape_map[m] || m);
  }

  repeat(input_text: string, times: number): string {
    return input_text.repeat(Math.max(0, times));
  }

  reverse(input_text: string): string {
    return input_text.split('').reverse().join('');
  }

  base64Encode(input_text: string): string {
    return btoa(unescape(encodeURIComponent(input_text)));
  }

  base64Decode(encoded: string): string {
    return decodeURIComponent(escape(atob(encoded)));
  }

  randomString(length: number): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
}