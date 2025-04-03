import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material modules
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

// Components
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

// Routing
import { RouterModule, Routes } from '@angular/router';

/**
 * The application routes.
 * Defines paths and the components they map to.
 */
const appRoutes: Routes = [
  { path: 'welcome', component: WelcomePageComponent },  // Route for the Welcome Page
  { path: 'movies', component: MovieCardComponent },    // Route for the Movies List
  { path: '', redirectTo: 'welcome', pathMatch: 'prefix' }  // Default route redirects to 'welcome'
];

/**
 * Main module for the application.
 * The `AppModule` includes declarations for components, imports for necessary modules,
 * and configuration for routing and animations.
 */
@NgModule({
  declarations: [
    AppComponent,               // Main application component
    UserRegistrationFormComponent,  // User Registration Form component
    UserLoginFormComponent,         // User Login Form component
    MovieCardComponent,             // Movie Card component
    WelcomePageComponent            // Welcome Page component
  ],
  imports: [
    BrowserModule,                   // Core Angular module
    HttpClientModule,                // Module for HTTP requests
    AppRoutingModule,                // Routing configuration
    BrowserAnimationsModule,         // Animations support
    MatInputModule,                  // Material input component
    MatButtonModule,                 // Material button component
    MatCardModule,                   // Material card component
    MatFormFieldModule,              // Material form field component
    MatDialogModule,                 // Material dialog component
    MatSnackBarModule,               // Material snack bar component
    FormsModule,                     // Angular forms module
    RouterModule.forRoot(appRoutes), // Router configuration
    MatIconModule                    // Material icon component
  ],
  providers: [],  // No specific services are provided here
  bootstrap: [AppComponent]  // Bootstrapping the root component
})

/**
 * `AppModule` is the root module of the Angular application, setting up the app's structure
 * by declaring components, importing necessary modules, and defining routes.
 */
export class AppModule { }
