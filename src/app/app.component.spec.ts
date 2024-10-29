// AAA Pattern
// Arrange
import { AppComponent } from "./app.component";
import { TestBed } from "@angular/core/testing";

// Act
describe("AppComponent", () => {
  // setup 
  beforeEach(async () => {
    // load the sample in testbed
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  // test cases a.k.a tests a.k.a test specs
  // Testing component class -- Testing variable
  it('has the title variable with "Ng Unit Testing Demo" in comp class', () => {
    // conduct the test
    const fixture = TestBed.createComponent(AppComponent);
    // go into the component instance
    const appComponent = fixture.componentInstance; // get the component class
    // assert the result
    expect(appComponent.title).toEqual('Ng Unit Testing Demo!');
  });

  // Testing component html
  it('has the text Welcome to Ng Unit Testing Demo! in comp html', () => {
    // conduct the test
    const fixture = TestBed.createComponent(AppComponent);
    // trigger change detection
    fixture.detectChanges(); // using this we are checking the updated html
    // go into the component html
    const appComponentHtml = fixture.nativeElement as HTMLElement; // get the html element
    // assert the result
    // find h1 element 
    const h1Element = appComponentHtml.querySelector('h1');
    expect(h1Element?.textContent).toEqual('Welcome to Ng Unit Testing Demo!');
  });

  // testing component ts -- for method 
  it('has the add method which produces right output', () => {
    // conduct the test
    const fixture = TestBed.createComponent(AppComponent);
    // go into the component instance
    const appComponent = fixture.componentInstance; // get the component class
    // assert the result
    expect(appComponent.add(10, 20)).toEqual(30);    
    expect(appComponent.add(4, 10)).toEqual(14);
    expect(appComponent.add(5, 100)).toEqual(105);
  });

  // Testing component's inline styles
  it('has the background color of h4 element to be red', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); // using this we are checking the updated html
    const appComponentHtml = fixture.nativeElement as HTMLElement; // get the html element
    const h4Element = appComponentHtml.querySelector('h4');
    expect(h4Element?.style.backgroundColor).toBe('rgb(255, 255, 0)');
  });

  // TODO: try out external css
  

  
});

