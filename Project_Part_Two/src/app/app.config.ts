import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes, withComponentInputBinding()),
  provideAnimationsAsync(),
  provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({ projectId: "onoair-30312", appId: "1:618739343837:web:5c47608e2e798695991634", storageBucket: "onoair-30312.firebasestorage.app", apiKey: "AIzaSyCt4drsWwPNLA7us_L9BmJ-TatFVsaDM7w", authDomain: "onoair-30312.firebaseapp.com", messagingSenderId: "618739343837", measurementId: "G-C76C1CLH30" })), provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({ projectId: "onoair-30312", appId: "1:618739343837:web:5c47608e2e798695991634", storageBucket: "onoair-30312.firebasestorage.app", apiKey: "AIzaSyCt4drsWwPNLA7us_L9BmJ-TatFVsaDM7w", authDomain: "onoair-30312.firebaseapp.com", messagingSenderId: "618739343837", measurementId: "G-C76C1CLH30" })), provideFirestore(() => getFirestore())]
};
