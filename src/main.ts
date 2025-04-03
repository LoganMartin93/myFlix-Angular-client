import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

/**
 * This file is the main entry point for the Angular application.
 * It bootstraps the root module (AppModule) and configures the application environment.
 */

/**
 * Checks if the application is running in production mode.
 * If so, enables production optimizations (like disabling Angular's development mode).
 */
if (environment.production) {
  enableProdMode();
}

/**
 * Bootstraps the Angular application by loading the `AppModule`.
 * This starts the Angular framework and initializes the application.
 * If any errors occur during the bootstrap process, they are logged to the console.
 */
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
