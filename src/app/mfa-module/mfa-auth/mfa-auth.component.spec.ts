import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfaAuthComponent } from './mfa-auth.component';

describe('MfaAuthComponent', () => {
  let component: MfaAuthComponent;
  let fixture: ComponentFixture<MfaAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MfaAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MfaAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
