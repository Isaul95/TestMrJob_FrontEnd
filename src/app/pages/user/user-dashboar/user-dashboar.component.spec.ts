import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboarComponent } from './user-dashboar.component';

describe('UserDashboarComponent', () => {
  let component: UserDashboarComponent;
  let fixture: ComponentFixture<UserDashboarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDashboarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDashboarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
