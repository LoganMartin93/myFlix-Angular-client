import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

// Declaring the API URL that will provide data for the client app
const apiUrl = 'https://flix-movie-app-876a7808f8f1.herokuapp.com/';

/**
 * Service for handling API calls to interact with the backend.
 * This service manages user registration, user login, and fetching movie data.
 */
@Injectable({
  providedIn: 'root'
})
export class FetchApiDataService {
  /**
   * Creates an instance of the service.
   * @param http The HttpClient instance used for making HTTP requests.
   */
  constructor(private http: HttpClient) { }

  /**
   * Registers a new user.
   * Sends a POST request to the backend with user data to register a new user.
   * @param userData The data required to register a user (username, password, etc.).
   * @returns An Observable of the response from the API.
   */
  public userRegistration(userData: any): Observable<any> {
    console.log(userData);
    return this.http.post(apiUrl + 'users', userData).pipe(
      catchError(this.handleError)  // Handles any errors that occur during the request
    );
  }

  /**
   * Logs in a user.
   * Sends a POST request to the backend with login data and retrieves the user's session token.
   * @param userData The login credentials (username, password).
   * @returns An Observable of the login response from the API.
   */
  userLogin(userData: any): Observable<any> {
    console.log(userData);
    return this.http.post(apiUrl + 'login/', userData).pipe(
      catchError(this.handleError)  // Handles any errors that occur during the request
    );
  }

  /**
   * Handles errors that occur during HTTP requests.
   * Logs error details to the console and returns a throwError observable with a user-friendly message.
   * @param error The error response from the HTTP request.
   * @returns A throwError observable to notify the caller that an error occurred.
   */
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`
      );
    }
    return throwError(
      'Something bad happened; please try again later.'
    );
  }

  /**
   * Fetches all movie data from the backend.
   * Sends a GET request with the user's token in the header to retrieve the movie data.
   * @returns An Observable containing the list of movies fetched from the API.
   */
  getAllMovies(): Observable<any> {
    const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!).token : '';
    return this.http.get(apiUrl + 'movies', {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`  // Adds the authorization token to the request header
      })
    }).pipe(
      catchError(this.handleError)  // Handles any errors that occur during the request
    );
  }
}
