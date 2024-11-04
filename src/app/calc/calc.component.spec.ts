import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcComponent } from './calc.component';

describe('CalcComponent', () => {
  let component: CalcComponent; // component class
  let fixture: ComponentFixture<CalcComponent>; // component html

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalcComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create CalcComponent', () => {
    expect(component).toBeTruthy();
  });

  // testing component ts -- for method
  it('has the add method which produces right output', () => {
    // get the component class
    // assert the result
    expect(component.add(10, 20)).toEqual(30);
    expect(component.add(4, 10)).toEqual(14);
    expect(component.add(5, 100)).toEqual(105);
  });
});
