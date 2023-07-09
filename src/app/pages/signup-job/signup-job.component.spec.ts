import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupJobComponent } from './signup-job.component';

describe('SignupJobComponent', () => {
  let component: SignupJobComponent;
  let fixture: ComponentFixture<SignupJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupJobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
