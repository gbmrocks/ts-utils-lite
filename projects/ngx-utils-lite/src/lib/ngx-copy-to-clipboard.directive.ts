import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[ngxCopyToClipboard]',
  standalone: true
})
export class NgxCopyToClipboardDirective {
  @Input('ngxCopyToClipboard') textToCopy!: string;

  @HostListener('click')
  async onClick(): Promise<void> {
    if (!this.textToCopy) return;
    
    try {
      await navigator.clipboard.writeText(this.textToCopy);
    } catch (err) {
      const textArea = document.createElement('textarea');
      textArea.value = this.textToCopy;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
  }
}
