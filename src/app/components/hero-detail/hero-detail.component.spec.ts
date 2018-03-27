import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HeroDetailComponent} from './hero-detail.component';
import {HeroDetailModule} from "./hero-detail.module";
import {HeroService} from "../../services/hero.service";
import {createStub} from "../util/create-stub";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Location} from "@angular/common";

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;
  let mockHeroService;
  let expectedHero;
  let mockRouter;

  beforeEach(async(() => {
    mockHeroService = createStub(HeroService);
    mockRouter = createStub(Router);

    TestBed.configureTestingModule({
      imports: [HeroDetailModule],
      providers: [
        {provide: HeroService, useValue: mockHeroService},
        {provide: ActivatedRoute, useValue: {params: Observable.of({id: '11'})}},
        {provide: Router, useValue: mockRouter}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;

    expectedHero = {
      id: 11,
      name: 'Mr.Nice'
    };

    spyOn(mockHeroService, 'getHero').and.returnValue(Observable.of(expectedHero));
    spyOn(mockRouter, 'navigateByUrl');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit', () => {
    expect(component.hero).toEqual(expectedHero)
  });

  it('navigate to dashboard', () => {
    component.navigateToDashboard();
    expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/dashboard');
  });
});
