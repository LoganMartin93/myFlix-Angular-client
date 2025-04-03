// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

/**
 * Declares a global `require` function to dynamically load test files.
 * This is used to load all `.spec.ts` files for testing.
 */
declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
    keys(): string[];
    <T>(id: string): T;
  };
};

/**
 * Initializes the Angular testing environment.
 * This setup is required to run Angular tests in the browser.
 */
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

/**
 * Dynamically loads all the `.spec.ts` files that are part of the test suite.
 * This allows Karma to discover and run all the unit tests in the application.
 */
const context = require.context('./', true, /\.spec\.ts$/);
// Loads all the test modules into the testing environment.
context.keys().map(context);
