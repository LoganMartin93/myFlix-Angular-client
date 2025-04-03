// src/app/user-login-form/user-login-form.component.ts
import { Component, OnInit, Input } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatDialogRef } from '@angular/material/dialog';
import { UserRegistrationFormComponent } from '../user-registration-form/user-registration-form.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

/**
 * UserLoginFormComponent handles the user login process, including form submission, 
 * displaying success or failure messages, and storing the user data in local storage 
 * after a successful login.
 */
@Component({
    selector: 'app-user-login-form',
    templateUrl: './user-login-form.component.html',
    styleUrls: ['./user-login-form.component.scss']
})
export class UserLoginFormComponent implements OnInit {

    /**
     * The user data (username and password) that is bound to the login form.
     * This is initialized with empty values and will be populated when the user enters credentials.
     * @type {{ Username: string, Password: string }}
     */
    @Input() userData = { Username: '', Password: '' };

    /**
     * Creates an instance of UserLoginFormComponent.
     * @param fetchApiData The service to fetch data from the API (e.g., for logging in the user).
     * @param dialogRef Reference to the dialog to close it upon successful login.
     * @param snackBar Service to display snack bar messages for success or failure.
     * @param router Router to navigate to different routes upon login success.
     */
    constructor(
        public fetchApiData: FetchApiDataService,
        public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
        public snackBar: MatSnackBar,
        public router: Router
    ) { }
    
    /**
     * Lifecycle hook that is called on component initialization.
     * Currently, there are no operations performed during initialization.
     */
    ngOnInit(): void {}

    /**
     * Logs in the user by calling the API with the provided user data (username and password).
     * On success, stores the user data and token in local storage and redirects to the 'movies' page.
     * Displays a snack bar with a success or failure message.
     */
    logInUser(): void {
        // Call the login API with the provided user data (username and password)
        this.fetchApiData.userLogin(this.userData).subscribe(res => {
            
            // Close the registration dialog on successful login
            this.dialogRef.close();

            // Show a success message in the snack bar
            this.snackBar.open(`Login success, Welcome ${res.user.Username}`, "OK", {
                duration: 2000
            });

            // Create a user object with additional information and store it in localStorage
            let user = {
                ...res.user,
                id: res.user._id,
                password: this.userData.Password,
                token: res.token
            }
            localStorage.setItem("user", JSON.stringify(user));

            // Redirect the user to the 'movies' route after successful login
            this.router.navigate(["movies"]);
        }, res => {
            // Show an error message in the snack bar if login fails
            this.snackBar.open("Login fail", "OK", {
                duration: 2000
            });
        })
    }
}
