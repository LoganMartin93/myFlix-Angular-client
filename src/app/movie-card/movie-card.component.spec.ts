// Import necessary testing utilities and the MovieCardComponent to be tested.
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieCardComponent } from './movie-card.component';

/**
 * Test suite for the MovieCardComponent.
 * This suite includes tests that ensure the component behaves as expected.
 */
describe('MovieCardComponent', () => {
  
  // Declare variables for the component instance and the component fixture.
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;

  /**
   * Setup the testing module before each test.
   * This includes configuring the testing module and compiling the component.
   */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieCardComponent ] // Declare the component to be tested.
    })
    .compileComponents(); // Compile the components asynchronously.
  }));

  /**
   * Initialize the component and fixture before each test.
   * This ensures a fresh instance of the component is used for every test.
   */
  beforeEach(() => {
    // Create the component fixture and component instance.
    fixture = TestBed.createComponent(MovieCardComponent);
    component = fixture.componentInstance; // Access the component instance.
    fixture.detectChanges(); // Trigger change detection to initialize the component.
  });

  /**
   * Test case to check if the component is created successfully.
   * This verifies that the component instance is properly initialized.
   */
  it('should create', () => {
    expect(component).toBeTruthy(); // Assert that the component is truthy (exists).
  });
});
