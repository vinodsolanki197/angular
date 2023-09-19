import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctioncallingComponent } from './functioncalling.component';

describe('FunctioncallingComponent', () => {
  let component: FunctioncallingComponent;
  let fixture: ComponentFixture<FunctioncallingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FunctioncallingComponent]
    });
    fixture = TestBed.createComponent(FunctioncallingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
