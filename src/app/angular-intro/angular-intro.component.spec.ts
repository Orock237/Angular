import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularIntroComponent } from './angular-intro.component';

describe('AngularIntroComponent', () => {
  let component: AngularIntroComponent;
  let fixture: ComponentFixture<AngularIntroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularIntroComponent]
    });
    fixture = TestBed.createComponent(AngularIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
