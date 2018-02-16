import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { BannerInlineComponent } from './banner-inline.component';
import { ComponentFixtureAutoDetect } from "@angular/core/testing";
import { UserService } from "../user.service";

//left off here: https://angular.io/guide/testing#createcomponent
describe('BannerInlineComponent', () => {
  let component: BannerInlineComponent;
  let fixture: ComponentFixture<BannerInlineComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  let welcomeDe: DebugElement;
  let welcomeElement: HTMLElement;
  let userService: UserService;

  let UserServiceStub = {
    isLoggedIn: () => { return true; },
    getUserName: () => { return 'Test User'}
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({ //If you have an external template you have to use the async function
      declarations: [ BannerInlineComponent ],  //declare the test component
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true },
        { provide: UserService, useValue: UserServiceStub } //This is how to provide mocks in Angular Test
      ]
    })
    .compileComponents();//Instead of 2 beforeEach, can use .then() promise
  }));

  beforeEach(() => {
    try {
      fixture = TestBed.createComponent(BannerInlineComponent);
      console.log('HERE IS THE FIXTURE');
      console.log(fixture);
      component = fixture.componentInstance; //Component Test instance
      de = fixture.debugElement.query(By.css('h1')); //Use query all to get all elements that match css selector
      el = de.nativeElement;

      welcomeDe = fixture.debugElement.query(By.css('h3'));
      welcomeElement = welcomeDe.nativeElement;

      // UserService actually injected into the component
      userService = fixture.debugElement.injector.get(UserService); //Works all the time
    } catch(err) {
      console.log(err.toString());
    }
    // userService = TestBed.get(UserService); WIll only work if component and service are in same module (root module)

    //expect(el.textContent).toEqual(''); //This feature is handy because it gives devs a chance to test init state
    //fixture.detectChanges();
    // The above detect change is not needed if ComponentFixtureAutoDetect is present
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display original title', () => {
    //console.log("DEBUG ELEMENT");
    //console.log(de);
    expect(el.textContent).toBe('Test Angular Title');
  });

  it('should detect title change', () => {
    component.title = 'test';
    fixture.detectChanges(); //Makes angular recognize change detection
    expect(el.textContent).toBe('test');
  });

  it('should welcome the user', () => {
    fixture.detectChanges();
    let content = welcomeElement.textContent;
    expect(content).toContain('Welcome');
    expect(content).toContain('Test User');
  });

  it('should welcome Budha', () => {
    spyOn(userService, 'getUserName').and.returnValue('Budha');
    let content = welcomeElement.textContent;
    expect(content).toContain('Welcome');
    expect(content).toContain('Test User');
  });
});
