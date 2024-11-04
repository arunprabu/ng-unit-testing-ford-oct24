import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // let's check the counter's default value
  it('has counter with default value of 0', () => {
    expect(component.counter).toBe(0);
  });

  // let's check the increment logic
  it('has the increment logic that increments the counter', () => {
    expect(component.counter).toBe(0);
    component.handleIncrement();
    expect(component.counter).toBe(1);
    component.handleIncrement();
    component.handleIncrement();
    component.handleIncrement();
    expect(component.counter).toBe(4);
  });

  // let's check the increment button that increments the counter
  it('has the increment button in html that increments the counter', () => {
    // find the increment button from html
    const incrementButton = fixture.nativeElement.querySelector('.increment-btn');
    // trigger the click event
    incrementButton.click();
    expect(component.counter).toBe(1);
    incrementButton.click();
    incrementButton.click();
    incrementButton.click();
    expect(component.counter).toBe(4);
  });
});
