import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepasswordComponent } from './createpassword.component';

describe('CreatepasswordComponent', () => {
  let component: CreatepasswordComponent;
  let fixture: ComponentFixture<CreatepasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatepasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
