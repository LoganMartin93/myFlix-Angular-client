import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

/**
 * Unit tests for the `AppComponent`.
 * 
 * These tests verify the basic functionality of the `AppComponent` such as 
 * its creation, title value, and rendering of the title in the template.
 */
describe('AppComponent', () => {
  /**
   * Configures the testing environment before each test is run.
   * `TestBed.configureTestingModule` sets up the module for testing, 
   * including necessary imports and declarations.
   */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule  // Provides routing-related functionality for tests
      ],
      declarations: [
        AppComponent  // Declares the component to be tested
      ],
    }).compileComponents();
  }));

  /**
   * Tests if the `AppComponent` is created successfully.
   * This checks that the component instance is truthy, 
   * meaning it has been properly instantiated.
   */
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  /**
   * Tests if the `AppComponent` has the correct title value.
   * It verifies that the title property of the component matches 'myFlix-Angular-client'.
   */
  it(`should have as title 'myFlix-Angular-client'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('myFlix-Angular-client');
  });

  /**
   * Tests if the title is rendered correctly in the component's template.
   * It checks if the compiled HTML contains the expected text.
   */
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();  // Detects changes and updates the DOM
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('myFlix-Angular-client app is running!');
  });
});
