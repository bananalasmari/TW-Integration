import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  translate: TranslateService;

  constructor() {
    this.translate = inject(TranslateService);
  }

  get currentLanguage(): string | null {
    return this.translate.currentLang;
  }

  /**
   * @returns 
   */
  getUserFullName(): Promise<string> {
    if (typeof TWK === 'undefined' || !TWK.V2.getUserFullName) {
      console.error('TWK is not defined or getUserFullName method is missing.');
      return Promise.reject('TWK is not available.');
    }

    return TWK.V2.getUserFullName().then((response: any) => {
      if (response.success) {
        if(this.currentLanguage?.startsWith('en')){
          return response.result.full_name_en;
        }
        else{
          return response.result.full_name_ar;
        }
      } else {
        throw new Error('Failed to fetch user full name.');
      }
    });
  }
}