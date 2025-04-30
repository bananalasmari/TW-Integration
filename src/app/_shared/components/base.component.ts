import { inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export class BaseComponent {
  translate: TranslateService;

  constructor() {
    this.translate = inject(TranslateService);
  }

  get currentLanguage(): string | null {
    return this.translate.currentLang;
  }
}
