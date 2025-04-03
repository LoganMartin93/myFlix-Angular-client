import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * Defines the routes for the application.
 * 
 * The `routes` array can be populated with route configurations that map
 * URL paths to components. Currently, no routes have been configured.
 */
const routes: Routes = [];

@NgModule({
  /**
   * Imports the `RouterModule` and configures the routes for the application.
   * `RouterModule.forRoot(routes)` is used to define the application’s routing.
   */
  imports: [RouterModule.forRoot(routes)],

  /**
   * Exports the `RouterModule` so that it can be used in the application's components.
   */
  exports: [RouterModule]
})

/**
 * `AppRoutingModule` is the module responsible for setting up routing in the Angular application.
 * It imports and exports the `RouterModule` to manage routing within the app.
 */
export class AppRoutingModule { }
