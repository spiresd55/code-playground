import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { TwainComponent } from './twain.component';
import { TwainService } from "./twain.service";
import {DebugElement} from "@angular/core";

describe('TwainComponent', () => {
  let component: TwainComponent;
  let fixture: ComponentFixture<TwainComponent>;
  let twainService: TwainService;
  let de: DebugElement;
  let el: HTMLElement;
  let spy;
  let testQuote = 'test1234';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwainComponent ],
      providers: [ TwainService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwainComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();

    // TwainService actually injected into the component
    twainService = fixture.debugElement.injector.get(TwainService);

    // Setup spy on the `getQuote` method
    spy = spyOn(twainService, 'getQuote')
      .and.returnValue(Promise.resolve(testQuote));

    // Get the Twain quote element by CSS selector (e.g., by class name)
    de = fixture.debugElement.query(By.css('.twain'));
    el = de.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not show quote before init', () => {
    console.log('HERE IS THE TEST CONTENT');
    console.log(el.textContent);
    fixture.detectChanges();
    expect(el.textContent).toBe('...', 'nothing displayed');
    expect(spy.calls.any()).toBe(true, 'getQuote not yet called');
  });

  it('should still not show quote after component initialized', () => {
    fixture.detectChanges();
    expect(el.textContent).toBe('...', 'nothing displayed');
    expect(spy.calls.any()).toBe(true, 'getQuote called');
  });


  it('should show quote after promise resolved', async(() => {
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges(); //Update view with quote
      expect(el.textContent).toBe('test1234');
    });
  }));

  //Approach 2 for async testing
  it('should show quote after getQuote promise (fakeAsync)', fakeAsync(() => {
    fixture.detectChanges();
    tick();                  // wait for async getQuote
    fixture.detectChanges(); // update view with quote
    expect(el.textContent).toBe(testQuote);
  }));

  //Approach 3: Jasmine Done
  it('should show quote after getQuote promise (done)', (done: any) => {
    fixture.detectChanges();

    // get the spy promise and wait for it to resolve
    spy.calls.mostRecent().returnValue.then(() => {
      fixture.detectChanges(); // update view with quote
      expect(el.textContent).toBe(testQuote);
      done();
    });
  });
});
