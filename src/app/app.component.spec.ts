import {async, TestBed} from '@angular/core/testing';
import {AppModule} from "./app.module";
import {AppComponent} from "./app.component";
import {Router} from "@angular/router";
import {createStub} from "./components/util/create-stub";

let mockRouter;

describe('AppComponent', () => {
  let fixture, component;
  beforeEach(async(() => {
    mockRouter = createStub(Router);

    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [
        {provide: Router, useValue: mockRouter}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    spyOn(mockRouter, 'navigateByUrl');
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  describe('routing', () => {
    it('navigates to /dashboard when dashboard link is clicked', () => {
      component.navigateToDashboard();
      expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/dashboard');
    });

    it('navigates to /heroes when Heroes link is clicked', () => {
      component.navigateToHeroes();
      expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/heroes');
    });
  });
});
