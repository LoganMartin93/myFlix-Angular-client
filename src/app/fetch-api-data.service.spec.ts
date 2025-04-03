import { TestBed } from '@angular/core/testing';
import { FetchApiDataService } from './fetch-api-data.service';

/**
 * Test suite for `FetchApiDataService`.
 * 
 * This service handles API calls to fetch data for the application.
 * The tests ensure that the service is correctly instantiated and functional.
 */
describe('FetchApiDataService', () => {
  let service: FetchApiDataService;

  /**
   * Sets up the test environment before each test case.
   * Configures the testing module and injects the `FetchApiDataService`.
   */
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchApiDataService);
  });

  /**
   * Test case to check if the `FetchApiDataService` is successfully created.
   */
  it('should be created', () => {
    expect(service).toBeTruthy();  // Verifies that the service instance exists
  });
});
