import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakesurveyComponent } from './takesurvey.component';

describe('TakesurveyComponent', () => {
  let component: TakesurveyComponent;
  let fixture: ComponentFixture<TakesurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakesurveyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakesurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
