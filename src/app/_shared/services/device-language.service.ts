import { Injectable} from '@angular/core';



@Injectable({
  providedIn: 'root',
})
export class DeviceLanguageService {
  constructor() {}

  async getDeviceInfo(): Promise<any> {
    try {
      const ret = await TWK.getDeviceInfo();
      if (ret.success) {
        const currentLanguage = ret.result.app_language;
        console.log('Current Language:', currentLanguage);
        return currentLanguage;
      } else {
        // Handle specific error codes
        console.error('Error Code:', ret.code, 'Status:', ret.status);
        throw new Error(
          `Error Code: ${ret.code}, Status: ${ret.status}`
        );
      }
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
}