// src/app/user-registration-form/user-registration-form.component.ts
import { Component, OnInit, Input } from '@angular/core';
// Import for closing the dialog after a successful registration
import { MatDialogRef } from '@angular/material/dialog';
// Import for the API calls made to register the user
import { FetchApiDataService } from '../fetch-api-data.service';
// Import for displaying snack bar notifications to the user
import { MatSnackBar } from '@angular/material/snack-bar';

/**
 * Component for the user registration form.
 * This component allows new users to register by submitting a form with their details.
 */
@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss']
})
export class UserRegistrationFormComponent implements OnInit {

  /**
   * Input data from the user registration form.
   * Contains the user's username, password, email, and birthday.
   * @type {Object} 
   * @property {string} Username - The user's chosen username.
   * @property {string} Password - The user's chosen password.
   * @property {string} Email - The user's email address.
   * @property {string} Birthday - The user's birthdate.
   */
  @Input() userData = { Username: '', Password: '', Email: '', Birthday: '' };

  /**
   * Constructor to inject dependencies required for this component.
   * 
   * @param {FetchApiDataService} fetchApiData - Service to handle API calls for user registration.
   * @param {MatDialogRef<UserRegistrationFormComponent>} dialogRef - Used to close the registration form dialog.
   * @param {MatSnackBar} snackBar - Used to display notifications to the user.
   */
  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    public snackBar: MatSnackBar) { }

  /**
   * Lifecycle hook called when the component is initialized.
   * Currently, no logic is implemented here.
   */
  ngOnInit(): void {}

  /**
   * Method to register a user by submitting the user data to the backend.
   * This sends a POST request to the backend to create a new user and handle responses.
   * 
   * If the registration is successful, the modal is closed and a success message is displayed.
   * If there is an error, a failure message is shown.
   */
  registerUser(): void {
    this.fetchApiData.userRegistration(this.userData).subscribe((result) => {
      // Logic for a successful user registration goes here!
      this.dialogRef.close(); // Closes the modal on success.
      this.snackBar.open(result, 'OK', {
        duration: 2000 // Duration of the snack bar message
      });
    }, (result) => {
      // In case of an error, show the error message in the snack bar
      this.snackBar.open(result, 'OK', {
        duration: 2000 // Duration of the error snack bar message
      });
    });
  }
}
