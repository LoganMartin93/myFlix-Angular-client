// src/app/user-registration-form/user-registration-form.component.spec.ts
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserRegistrationFormComponent } from './user-registration-form.component';

/**
 * Unit tests for the UserRegistrationFormComponent.
 * These tests are designed to verify the correct behavior and creation of the component.
 */
describe('UserRegistrationFormComponent', () => {
  
  /**
   * Component instance for testing.
   * @type {UserRegistrationFormComponent}
   */
  let component: UserRegistrationFormComponent;

  /**
   * Fixture for creating and testing the component.
   * @type {ComponentFixture<UserRegistrationFormComponent>}
   */
  let fixture: ComponentFixture<UserRegistrationFormComponent>;

  /**
   * Asynchronous setup for the testing environment.
   * It configures the testing module and compiles the component before tests are run.
   */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRegistrationFormComponent ]
    })
    .compileComponents();
  }));

  /**
   * Synchronous setup after the asynchronous configuration.
   * It creates an instance of the component and triggers change detection.
   */
  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * Test to verify the component creation.
   * Ensures that the component instance is truthy and created successfully.
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
