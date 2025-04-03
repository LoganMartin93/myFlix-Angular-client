import { Component } from '@angular/core';

/**
 * `AppComponent` serves as the root component for the Angular application.
 * 
 * This component is responsible for rendering the main view of the application,
 * including the title and any other shared layout elements.
 */
@Component({
  selector: 'app-root',  // The component selector used in the HTML to refer to this component
  templateUrl: './app.component.html',  // Path to the HTML template that defines the component's structure
  styleUrls: ['./app.component.scss']  // Path to the SCSS file for styling the component
})
export class AppComponent {
  /**
   * The title of the application, which is displayed in the component's template.
   * This value is assigned to 'myFlix-Angular-client' by default.
   */
  title = 'myFlix-Angular-client';
}
