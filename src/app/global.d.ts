declare const TWK: {
    generateToken(): Promise<any>;
    getDeviceInfo(): Promise<{
      success: boolean;
      result: { app_language: string, appearance: number};
      code?: number;
      status?: string;
    }>;
    
    V2: {
      getUserFullName(): Promise<any>;
    };
  };
  
  interface Window {
    TWK: TWKInterface;
  }

