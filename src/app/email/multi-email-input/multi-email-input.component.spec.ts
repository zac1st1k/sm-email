import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiEmailInputComponent } from './multi-email-input.component';

describe('MultiEmailInputComponent', () => {
  let component: MultiEmailInputComponent;
  let fixture: ComponentFixture<MultiEmailInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiEmailInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiEmailInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
