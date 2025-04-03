import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WelcomePageComponent } from './welcome-page.component';

/**
 * Unit tests for the `WelcomePageComponent`.
 * These tests ensure that the `WelcomePageComponent` is created successfully.
 */
describe('WelcomePageComponent', () => {
  let component: WelcomePageComponent;
  let fixture: ComponentFixture<WelcomePageComponent>;

  /**
   * Sets up the testing environment before each test.
   * It configures the TestBed, declares the component, and compiles components.
   * 
   * This is an asynchronous operation because TestBed.compileComponents() is called.
   */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomePageComponent ] // Declares the component to be tested
    })
    .compileComponents(); // Compiles the components
  }));

  /**
   * Initializes the component before each test.
   * It creates the component instance and triggers change detection.
   */
  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomePageComponent); // Creates the component instance
    component = fixture.componentInstance; // Assigns the component to the `component` variable
    fixture.detectChanges(); // Triggers change detection for the component
  });

  /**
   * Tests if the `WelcomePageComponent` is created successfully.
   * The test will pass if the component is instantiated without errors.
   */
  it('should create', () => {
    expect(component).toBeTruthy(); // Asserts that the component instance exists
  });
});
