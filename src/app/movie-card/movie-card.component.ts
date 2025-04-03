// src/app/movie-card/movie-card.component.ts

// Import necessary Angular core functionalities and the service for fetching movie data.
import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';

/**
 * The MovieCardComponent is responsible for displaying a list of movies.
 * It fetches the movie data from an external API via the FetchApiDataService
 * and renders each movie in the component's template.
 */
@Component({
  selector: 'app-movie-card', // The selector used to include this component in HTML templates.
  templateUrl: './movie-card.component.html', // The HTML template that defines the component's layout.
  styleUrls: ['./movie-card.component.scss'] // The styles associated with this component.
})
export class MovieCardComponent implements OnInit {
  
  /**
   * The array that holds the list of movies fetched from the API.
   * Initially, it is an empty array and is populated once the data is fetched.
   */
  movies: any[] = [];

  /**
   * Constructor for the MovieCardComponent.
   * It injects the FetchApiDataService to fetch movie data from an API.
   * 
   * @param fetchApiData - The service used to interact with the API to fetch movie data.
   */
  constructor(public fetchApiData: FetchApiDataService) { }

  /**
   * Lifecycle hook called when the component is initialized.
   * It triggers the fetchMovies() method to retrieve the list of movies from the API.
   */
  ngOnInit(): void {
    this.getMovies(); // Fetch the list of movies when the component initializes.
  }

  /**
   * Fetches the list of movies from the API via FetchApiDataService.
   * The list is then assigned to the 'movies' array, which is used for rendering in the template.
   */
  getMovies(): void {
    // Call the service's getAllMovies() method and subscribe to the observable to fetch movie data.
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp; // Store the fetched movies in the 'movies' array.
      console.log(this.movies); // Log the fetched movies to the console (for debugging purposes).
      return this.movies; // Return the fetched movies (although not used here).
    });
  }
}
