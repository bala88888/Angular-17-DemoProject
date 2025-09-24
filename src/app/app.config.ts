import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http'; // ✅ Import this api intergration======================

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    //always keeps in mind it shoul be imported for api integration========================================
    provideHttpClient(), // ✅ This provides HttpClient
     provideClientHydration()
    ]
};
