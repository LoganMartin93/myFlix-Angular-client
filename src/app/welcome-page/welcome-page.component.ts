import { Component, OnInit } from '@angular/core';
import { UserLoginFormComponent } from '../user-login-form/user-login-form.component';
import { UserRegistrationFormComponent } from '../user-registration-form/user-registration-form.component';
import { MatDialog } from '@angular/material/dialog';
import { MovieCardComponent } from '../movie-card/movie-card.component';

/**
 * `WelcomePageComponent` handles the logic for displaying the welcome page.
 * It provides functionality for opening dialogs for user login, registration, and movie browsing.
 */
@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  /**
   * Constructor for `WelcomePageComponent`.
   * Initializes the MatDialog service to open dialogs for different components.
   * 
   * @param dialog - The MatDialog service used to open modal dialogs.
   */
  constructor(public dialog: MatDialog) { }

  /**
   * ngOnInit lifecycle hook for `WelcomePageComponent`.
   * Currently does not perform any actions when the component initializes.
   */
  ngOnInit(): void {
  }

  /**
   * Opens the user registration dialog when called.
   * The dialog allows users to register a new account.
   */
  openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, {
      width: '280px' // Defines the width of the registration dialog
    });
  }

  /**
   * Opens the user login dialog when called.
   * The dialog allows users to log into their existing account.
   */
  openUserLoginDialog(): void {
    this.dialog.open(UserLoginFormComponent, {
      width: '280px' // Defines the width of the login dialog
    });
  }

  /**
   * Opens the movie browsing dialog when called.
   * The dialog allows users to browse movies available in the system.
   */
  openMoviesDialog(): void {
    this.dialog.open(MovieCardComponent, {
      width: '280px' // Defines the width of the movie dialog
    });
  }
}
