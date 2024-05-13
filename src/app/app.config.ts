import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from "@angular/fire/storage";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}


const translationConfig = {
  defaultLanguage: 'de',
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient]
  }
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      HttpClientModule,
      provideFirebaseApp(() => initializeApp({
        apiKey: "AIzaSyCafovxWKp-eKxnbMmg1Wad66yUNdwhDOg",
        authDomain: "dabubble-1f165.firebaseapp.com",
        projectId: "dabubble-1f165",
        storageBucket: "dabubble-1f165.appspot.com",
        messagingSenderId: "962658166374",
        appId: "1:962658166374:web:1d1b5cd9692fb287572fa7"
      })),
      provideFirestore(() => getFirestore()),
      provideStorage(() => getStorage()),
      TranslateModule.forRoot(translationConfig),
    ),
    provideAnimationsAsync(),
  ],
};