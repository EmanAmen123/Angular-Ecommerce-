import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations'; 
import { headersInterceptor } from './Core/Interceptors/Headers/headers.interceptor';
import { errorhandlingInterceptor } from './Core/Interceptors/ErrorHandling/errorhandling.interceptor';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// Import library module
import { NgxSpinnerModule } from "ngx-spinner";

import { provideToastr } from 'ngx-toastr';
import { loadingInterceptor } from './Core/Interceptors/Loading/loading.interceptor';
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes,withViewTransitions()),
     provideClientHydration(withEventReplay()),provideHttpClient(withFetch(),withInterceptors([headersInterceptor,errorhandlingInterceptor,loadingInterceptor])),
     provideAnimations(), provideToastr(),  importProvidersFrom(NgxSpinnerModule)
    ],
};


