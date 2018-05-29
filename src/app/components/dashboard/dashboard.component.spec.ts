import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardComponent} from './dashboard.component';
import {DashboardModule} from "./dashboard.module";
import {createStub} from "../util/create-stub";
import {HeroService} from "../../services/hero.service";
import {Observable} from "rxjs/Observable";
import {ActivatedRoute, Router} from "@angular/router";

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let mockHeroService, mockRouter;

  beforeEach(async(() => {
    mockHeroService = createStub(HeroService);
    mockRouter = createStub(Router);

    TestBed.configureTestingModule({
      imports: [DashboardModule],
      providers: [
        {provide: HeroService, useValue: mockHeroService},
        {provide: ActivatedRoute, useValue: {params: Observable.of({id: '11'})}},
        {provide: Router, useValue: mockRouter}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    let heroes = [
      {
        id: 1,
        name: 'Mr.Nice'
      },
      {
        id: 2,
        name: 'Narco'
      },
      {
        id: 3,
        name: 'Bombasto'
      },
      {
        id: 4,
        name: 'Celeritas'
      },
      {
        id: 5,
        name: 'Magneta'
      },
      {
        id: 6,
        name: 'RubberMan'
      },
      {
        id: 7,
        name: 'Dynama'
      },
    ];

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;

    spyOn(mockHeroService, 'getHeroes').and.returnValue(Observable.of(heroes));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve top 4 heroes', async(() => {
    fixture.whenStable().then(() => {
      expect(component.heroes.length).toEqual(4);
    });
  }));
});
